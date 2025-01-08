import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaTimes } from "react-icons/fa"; 
import backgroundImage from "../images/pexels-t-keawkanok-3252323-12990385.jpg";

const Hero: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate("/results", { state: { searchTerm } });
    }
  };

  const clearSearch = () => {
    setSearchTerm(""); 
    navigate("/", { replace: true });
  };

  return (
    <section 
      className="bg-cover bg-center h-[60vh] flex items-center justify-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }} 
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="text-center z-10">
        <h1 className="text-white text-5xl font-extrabold mb-8">
          Discover Your Favorite Flags
        </h1>
        <div className="flex items-center justify-center w-full max-w-lg mx-auto">
          <input
            className="p-4 w-full text-gray-800 rounded-l-lg focus:outline-none focus:ring-4 focus:ring-red-400 shadow-md"
            type="text"
            placeholder="Search by country name or code"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="p-4 bg-red-900 hover:bg-red-800 text-white rounded-r-lg shadow-md flex items-center justify-center transition-colors duration-300"
            onClick={handleSearch}
          >
            <FaSearch className="mr-2" /> Search
          </button>

          {/* Clear Search Button */}
          {searchTerm && (
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4 text-white"
              onClick={clearSearch}
              aria-label="Clear Search"
            >
              <FaTimes />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
