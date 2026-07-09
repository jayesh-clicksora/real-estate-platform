import { NavLink } from "react-router-dom";
import { navLinks } from "./navbarData";

function DesktopMenu() {
  return (
    <ul className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <li key={link.id}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                isActive ? "text-blue-600 font-semibold" : "text-gray-600"
              }`
            }
          >
            {link.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default DesktopMenu;
