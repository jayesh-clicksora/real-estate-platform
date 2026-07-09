import { useState } from "react";
import NavLogo from "./NavLogo";
import DesktopMenu from "./DesktopMenu";
import NavButton from "./NavButton";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 w-full">
      <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <NavLogo />

        {/* Desktop Navigation Links */}
        <DesktopMenu />

        {/* Call To Action Button */}
        <NavButton />

        {/* Hamburger Icon for Mobile */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle Menu"
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
}

export default Navbar;
