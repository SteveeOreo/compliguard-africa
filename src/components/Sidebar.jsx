import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-200 p-4">
      <div className="font-bold text-lg mb-4">CompliGuard Africa</div>
      <ul>
        <li className="mb-2"><a href="#" className="block hover:bg-gray-300 p-2 rounded">Dashboard/Home</a></li>
        <li className="mb-2"><a href="#" className="block hover:bg-gray-300 p-2 rounded">Assets</a></li>
        <li className="mb-2"><a href="#" className="block hover:bg-gray-300 p-2 rounded">Risks</a></li>
        <li className="mb-2"><a href="#" className="block hover:bg-gray-300 p-2 rounded">Policies</a></li>
        <li className="mb-2"><a href="#" className="block hover:bg-gray-300 p-2 rounded">Controls</a></li>
        <li className="mb-2"><a href="#" className="block hover:bg-gray-300 p-2 rounded">Compliance</a></li>
        <li className="mb-2"><a href="#" className="block hover:bg-gray-300 p-2 rounded">Projects</a></li>
        <li className="mb-2"><a href="#" className="block hover:bg-gray-300 p-2 rounded">Audits</a></li>
        <li className="mb-2"><a href="#" className="block hover:bg-gray-300 p-2 rounded">3rd Party Risk</a></li>
        <li className="mb-2"><a href="#" className="block hover:bg-gray-300 p-2 rounded">Reports</a></li>
        <li className="mb-2"><a href="#" className="block hover:bg-gray-300 p-2 rounded">Continuous Compliance Monitoring</a></li>
        <li className="mb-2"><a href="#" className="block hover:bg-gray-300 p-2 rounded">Integrations</a></li>
        <li><a href="#" className="block hover:bg-gray-300 p-2 rounded">Settings</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
