import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadingBar from "./LoadingBar";

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
    AOS.init({
      duration: 1000,
      easing: "ease-in-out", 
      once: true, 
    });

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
    return <div><LoadingBar/></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1 className="text-center py-10 text-2xl">Countries List</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 px-32 py-5">
        {currentCountries.map((country) => (
          <li
            className="border bg-white shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg border-grey-900"
            key={country.cca3}
            data-aos="fade-up"
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
      <div className="flex justify-center py-6 px-4">
  <ReactPaginate
    previousLabel="← Prev"
    nextLabel="Next →"
    pageCount={pageCount}
    onPageChange={handlePageChange}
    containerClassName="flex flex-wrap justify-center gap-2"
    pageClassName="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 transition text-sm sm:text-base"
    activeClassName="bg-red-500 text-white border-red-500"
    previousClassName="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 transition text-sm sm:text-base"
    nextClassName="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 transition text-sm sm:text-base"
    disabledClassName="opacity-50 cursor-not-allowed"
  />
</div>


    </div>
  );
};

export default Data;
