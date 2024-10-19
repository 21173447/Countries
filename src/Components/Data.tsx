import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      <h1>Countries List</h1>
      <ul className="grid grid-cols-2 place-items-center  md:grid-cols-4 lg:grid-cols-5 gap-2 p-24">
        {countries.map((country) => (
          <li className=" border w-48 rounded-b-xl "
           key={country.cca3}>
            <img className="w-48 h-40 object-cover boreder  p-1" src={country.flags.svg} />

            <div className="text-center py-5 space-y-2">
              <p>Name: {country.name.common} </p>
              <p>Capital:{country.capital} </p>
             
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Data;
