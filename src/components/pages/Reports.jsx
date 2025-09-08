import React from "react";

const Reports = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports & Analytics</h1>
        <p className="text-gray-600">Generate compliance reports and view analytics across your organization</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <i className="ri-file-chart-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Generated Reports</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <i className="ri-calendar-check-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">This Month</p>
              <p className="text-2xl font-bold text-green-600">8</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <i className="ri-time-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Scheduled</p>
              <p className="text-2xl font-bold text-purple-600">5</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-orange-100 text-orange-600">
              <i className="ri-download-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Downloads</p>
              <p className="text-2xl font-bold text-orange-600">156</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Report Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center mb-3">
              <i className="ri-shield-check-line text-2xl text-blue-600 mr-3"></i>
              <h4 className="font-medium">Compliance Status Report</h4>
            </div>
            <p className="text-sm text-gray-600 mb-3">Overall compliance posture across all frameworks</p>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Generate Report
            </button>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center mb-3">
              <i className="ri-alert-line text-2xl text-red-600 mr-3"></i>
              <h4 className="font-medium">Risk Assessment Report</h4>
            </div>
            <p className="text-sm text-gray-600 mb-3">Detailed risk analysis and mitigation status</p>
            <button className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
              Generate Report
            </button>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center mb-3">
              <i className="ri-file-search-line text-2xl text-green-600 mr-3"></i>
              <h4 className="font-medium">Audit Summary</h4>
            </div>
            <p className="text-sm text-gray-600 mb-3">Summary of audit findings and remediation</p>
            <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Generate Report
            </button>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center mb-3">
              <i className="ri-user-3-line text-2xl text-purple-600 mr-3"></i>
              <h4 className="font-medium">Third Party Risk Report</h4>
            </div>
            <p className="text-sm text-gray-600 mb-3">Vendor risk assessments and compliance status</p>
            <button className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
              Generate Report
            </button>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center mb-3">
              <i className="ri-database-2-line text-2xl text-orange-600 mr-3"></i>
              <h4 className="font-medium">Asset Inventory Report</h4>
            </div>
            <p className="text-sm text-gray-600 mb-3">Complete inventory of organizational assets</p>
            <button className="w-full px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
              Generate Report
            </button>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center mb-3">
              <i className="ri-line-chart-line text-2xl text-teal-600 mr-3"></i>
              <h4 className="font-medium">Executive Dashboard</h4>
            </div>
            <p className="text-sm text-gray-600 mb-3">High-level metrics for executive reporting</p>
            <button className="w-full px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">
              Generate Report
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Reports</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <i className="ri-add-line mr-2"></i>
            Custom Report
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Generated</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Q4 Compliance Review</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Compliance Status</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-15</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Ready
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2.4 MB</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">
                    <i className="ri-download-line"></i>
                  </button>
                  <button className="text-purple-600 hover:text-purple-900 mr-2">
                    <i className="ri-share-line"></i>
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    <i className="ri-delete-bin-line"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Risk Assessment January 2024</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Risk Assessment</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-12</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Processing
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-gray-400 cursor-not-allowed mr-2">
                    <i className="ri-download-line"></i>
                  </button>
                  <button className="text-gray-400 cursor-not-allowed mr-2">
                    <i className="ri-share-line"></i>
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    <i className="ri-delete-bin-line"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">SOC 2 Audit Summary</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Audit Summary</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-08</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Ready
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1.8 MB</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">
                    <i className="ri-download-line"></i>
                  </button>
                  <button className="text-purple-600 hover:text-purple-900 mr-2">
                    <i className="ri-share-line"></i>
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    <i className="ri-delete-bin-line"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Scheduled Reports</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
              <div>
                <p className="text-sm font-medium">Monthly Compliance Report</p>
                <p className="text-xs text-blue-500">Runs 1st of every month</p>
              </div>
              <span className="text-sm text-blue-600">Next: Feb 1, 2024</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded">
              <div>
                <p className="text-sm font-medium">Weekly Risk Summary</p>
                <p className="text-xs text-green-500">Runs every Monday</p>
              </div>
              <span className="text-sm text-green-600">Next: Jan 29, 2024</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded">
              <div>
                <p className="text-sm font-medium">Quarterly Executive Report</p>
                <p className="text-xs text-purple-500">Runs quarterly</p>
              </div>
              <span className="text-sm text-purple-600">Next: Apr 1, 2024</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Report Analytics</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm">
                <span>Most Downloaded</span>
                <span className="font-medium">Compliance Status Report</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm">
                <span>Total Downloads</span>
                <span className="font-medium">156</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm">
                <span>Average Generation Time</span>
                <span className="font-medium">2.3 minutes</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm">
                <span>Storage Used</span>
                <span className="font-medium">24.7 MB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
