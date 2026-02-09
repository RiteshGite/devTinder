import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSignUpForm, setSignUpForm] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginBtn = async () => {
    setError("");
    try {
      const res = await axios.post(
        `${BASE_URL}/login`,
        { emailId, password },
        { withCredentials: true },
      );
      dispatch(addUser(res.data.user));
      toast.success("Login successful");
      navigate("/feed");
    } catch (err) {
      setError(err.response?.data?.errors || "Invalid email or password");
    }
  };

  const handleSignUpBtn = async () => {
    setError("");
    try {
      const res = await axios.post(
        `${BASE_URL}/signup`,
        { firstName, lastName, emailId, password },
        { withCredentials: true },
      );
      dispatch(addUser(res.data.user));
      toast.success("Registration successful");
      navigate("/profile");
    } catch (err) {
      setError(err.response?.data?.errors || "Invalid Data Filled");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-300 px-4 py-10">
      <div className="w-full max-w-md">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body gap-4 p-5 sm:p-8">
            {/* Heading */}
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold">
                {isSignUpForm ? "Create Account" : "Welcome Back"}
              </h2>
              <p className="text-sm sm:text-base text-base-content/60 mt-1">
                {isSignUpForm
                  ? "Join DevConnect and start connecting"
                  : "Login to continue your journey"}
              </p>
            </div>

            {/* Form */}
            <div className="space-y-3">
              {isSignUpForm && (
                <>
                  <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="input input-bordered w-full"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="input input-bordered w-full"
                  />
                </>
              )}

              <input
                type="email"
                placeholder="Email"
                value={emailId}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered w-full pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-base-content/60"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {error && (
                <p className="text-error text-sm text-center">{error}</p>
              )}

              <button
                onClick={!isSignUpForm ? handleLoginBtn : handleSignUpBtn}
                className="btn btn-primary w-full mt-2"
              >
                {isSignUpForm ? "Sign Up" : "Login"}
              </button>
            </div>

            {/* Footer text */}
            <div className="text-center text-xs sm:text-sm text-base-content/60 mt-2">
              {!isSignUpForm ? (
                <>
                  New user?
                  <button
                    onClick={() => setSignUpForm(true)}
                    className="ml-1 font-semibold text-primary hover:underline"
                  >
                    Create an account
                  </button>
                </>
              ) : (
                <>
                  Already registered?
                  <button
                    onClick={() => setSignUpForm(false)}
                    className="ml-1 font-semibold text-primary hover:underline"
                  >
                    Log in
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
