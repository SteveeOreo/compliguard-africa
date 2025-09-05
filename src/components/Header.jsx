import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-200 p-4 shadow-sm flex justify-end items-center">
      <div className="flex items-center space-x-4 mr-[20%]">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md py-2 px-4 pl-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-80"
          />
          <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
        </div>
        <div className="rounded-full h-12 w-12 bg-gray-300 flex items-center justify-center text-gray-600 font-semibold\">
          {/* Placeholder for user avatar */}
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
