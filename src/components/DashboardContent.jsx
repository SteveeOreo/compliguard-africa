import React from "react";
import Gauge from "./Gauge";
import ComplianceHeatmap from "./ComplianceHeatmap";

const DashboardContent = () => {
  const readiness = 68; // Static value

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
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">Recent Alerts</h3>
            <button className="text-blue-600 hover:text-blue-800 text-sm">
              View All
            </button>
          </div>
          <div className="space-y-3 h-[280px] overflow-y-auto">
            <div className="flex items-start p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
              <i className="ri-error-warning-line text-red-600 mr-3 mt-1"></i>
              <div className="flex-1">
                <p className="text-sm font-medium text-red-800">
                  High Risk: Data Breach Attempt Detected
                </p>
                <p className="text-xs text-red-600 mt-1">
                  Multiple failed login attempts on admin account
                </p>
                <p className="text-xs text-gray-500 mt-1">5 minutes ago</p>
              </div>
            </div>

            <div className="flex items-start p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <i className="ri-alert-line text-yellow-600 mr-3 mt-1"></i>
              <div className="flex-1">
                <p className="text-sm font-medium text-yellow-800">
                  SSL Certificate Expiring Soon
                </p>
                <p className="text-xs text-yellow-600 mt-1">
                  Certificate for api.compliguard.africa expires in 7 days
                </p>
                <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
              </div>
            </div>

            <div className="flex items-start p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
              <i className="ri-information-line text-blue-600 mr-3 mt-1"></i>
              <div className="flex-1">
                <p className="text-sm font-medium text-blue-800">
                  Compliance Assessment Completed
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  ISO 27001 quarterly review completed successfully
                </p>
                <p className="text-xs text-gray-500 mt-1">4 hours ago</p>
              </div>
            </div>

            <div className="flex items-start p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
              <i className="ri-time-line text-orange-600 mr-3 mt-1"></i>
              <div className="flex-1">
                <p className="text-sm font-medium text-orange-800">
                  Policy Review Overdue
                </p>
                <p className="text-xs text-orange-600 mt-1">
                  Information Security Policy requires annual review
                </p>
                <p className="text-xs text-gray-500 mt-1">1 day ago</p>
              </div>
            </div>

            <div className="flex items-start p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
              <i className="ri-check-line text-green-600 mr-3 mt-1"></i>
              <div className="flex-1">
                <p className="text-sm font-medium text-green-800">
                  Backup Completed Successfully
                </p>
                <p className="text-xs text-green-600 mt-1">
                  Daily database backup completed without errors
                </p>
                <p className="text-xs text-gray-500 mt-1">8 hours ago</p>
              </div>
            </div>

            <div className="flex items-start p-3 bg-purple-50 rounded-lg border-l-4 border-purple-400">
              <i className="ri-user-add-line text-purple-600 mr-3 mt-1"></i>
              <div className="flex-1">
                <p className="text-sm font-medium text-purple-800">
                  New User Access Granted
                </p>
                <p className="text-xs text-purple-600 mt-1">
                  Sarah Wilson added to Compliance Manager role
                </p>
                <p className="text-xs text-gray-500 mt-1">1 day ago</p>
              </div>
            </div>
          </div>
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
      </div>
    </div>
  );
};

export default DashboardContent;
