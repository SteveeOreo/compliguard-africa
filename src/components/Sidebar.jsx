import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-200 pt-6 h-full flex flex-col">
      <ul className="flex-1 pb-6">
        <li className="mb-3 px-4">
          <Link to="/" className="block hover:bg-gray-300 py-2 px-3 rounded-md">
            <i className="ri-dashboard-line mr-2"></i>
            Dashboard/Home
          </Link>
        </li>
        <li className="mb-3 px-4">
          <Link
            to="/assets"
            className="block hover:bg-gray-300 py-2 px-3 rounded-md"
          >
            <i className="ri-stack-line mr-2"></i>
            Assets
          </Link>
        </li>
        <li className="mb-3 px-4">
          <Link
            to="/risks"
            className="block hover:bg-gray-300 py-2 px-3 rounded-md"
          >
            <i className="ri-alert-line mr-2"></i>
            Risks
          </Link>
        </li>
        <li className="mb-3 px-4">
          <Link
            to="/policies"
            className="block hover:bg-gray-300 py-2 px-3 rounded-md"
          >
            <i className="ri-file-text-line mr-2"></i>
            Policies
          </Link>
        </li>
        <li className="mb-3 px-4">
          <Link
            to="/controls"
            className="block hover:bg-gray-300 py-2 px-3 rounded-md"
          >
            <i className="ri-filter-line mr-2"></i>
            Controls
          </Link>
        </li>
        <li className="mb-3 px-4">
          <Link
            to="/compliance"
            className="block hover:bg-gray-300 py-2 px-3 rounded-md"
          >
            <i className="ri-shield-check-line mr-2"></i>
            Compliance
          </Link>
        </li>
        <li className="mb-3 px-4">
          <Link
            to="/projects"
            className="block hover:bg-gray-300 py-2 px-3 rounded-md"
          >
            <i className="ri-briefcase-line mr-2"></i>
            Projects
          </Link>
        </li>
        <li className="mb-3 px-4">
          <Link
            to="/audits"
            className="block hover:bg-gray-300 py-2 px-3 rounded-md"
          >
            <i className="ri-file-search-line mr-2"></i>
            Audits
          </Link>
        </li>
        <li className="mb-3 px-4">
          <Link
            to="/third-party-risk"
            className="block hover:bg-gray-300 py-2 px-3 rounded-md"
          >
            <i className="ri-user-3-line mr-2"></i>
            3rd Party Risk
          </Link>
        </li>
        <li className="mb-3 px-4">
          <Link
            to="/reports"
            className="block hover:bg-gray-300 py-2 px-3 rounded-md"
          >
            <i className="ri-file-chart-line mr-2"></i>
            Reports
          </Link>
        </li>
        <li className="mb-3 px-4">
          <Link
            to="/continuous-compliance-monitoring"
            className="flex items-start hover:bg-gray-300 py-2 px-3 rounded-md"
          >
            <i className="ri-time-line mr-2 pt-1"></i>
            <div className="flex flex-col">
              <span>Continuous Compliance</span>
              <span className="ml-0">Monitoring</span>
            </div>
          </Link>
        </li>
        <li className="mb-3 px-4">
          <Link
            to="/integrations"
            className="block hover:bg-gray-300 py-2 px-3 rounded-md"
          >
            <i className="ri-plug-line mr-2"></i>
            Integrations
          </Link>
        </li>
        <li className="px-4">
          <Link
            to="/settings"
            className="block hover:bg-gray-300 py-2 px-3 rounded-md"
          >
            <i className="ri-settings-line mr-2"></i>
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
