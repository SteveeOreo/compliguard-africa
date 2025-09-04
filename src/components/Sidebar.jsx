import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-200 p-4">
      <div className="font-bold text-lg mb-4">CompliGuard Africa</div>
      <ul>
        <li className="mb-2">
          <a href="#" className="block hover:bg-gray-300 p-2 rounded">
            <i className="ri-dashboard-line mr-2"></i>
            Dashboard/Home
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="block hover:bg-gray-300 p-2 rounded">
            <i className="ri-stack-line mr-2"></i>
            Assets
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="block hover:bg-gray-300 p-2 rounded">
            <i className="ri-alert-line mr-2"></i>
            Risks
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="block hover:bg-gray-300 p-2 rounded">
            <i className="ri-file-text-line mr-2"></i>
            Policies
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="block hover:bg-gray-300 p-2 rounded">
            <i className="ri-filter-line mr-2"></i>
            Controls
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="block hover:bg-gray-300 p-2 rounded">
            <i className="ri-shield-check-line mr-2"></i>
            Compliance
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="block hover:bg-gray-300 p-2 rounded">
            <i className="ri-briefcase-line mr-2"></i>
            Projects
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="block hover:bg-gray-300 p-2 rounded">
            <i className="ri-file-search-line mr-2"></i>
            Audits
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="block hover:bg-gray-300 p-2 rounded">
            <i className="ri-user-3-line mr-2"></i>
            3rd Party Risk
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="block hover:bg-gray-300 p-2 rounded">
            <i className="ri-file-chart-line mr-2"></i>
            Reports
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="block hover:bg-gray-300 p-2 rounded">
            <i className="ri-time-line mr-2"></i>
            Continuous Compliance Monitoring
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="block hover:bg-gray-300 p-2 rounded">
            <i className="ri-plug-line mr-2"></i>
            Integrations
          </a>
        </li>
        <li>
          <a href="#" className="block hover:bg-gray-300 p-2 rounded">
            <i className="ri-settings-line mr-2"></i>
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
