import React, { useState } from "react";
import Gauge from "./Gauge";
import ComplianceHeatmap from "./ComplianceHeatmap";

const DashboardContent = () => {
  const [readiness, setReadiness] = useState(68);

  const handleUpdateReadiness = () => {
    const newValue = Math.floor(Math.random() * 101);
    setReadiness(newValue);
  };

  return (
    <div>
      <div className="text-2xl font-bold mb-4">
        Compliance Posture - Your Organization
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
        <div className="bg-white p-4 rounded shadow flex justify-center items-center flex-col lg:col-span-3">
          {" "}
          {/* Adjusted col-span-3 */}
          <Gauge value={readiness} />
          <div className="text-sm mt-2">{readiness}% Ready</div>
        </div>
        <div className="bg-white p-4 rounded shadow lg:col-span-3">
          <div className="font-bold mb-2">Risks</div>
          <div>High: 10</div>
          <div>Medium: 5</div>
          <div>Low: 2</div>
        </div>
        <div className="bg-white p-4 rounded shadow lg:col-span-3">
          <div className="font-bold mb-2">Controls Implemented</div>
          <div>Total: 50</div>
          <div>Effective: 45</div>
          <div>Ineffective: 5</div>
        </div>
        <div className="bg-white p-4 rounded shadow lg:col-span-3">
          <div className="font-bold mb-2">Upcoming Tasks</div>
          <div>Review Policies</div>
          <div>Update Controls</div>
          <div>Conduct Audits</div>
        </div>
        <div className="bg-white p-4 rounded shadow col-span-1 sm:col-span-2 lg:col-span-9 h-[350px]">
          <ComplianceHeatmap />
        </div>
        <div className="bg-white p-4 rounded shadow col-span-1 sm:col-span-2 lg:col-span-3 h-[350px]">
          Alerts
        </div>
      </div>
      <div className="mt-6 flex flex-col sm:flex-row justify-around items-center gap-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
          Upload Evidence
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
          Add Risk
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
          Generate Report
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
          onClick={handleUpdateReadiness}
        >
          Update Readiness
        </button>
      </div>
    </div>
  );
};

export default DashboardContent;
