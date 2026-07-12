import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="min-h-screen bg-slate-100 flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-900">Create Account</h1>

          <p className="text-gray-500 mt-3">
            Join EstatePro and discover premium properties.
          </p>
        </div>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-600 outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-600 outline-none"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-600 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-600 outline-none"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-600 outline-none"
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition">
            Create Account
          </button>
        </form>

        <p className="text-center mt-8 text-gray-600">
          Already have an account?
          <Link to="/login" className="text-blue-600 font-semibold ml-2">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
