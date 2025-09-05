import React from "react";

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div className="bg-gray-200 p-4 shadow-sm flex items-center justify-between">
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
      >
        <i
          className={`ri-${isSidebarOpen ? "close-line" : "menu-line"} text-2xl`}
        ></i>
      </button>

      <div className="hidden md:flex items-center w-64 md:pl-[1%]">
        <h1 className="text-2xl font-bold text-gray-800">CompliGuard Africa</h1>
      </div>
      <div className="flex-1 flex items-center space-x-4 justify-end md:pr-[10%]">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md py-2 px-4 pl-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 sm:w-64 md:w-80"
          />
          <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
        </div>
        <div className="rounded-full h-12 w-12 bg-gray-300 flex items-center justify-center text-gray-600 font-semibold\">
          {/* Placeholder for user avatar */}
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="rounded-full h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
