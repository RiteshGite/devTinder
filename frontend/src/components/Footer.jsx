import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Dev<span className="text-primary">Tinder</span>
            </h2>
            <p className="mt-3 text-sm text-base-content/70">
              A developer-first platform to connect, collaborate, and grow
              together. Built with passion for clean code and real networking.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Contact</h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} />
                <a
                  href="mailto:riteshgite2005@gmail.com"
                  className="hover:underline"
                >
                  riteshgite2005@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={16} />
                <a href="tel:+918446170267" className="hover:underline">
                  +91 8446170267
                </a>
              </li>
            </ul>
          </div>

          {/* SOCIALS */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Connect</h3>

            <div className="flex gap-4">
              <a
                href="https://github.com/RiteshGite"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-circle"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/ritesh-gite/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-circle"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="divider my-8"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-base-content/60">
          <p>© {new Date().getFullYear()} DevTinder. All rights reserved.</p>

          <p>
            Built by{" "}
            <span className="font-medium text-base-content">Ritesh Gite</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
