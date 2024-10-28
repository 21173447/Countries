
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate("/results", { state: { searchTerm } });
    }
  };

  return (
    <section className="bg-red-700 h-[40vh]">
      <div className="flex items-center justify-center py-10">
        <input
          className="p-3 w-96 rounded-l-lg"
          type="text"
          placeholder="Search here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="p-3 bg-red-900 rounded-r-lg text-white"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default Hero;
