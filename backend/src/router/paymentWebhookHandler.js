const Payment = require("../models/payment");
const stripe = require("../config/stripe");
const { MEMBERSHIP_PLANS } = require("../utils/constants");
const User = require("../models/user");

const addMonths = (baseDate, months) => {
    const d = new Date(baseDate);
    d.setMonth(d.getMonth() + months);
    return d;
};

const paymentWebhookHandler = async (req, res) => {
    const sig = req.headers["stripe-signature"];
    let event;

    try {
        event = stripe.webhooks.constructEvent(
            req.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err) {
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type !== "checkout.session.completed") {
        return res.json({ received: true });
    }

    const session = event.data.object;

    const planType = session.metadata?.membership_type;
    const userId = session.metadata?.userId;

    if (!planType || !userId) {
        return res.json({ received: true });
    }

    const plan = MEMBERSHIP_PLANS[planType];
    if (!plan) {
        return res.json({ received: true });
    }

    const durationInMonths = parseInt(plan.period, 10);

    // ================= PAYMENT UPDATE =================
    const payment = await Payment.findOneAndUpdate(
        {
            orderId: session.id,
            status: { $ne: "completed" },
        },
        {
            $set: {
                paymentId: session.payment_intent,
                status: "completed",
            },
        },
        { new: true }
    );

    // already processed webhook
    if (!payment) {
        return res.json({ received: true });
    }

    // ================= MEMBERSHIP LOGIC =================
    const user = await User.findById(userId);
    if (!user) {
        return res.json({ received: true });
    }

    const oldExpireDate = user.memberships[planType].expiresAt;
    const now = new Date();

    const baseDate =
        oldExpireDate && oldExpireDate > now
            ? oldExpireDate
            : now;

    const newExpireDate = addMonths(baseDate, durationInMonths);

    user.memberships[planType].expiresAt = newExpireDate;
    user.memberships[planType].active = true;
    
    await user.save();

    return res.json({ received: true });
};

module.exports = paymentWebhookHandler;
