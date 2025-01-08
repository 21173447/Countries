import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  countries: { name: { common: string }; cca3: string }[] | undefined;
}

const Navbar: React.FC<NavbarProps> = ({ countries = [] }) => {
  return (
    <nav className="bg-red-900 text-white px-5 py-3">
      <div className="flex justify-between items-center">
      <Link to={"/"}>
  <div className="text-lg font-bold">
    <span className="text-White">COUNTRY</span>
    <span className="text-gray-900">EXPLORER</span>
  </div>
</Link>

        <ul className="hidden lg:flex space-x-4">
          {countries.slice(0, 10).map((country) => (
            <li key={country.cca3}>
              <Link
                to={`/flag/${country.cca3}`}
                className="hover:text-red-300 transition-colors"
              >
                {country.name.common}
              </Link>
            </li>
          ))}
          
          <li>
            <Link
              to="/about"
              className="hover:text-red-300 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/get-in-touch"
              className="hover:text-red-300 transition-colors"
            >
              Get in Touch
            </Link>
          </li>
        </ul>

        <div className="lg:hidden">
          <button
            className="p-2 focus:outline-none"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              menu?.classList.toggle("hidden");
            }}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <ul
        id="mobile-menu"
        className="hidden lg:hidden flex-col space-y-2 mt-3"
      >
        {countries.slice(0, 10).map((country) => (
          <li key={country.cca3}>
            <Link
              to={`/flag/${country.cca3}`}
              className="block text-white hover:text-red-300 transition-colors"
            >
              {country.name.common}
            </Link>
          </li>
        ))}
        {/* Mobile Links */}
        <li>
          <Link
            to="/about"
            className="block text-white hover:text-red-300 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/get-in-touch"
            className="block text-white hover:text-red-300 transition-colors"
          >
            Get in Touch
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
