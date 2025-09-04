import React, { useState } from 'react';
import Gauge from './Gauge';

const DashboardContent = () => {
  const [readiness, setReadiness] = useState(68);

  const handleUpdateReadiness = () => {
    const newValue = Math.floor(Math.random() * 101);
    setReadiness(newValue);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-2xl font-bold">Compliance Posture - Your Organization</div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="border rounded py-2 px-4 mr-2"
          />
          <div className="rounded-full h-8 w-8 bg-gray-300"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded shadow flex justify-center items-center flex-col">
          <Gauge value={readiness} />
          <div className="text-sm mt-2">{readiness}% Ready</div>
        </div>
        <div className="bg-white p-4 rounded shadow">Risks: High / Medium / Low</div>
        <div className="bg-white p-4 rounded shadow">Controls Implemented</div>
        <div className="bg-white p-4 rounded shadow">Upcoming Tasks</div>
        <div className="bg-white p-4 rounded shadow col-span-1 sm:col-span-2">Compliance Heatmap</div>
        <div className="bg-white p-4 rounded shadow col-span-1 sm:col-span-2">Alerts</div>
      </div>
      <div className="mt-4 flex flex-col sm:flex-row justify-around">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 sm:mb-0">Upload Evidence</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 sm:mb-0">Add Risk</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Generate Report</button>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleUpdateReadiness}
        >
          Update Readiness
        </button>
      </div>
    </div>
  );
};

export default DashboardContent;
