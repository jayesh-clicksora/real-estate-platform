import { NavLink } from "react-router-dom";
import { navLinks } from "./navbarData";

function MobileMenu({ isOpen, toggleMenu }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity"
        onClick={toggleMenu}
      />

      {/* Drawer Menu */}
      <div className="fixed top-0 right-0 h-full w-64 bg-white z-50 p-6 shadow-xl md:hidden transform transition-transform duration-300">
        {/* Close Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `text-base font-medium block py-2 transition-colors ${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile CTA Button */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-3 rounded-lg transition-colors shadow-sm">
            List Property
          </button>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
