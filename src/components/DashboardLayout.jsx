import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* The Header component will now contain the CompliGuard Africa title, search, and profile,
          and will receive the toggleSidebar function to potentially render a mobile menu button. */}
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - responsive behavior */}
        <div
          className={`
          w-64 bg-gray-200 h-full fixed md:relative inset-y-0 left-0 z-40
          transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 transition-transform duration-200 ease-in-out
          shadow-lg md:shadow-none
        `}
        >
          <Sidebar />
        </div>

        {/* Overlay for mobile when sidebar is open */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Main content area */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
