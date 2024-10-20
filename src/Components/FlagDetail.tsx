import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const FlagDetail: React.FC = () => {
  const { cca3 } = useParams<{ cca3: string }>();
  const [country, setCountry] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/alpha/${cca3}`
        );
        setCountry(response.data[0]);
      } catch {
        setError("Error fetching country details");
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [cca3]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return country ? (


    <div className=" grid grid-cols-2 p-10 space-x-10 space-y-10">
     
      <div>

      <img src={country.flags.svg} alt={`${country.name.common} flag`} />
      </div>

      <div className="text-sm">
      <h1 className="text-5xl">{country.name.common}</h1>
      <p className="">Capital: <span>{country.capital}</span></p>
      <p>Aternaitve Spellings:{country.altSpellings}</p>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Sub-Region: {country.subregion}</p>
      <p>Time Zone: {country.timezones}</p> 
      <p>Borders: {country.borders}</p>
      <p>Continents: {country.continents}</p>
      <p >Maps: <a className="" href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer">View on Google Maps</a></p>

     
      </div>
      
     
      <div className=" grid place-content-center">
          <h2>Coat of Arms</h2>
          <img
            src={country.coatOfArms.svg}
          />
        </div>
  

    </div>
  ) : (
    <div>No country data available</div>
  );
};

export default FlagDetail;
