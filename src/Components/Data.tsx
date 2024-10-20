

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Data: React.FC = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
 

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch {
        setError("Error fetching countries");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div >
    <h1 className="text-center py-10  text-2xl">Countries List</h1>

    <ul className="grid grid-cols-2 place-items-center  md:grid-cols-4 lg:grid-cols-5 gap-2 px-20 p-5 ">
      {countries.map((country) => (
        <li className="border border-red-700 w-48 " key={country.cca3}>
          <Link to={`/flag/${country.cca3}`}>
            <img
              className="w-48 h-40 object-cover border p-1"
              src={country.flags.svg}
              alt={`${country.name.common} flag`}
            />
            <div className="text-center text-sm  py-5 space-y-2">
              <p>{country.name.common}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default Data;
