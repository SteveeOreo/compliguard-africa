import React from "react";

const Audits = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Audits</h1>
        <p className="text-gray-600">Manage internal and external audits, assessments, and compliance reviews</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <i className="ri-file-search-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Audits</p>
              <p className="text-2xl font-bold text-gray-900">15</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
              <i className="ri-time-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">In Progress</p>
              <p className="text-2xl font-bold text-yellow-600">3</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <i className="ri-check-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-green-600">10</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-100 text-red-600">
              <i className="ri-alert-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Findings Open</p>
              <p className="text-2xl font-bold text-red-600">7</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Audits</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <i className="ri-add-line mr-2"></i>
            Schedule Audit
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Audit Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Auditor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Findings</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">SOC 2 Type II Audit</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">External</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    In Progress
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">KPMG</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-03-15</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 Open</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">
                    <i className="ri-eye-line"></i>
                  </button>
                  <button className="text-green-600 hover:text-green-900">
                    <i className="ri-edit-line"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Internal Security Assessment</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Internal</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Security Team</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-30</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5 Closed</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">
                    <i className="ri-eye-line"></i>
                  </button>
                  <button className="text-purple-600 hover:text-purple-900">
                    <i className="ri-download-line"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">GDPR Compliance Review</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Internal</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    Scheduled
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Legal Team</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-04-01</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-green-600 hover:text-green-900">
                    <i className="ri-edit-line"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Audit Calendar</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
              <div>
                <p className="text-sm font-medium">ISO 27001 Surveillance Audit</p>
                <p className="text-xs text-gray-500">External Audit</p>
              </div>
              <span className="text-sm text-blue-600">Feb 15, 2024</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded">
              <div>
                <p className="text-sm font-medium">PCI DSS Assessment</p>
                <p className="text-xs text-gray-500">Internal Assessment</p>
              </div>
              <span className="text-sm text-yellow-600">Mar 01, 2024</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded">
              <div>
                <p className="text-sm font-medium">Vendor Security Review</p>
                <p className="text-xs text-gray-500">Third Party Audit</p>
              </div>
              <span className="text-sm text-green-600">Mar 20, 2024</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Outstanding Findings</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-red-50 rounded">
              <div>
                <p className="text-sm font-medium">Password Policy Updates Required</p>
                <p className="text-xs text-red-500">High Priority</p>
              </div>
              <span className="text-sm text-red-600">5 days overdue</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded">
              <div>
                <p className="text-sm font-medium">Access Review Documentation</p>
                <p className="text-xs text-orange-500">Medium Priority</p>
              </div>
              <span className="text-sm text-orange-600">Due in 3 days</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded">
              <div>
                <p className="text-sm font-medium">Incident Response Testing</p>
                <p className="text-xs text-yellow-500">Low Priority</p>
              </div>
              <span className="text-sm text-yellow-600">Due in 2 weeks</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audits;
