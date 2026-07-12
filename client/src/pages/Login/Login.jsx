import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="min-h-screen bg-slate-100 flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-900">Welcome Back</h1>

          <p className="text-gray-500 mt-3">
            Login to access your EstatePro account.
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Password</label>

            <input
              type="password"
              placeholder="Enter password"
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition">
            Login
          </button>
        </form>

        <p className="text-center mt-8 text-gray-600">
          Don't have an account?
          <Link to="/register" className="text-blue-600 font-semibold ml-2">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
