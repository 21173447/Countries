import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer1: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
       
        <a
          href="https://github.com/21173447/Countries.git"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mb-4 hover:text-gray-400 transition-colors duration-300"
        >
          <FaGithub className="text-2xl mr-2" />
          <span>View on GitHub</span>
        </a>

       
        <p className="text-sm text-gray-400">
          Powered by <a href="https://restcountries.com/" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-500">REST Countries API</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer1;
