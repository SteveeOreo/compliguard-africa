import React from "react";

const Compliance = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Compliance Management</h1>
        <p className="text-gray-600">Monitor compliance status across different frameworks and regulations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <i className="ri-shield-check-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">ISO 27001</p>
              <p className="text-2xl font-bold text-green-600">92%</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <i className="ri-shield-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">SOC 2</p>
              <p className="text-2xl font-bold text-blue-600">88%</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
              <i className="ri-user-settings-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">GDPR</p>
              <p className="text-2xl font-bold text-yellow-600">75%</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <i className="ri-bank-card-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">PCI DSS</p>
              <p className="text-2xl font-bold text-purple-600">95%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Compliance Overview</h2>
        <p className="text-gray-600">Detailed compliance management features will be implemented here.</p>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Recent Assessments</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span className="text-sm">ISO 27001 Annual Review</span>
                <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">Complete</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span className="text-sm">SOC 2 Type II Audit</span>
                <span className="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded">In Progress</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span className="text-sm">GDPR Gap Analysis</span>
                <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">Scheduled</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Action Items</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span className="text-sm">Update Privacy Policy</span>
                <span className="text-xs text-red-600">Due: 2024-02-15</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span className="text-sm">Conduct Security Training</span>
                <span className="text-xs text-orange-600">Due: 2024-02-28</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span className="text-sm">Review Access Controls</span>
                <span className="text-xs text-yellow-600">Due: 2024-03-10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
