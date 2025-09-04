import React, { useState } from 'react';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className={`
        ${isSidebarOpen ? 'block' : 'hidden'}
        sm:block w-64 bg-gray-200 p-4
      `}>
        <Sidebar />
      </div>
      <div className="flex-1 p-4">
        <button
          className="sm:hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={toggleSidebar}
        >
          Toggle Sidebar
        </button>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
