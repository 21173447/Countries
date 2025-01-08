import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Data: React.FC = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const itemsPerPage = 14;
  const pageCount = Math.ceil(countries.length / itemsPerPage);
  const currentCountries = countries.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

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

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className=" ">
      <h1 className="text-center py-10 text-2xl">Countries List</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 px-32 py-5">
        {currentCountries.map((country) => (
          <li
            className="border bg-white shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg border-grey-900"
            key={country.cca3}
          >
            <Link to={`/flag/${country.cca3}`}>
              <img
                className="w-full h-44 object-cover border"
                src={country.flags.svg}
                alt={`${country.name.common} flag`}
              />
              <div className="text-center text-sm py-5 space-y-2">
                <p>{country.name.common}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="bg-red-900  w-full p-3">
        <ReactPaginate
          className="grid grid-flow-col place-content-center gap-5 text-white"
          previousLabel="PREV"
          nextLabel="NEXT"
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active text-red-400 w-4 border-black"
        />
      </div>
   
    </div>
    
  );
};

export default Data;
