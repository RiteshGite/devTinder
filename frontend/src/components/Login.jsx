import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";
import toast from "react-hot-toast";
import { useSelector } from "react-redux"; 
import { Navigate } from "react-router-dom";

const Login = () => {
  const [emailId, setEmail] = useState("hitesh.dev@gmail.com");
  const [password, setPassword] = useState("Dev@12345");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  if (user) {
    return <Navigate to="/feed" replace />;
  }

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
    } catch (err) {
      setError(err.response?.data?.errors || "Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-300 px-4">
      <div className="w-full max-w-md">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-center mb-2">
              Welcome Back
            </h2>

            <p className="text-center text-base-content/60 mb-4">
              Login to continue your journey
            </p>

            <div className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={emailId}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    className="input input-bordered w-full pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {error && <p className="text-error text-sm mt-1">{error}</p>}

              <button
                className="btn btn-primary w-full"
                onClick={handleLoginBtn}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
