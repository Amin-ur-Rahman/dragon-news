import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/CreateContext";

export default function Login() {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((res) => {
        console.log("user loged in", res.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => console.log(error, "login error"));
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      <div className="bg-white absolute top-10 rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Login your account
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Input */}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              name="email"
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Login Button */}

          <button
            type="submit"
            className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 rounded-md transition"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <div className="text-center mt-6">
          <span className="text-gray-600 text-sm">
            Don't Have An Account ?{" "}
            <NavLink
              to="/auth/register"
              className="text-red-500 hover:text-red-600 font-semibold"
            >
              Register
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
}
