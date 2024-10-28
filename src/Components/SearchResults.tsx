import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";


interface Country {
  name: {
    common: string; 
  };
  population: number; 
  region: string; 
  capital: string[];
  flags: {
    png: string; 
    alt: string; 
  };
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
    <section className="bg-gray-100 min-h-screen p-8">
      <h2 className="text-2xl font-bold mb-6">Search Results for "{searchTerm}"</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCountries.map((country) => (
          <div key={country.name.common} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={country.flags.png}
              alt={country.flags.alt}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{country.name.common}</h3>
              <p className="text-sm">Population: {country.population.toLocaleString()}</p>
              <p className="text-sm">Region: {country.region}</p>
              <p className="text-sm">Capital: {country.capital?.[0] || "N/A"}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SearchResults;
