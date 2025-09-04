import React from 'react';

const DashboardContent = () => {
  return (
    <div>
      <div className="text-2xl font-bold mb-4">Compliance Posture - Your Organization</div>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded shadow">68% Ready</div>
        <div className="bg-white p-4 rounded shadow">Risks: High / Medium / Low</div>
        <div className="bg-white p-4 rounded shadow">Controls Implemented</div>
        <div className="bg-white p-4 rounded shadow">Upcoming Tasks</div>
        <div className="bg-white p-4 rounded shadow col-span-2">Compliance Heatmap</div>
        <div className="bg-white p-4 rounded shadow col-span-2">Alerts</div>
      </div>
      <div className="mt-4 flex justify-around">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Upload Evidence</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Risk</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Generate Report</button>
      </div>
    </div>
  );
};

export default DashboardContent;
