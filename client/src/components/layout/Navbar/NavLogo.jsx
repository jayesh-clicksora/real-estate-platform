import { Link } from "react-router-dom";

function NavLogo() {
  return (
    <Link
      to="/"
      className="text-2xl font-extrabold tracking-tight text-blue-600 hover:opacity-90 transition-opacity"
    >
      Estate<span className="text-gray-900">Pro</span>
    </Link>
  );
}

export default NavLogo;
