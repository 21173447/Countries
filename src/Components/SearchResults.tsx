import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

interface Country {
  name: {
    common: string;
  };
  cca3: string;
}

interface LocationState {
  searchTerm: string;
}

const SearchResults: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  const searchTerm = state?.searchTerm || "";

  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const results = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCountries(results);
    }
  }, [searchTerm, countries]);

  return (
    <section className="bg-gray-50 min-h-screen p-8">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">Search Results for "{searchTerm}"</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredCountries.map((country) => (
          <Link
            key={country.name.common}
            to={`/flag/${country.cca3}`}
            className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">{country.name.common}</h3>
              <p className="text-base text-center text-gray-600">Click to view details</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SearchResults;
