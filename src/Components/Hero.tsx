import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImage from "../images/pexels-t-keawkanok-3252323-12990385.jpg";

const Hero: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate("/results", { state: { searchTerm } });
    }
  };

  const handleClearSearch = () => {
    setSearchTerm(""); 
    navigate("/");     
  };
  
  return (
    <section
      className="relative bg-cover bg-center h-[70vh] flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >

      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>

  
      <div className="text-center z-10">
        <h1 className="text-white text-5xl font-extrabold mb-6 sm:text-3xl">
          Discover Your Favorite Flags
        </h1>
        <div className="flex items-center justify-center w-full max-w-lg mx-auto relative">
          <input
            className="p-4 w-full text-gray-800 rounded-l-lg shadow-lg focus:outline-nonez sm:p-3 sm:text-sm"
            type="text"
            placeholder="Search by country name or code"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              className="absolute right-16 p-2 text-gray-500 hover:text-gray-800 transition-transform duration-300 transform hover:scale-110"
              onClick={handleClearSearch}
            >
              <FaTimes />
            </button>
          )}
          <button
            className="p-4 bg-red-900 hover:bg-red-800 text-white Sfont-semibold shadow-lg flex items-center justify-center transition-transform duration-300 transform hover:scale-105 sm:p-4 sm:text-sm rounded-r-lg "
            onClick={handleSearch}
          >
            <FaSearch />
          </button>
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 z-10">
        <div
          className="bg-white rounded-lg shadow-lg p-6 text-center cursor-pointer hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-up"
          onClick={() => window.open("https://www.worldometers.info/geography/flags-of-the-world/", "_blank")}
        >
          <h2 className="text-2xl font-bold mb-4">Country Flags</h2>
          <p className="text-gray-600">
            Explore a collection of flags from around the world.
          </p>
        </div>
        <div
          className="bg-white rounded-lg shadow-lg p-6 text-center cursor-pointer hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
          onClick={() => window.open("https://www.kids-world-travel-guide.com/countries-of-the-world.html", "_blank")}
        >
          <h2 className="text-2xl font-bold mb-4">Fun Facts</h2>
          <p className="text-gray-600">
            Learn interesting facts about different countries.
          </p>
        </div>
        <div
          className="bg-white rounded-lg shadow-lg p-6 text-center cursor-pointer hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-up"
          data-aos-delay="400"
          onClick={() => window.open("https://online.seterra.com/en/vgp/3004", "_blank")}
        >
          <h2 className="text-2xl font-bold mb-4">Flag Quiz</h2>
          <p className="text-gray-600">
            Test your knowledge with an interactive flag quiz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
