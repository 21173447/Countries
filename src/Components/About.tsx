import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About: React.FC = () => {
  const [apiInfo, setApiInfo] = useState<string>("");

  useEffect(() => {
    AOS.init(); // Initialize AOS
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then(() => {
        setApiInfo(
          `The Rest Countries API provides detailed information about all countries, such as population, languages, region, and flags. The data is available in JSON format, which can be used in various web and mobile applications. You can query the API for country names, regions, languages, and even flags.`
        );
      })
      .catch(() => {
        setApiInfo("Error fetching API information.");
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 data-aos="fade-up" className="text-3xl font-bold mb-4">
        About the Rest Countries API
      </h1>
      <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-gray-700 mb-6">
        The Rest Countries API is a free and open API that provides detailed
        information about countries around the world. The API includes data such
        as country names, populations, flags, currencies, regions, and much more.
        It is widely used in applications that require country-specific information.
      </p>
      <h2 data-aos="fade-up" data-aos-delay="200" className="text-2xl font-semibold mb-4">
        How the API Works
      </h2>
      <p data-aos="fade-up" data-aos-delay="300" className="text-lg text-gray-700 mb-4">
        {apiInfo}
      </p>
      <p data-aos="fade-up" data-aos-delay="400" className="text-lg text-gray-700 mb-4">
        The API can be accessed by sending HTTP GET requests to various endpoints. For example, you can use the endpoint{" "}
        <code className="bg-gray-200 p-1 rounded">/v3.1/all</code> to retrieve
        information about all the countries in the world. You can filter this
        information by parameters such as region, language, or currency.
      </p>
      <h3 data-aos="fade-up" data-aos-delay="500" className="text-xl font-medium mb-4">
        Key Features:
      </h3>
      <ul data-aos="fade-up" data-aos-delay="600" className="list-disc pl-5 space-y-2 text-lg text-gray-700">
        <li>Provides details about countries like name, population, and region.</li>
        <li>Offers country flags in various formats (PNG, SVG).</li>
        <li>Supports querying by language, currency, region, and more.</li>
        <li>Returns data in a structured JSON format for easy integration into apps.</li>
      </ul>
      <h2 data-aos="fade-up" data-aos-delay="700" className="text-2xl font-semibold mt-6 mb-4">
        How to Use
      </h2>
      <p data-aos="fade-up" data-aos-delay="800" className="text-lg text-gray-700 mb-4">
        You can integrate the Rest Countries API into your application by making
        HTTP requests. For example, to get a list of all countries, you can use
        the endpoint:
      </p>
      <pre data-aos="fade-up" data-aos-delay="900" className="bg-gray-200 p-4 rounded mb-4">
        <code>
          {`fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => console.log(data));`}
        </code>
      </pre>
      <h2 data-aos="fade-up" data-aos-delay="1000" className="text-2xl font-semibold mb-4">
        Data Example
      </h2>
      <p data-aos="fade-up" data-aos-delay="1100" className="text-lg text-gray-700 mb-6">
        Here’s an example of how the data returned from the API might look like:
      </p>
      <pre data-aos="fade-up" data-aos-delay="1200" className="bg-gray-200 p-4 rounded mb-6">
        <code>
          {`[
            {
              "name": {"common": "Canada"},
              "cca3": "CAN",
              "flags": {"png": "https://flagcdn.com/w320/ca.png"},
              "region": "Americas",
              "languages": {"eng": "English", "fra": "French"},
              "population": 37742154
            },
            {
              "name": {"common": "United States"},
              "cca3": "USA",
              "flags": {"png": "https://flagcdn.com/w320/us.png"},
              "region": "Americas",
              "languages": {"eng": "English"},
              "population": 331002651
            }
          ]`}
        </code>
      </pre>
      <h3 data-aos="fade-up" data-aos-delay="1300" className="text-xl font-medium mb-4">
        Conclusion
      </h3>
      <p data-aos="fade-up" data-aos-delay="1400" className="text-lg text-gray-700">
        The Rest Countries API is an easy-to-use resource for applications that
        need country-specific data. Whether you're building a global map or a
        country selector, this API can help provide up-to-date information.
      </p>
    </div>
  );
};

export default About;
