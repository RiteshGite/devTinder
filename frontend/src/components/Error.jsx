import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full text-center">
        <img
          src="shark.avif"
          alt="Unexpected error"
          className="mx-auto mb-6 w-40 sm:w-52 md:w-60"
        />

        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
          Something went wrong
        </h1>

        <p className="text-gray-600 text-sm sm:text-base mb-6">
          We’re experiencing a temporary issue. Please refresh the page or try
          again later.
        </p>

        <button
          onClick={() => navigate("/feed", { replace: true })}
          className="w-full sm:w-auto px-6 py-2 rounded-md bg-black text-white text-sm hover:bg-gray-800 transition"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
};

export default Error;
