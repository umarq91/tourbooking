import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = ({ query }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Set the search term when query prop changes
    if (query) {
      setSearchTerm(query);
    }
  }, [query]);

  return (
    <div className="flex items-center w-full justify-center">
      <div className="flex w-[90%] md:max-w-[80%] space-x-1">
        <input
          type="text"
          className="flex-1 px-4 py-3 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="eg Hunza , Kalam , Kashmir"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link className='' to={`/search?searchTerm=${searchTerm}`}>
          <button className="px-4 text-white bg-purple-600 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;