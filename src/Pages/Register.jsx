import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Contexts/CreateContext";
// import { updateProfile } from "firebase/auth";

export default function Register() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const { createUser, runningUser, updateUserProfile } =
    useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userName = e.target.name.value;
    const url = e.target.url.value;
    createUser(email, password).then((res) => {
      console.log("user created", res.user);
      return updateUserProfile(userName, url);
    });
  };

  console.log(runningUser);
  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      <div className="bg-white absolute top-10 rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Login your account
        </h1>

        <form onSubmit={handleRegister} className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Photo URL
            </label>
            <input
              type="text"
              name="url"
              placeholder="Enter your photo URL"
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
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
          <button className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 rounded-md transition">
            Register
          </button>
        </form>

        {/* Register Link */}
        <div className="text-center mt-6">
          <span className="text-gray-600 text-sm">
            Already Have An Account ?{" "}
            <Link
              to="/auth/login"
              className="text-red-500 hover:text-red-600 font-semibold"
            >
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
