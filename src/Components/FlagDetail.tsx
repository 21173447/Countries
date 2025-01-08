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
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return country ? (
    <div className="p-10 bg-white">
      <div className="grid lg:grid-cols-2 gap-10 items-center">

        <div className="flex justify-center">
          <img
            className="border-4 border-gray-300 rounded-lg shadow-lg"
            src={country.flags.svg}
            alt={`${country.name.common} flag`}
          />
        </div>

        <div className="space-y-4 text-gray-800">
          <h1 className="text-4xl font-bold text-gray-900">{country.name.common}</h1>
          <p>
            <span className="font-medium">Capital:</span>{" "}
            <span className="font-light">{country.capital}</span>
          </p>
          <p>
            <span className="font-medium">Alternative Spellings:</span>{" "}
            {country.altSpellings.join(", ")}
          </p>
          <p>
            <span className="font-medium">Population:</span>{" "}
            {country.population.toLocaleString()}
          </p>
          <p>
            <span className="font-medium">Region:</span> {country.region}
          </p>
          <p>
            <span className="font-medium">Sub-Region:</span> {country.subregion}
          </p>
          <p>
            <span className="font-medium">Time Zones:</span>{" "}
            {country.timezones.join(", ")}
          </p>
          <p>
            <span className="font-medium">Borders:</span>{" "}
            {country.borders?.join(", ") || "None"}
          </p>
          <p>
            <span className="font-medium">Continents:</span> {country.continents}
          </p>
          <p>
            <span className="font-medium">Maps:</span>{" "}
            <a
              className="text-red-900  font-bold"
              href={country.maps.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </p>
        </div>
      </div>

      {/* Coat of Arms Section */}
      {country.coatOfArms?.svg && (
        <div className="mt-10 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-5">
            Coat of Arms
          </h2>
          <img
            className="w-40 mx-auto border-2 border-gray-300 rounded-lg shadow-md"
            src={country.coatOfArms.svg}
            alt={`${country.name.common} coat of arms`}
          />
        </div>
      )}
    </div>
  ) : (
    <div>No country data available</div>
  );
};

export default FlagDetail;
