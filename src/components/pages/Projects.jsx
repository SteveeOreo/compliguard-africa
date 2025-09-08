import React from "react";

const Projects = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
        <p className="text-gray-600">Manage compliance and security projects across your organization</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <i className="ri-briefcase-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Projects</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
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
              <p className="text-2xl font-bold text-green-600">8</p>
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
            <div className="p-3 rounded-full bg-red-100 text-red-600">
              <i className="ri-alert-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Overdue</p>
              <p className="text-2xl font-bold text-red-600">1</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Active Projects</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <i className="ri-add-line mr-2"></i>
            New Project
          </button>
        </div>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium">ISO 27001 Implementation</h3>
              <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">In Progress</span>
            </div>
            <p className="text-gray-600 text-sm mb-3">Implement ISO 27001 controls and documentation</p>
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                <i className="ri-user-line mr-1"></i>
                Project Manager: Sarah Wilson
              </div>
              <div className="text-sm text-gray-500">
                <i className="ri-calendar-line mr-1"></i>
                Due: 2024-03-15
              </div>
            </div>
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '65%'}}></div>
              </div>
              <span className="text-xs text-gray-500 mt-1">65% Complete</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium">GDPR Compliance Review</h3>
              <span className="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded">In Progress</span>
            </div>
            <p className="text-gray-600 text-sm mb-3">Annual GDPR compliance assessment and updates</p>
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                <i className="ri-user-line mr-1"></i>
                Project Manager: Legal Team
              </div>
              <div className="text-sm text-gray-500">
                <i className="ri-calendar-line mr-1"></i>
                Due: 2024-02-28
              </div>
            </div>
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-600 h-2 rounded-full" style={{width: '40%'}}></div>
              </div>
              <span className="text-xs text-gray-500 mt-1">40% Complete</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium">Security Training Program</h3>
              <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded">Overdue</span>
            </div>
            <p className="text-gray-600 text-sm mb-3">Quarterly security awareness training for all employees</p>
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                <i className="ri-user-line mr-1"></i>
                Project Manager: HR Department
              </div>
              <div className="text-sm text-red-500">
                <i className="ri-calendar-line mr-1"></i>
                Due: 2024-01-31
              </div>
            </div>
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{width: '80%'}}></div>
              </div>
              <span className="text-xs text-gray-500 mt-1">80% Complete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
