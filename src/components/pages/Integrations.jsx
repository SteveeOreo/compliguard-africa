import React from "react";

const Integrations = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Integrations</h1>
        <p className="text-gray-600">Connect ComplIguard with your existing tools and platforms</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <i className="ri-link text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Integrations</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <i className="ri-apps-2-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Available</p>
              <p className="text-2xl font-bold text-blue-600">48</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <i className="ri-plug-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Data Synced</p>
              <p className="text-2xl font-bold text-purple-600">2.4k</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-orange-100 text-orange-600">
              <i className="ri-error-warning-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Sync Errors</p>
              <p className="text-2xl font-bold text-orange-600">2</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Popular Integrations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
            <div className="flex items-center mb-3">
              <div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="ri-microsoft-line text-white text-xl"></i>
              </div>
              <div className="ml-4">
                <h4 className="font-medium">Microsoft 365</h4>
                <p className="text-sm text-gray-500">Identity & Access Management</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">Sync users, groups, and access policies</p>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Connect
            </button>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
            <div className="flex items-center mb-3">
              <div className="h-12 w-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <i className="ri-amazon-line text-white text-xl"></i>
              </div>
              <div className="ml-4">
                <h4 className="font-medium">AWS</h4>
                <p className="text-sm text-gray-500">Cloud Infrastructure</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">Monitor AWS resources and compliance</p>
            <button className="w-full px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
              Connect
            </button>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
            <div className="flex items-center mb-3">
              <div className="h-12 w-12 bg-green-600 rounded-lg flex items-center justify-center">
                <i className="ri-slack-line text-white text-xl"></i>
              </div>
              <div className="ml-4">
                <h4 className="font-medium">Slack</h4>
                <p className="text-sm text-gray-500">Notifications</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">Get compliance alerts in Slack</p>
            <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Connect
            </button>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
            <div className="flex items-center mb-3">
              <div className="h-12 w-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <i className="ri-github-line text-white text-xl"></i>
              </div>
              <div className="ml-4">
                <h4 className="font-medium">GitHub</h4>
                <p className="text-sm text-gray-500">Code Repository</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">Security scanning and policy enforcement</p>
            <button className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
              Connect
            </button>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
            <div className="flex items-center mb-3">
              <div className="h-12 w-12 bg-red-600 rounded-lg flex items-center justify-center">
                <i className="ri-shield-line text-white text-xl"></i>
              </div>
              <div className="ml-4">
                <h4 className="font-medium">CrowdStrike</h4>
                <p className="text-sm text-gray-500">Endpoint Security</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">Import endpoint security data</p>
            <button className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
              Connect
            </button>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
            <div className="flex items-center mb-3">
              <div className="h-12 w-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                <i className="ri-trello-line text-white text-xl"></i>
              </div>
              <div className="ml-4">
                <h4 className="font-medium">Jira</h4>
                <p className="text-sm text-gray-500">Project Management</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">Create tickets for compliance issues</p>
            <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
              Connect
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Connected Integrations</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <i className="ri-add-line mr-2"></i>
            Add Integration
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Integration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Sync</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Points</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <i className="ri-microsoft-line text-white"></i>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Microsoft 365</div>
                      <div className="text-sm text-gray-500">Identity Management</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">IAM</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5 minutes ago</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,247</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">
                    <i className="ri-settings-line"></i>
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <i className="ri-disconnect-line"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-orange-500 rounded-lg flex items-center justify-center">
                      <i className="ri-amazon-line text-white"></i>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">AWS</div>
                      <div className="text-sm text-gray-500">Cloud Infrastructure</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Cloud</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 minutes ago</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">892</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">
                    <i className="ri-settings-line"></i>
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <i className="ri-disconnect-line"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-green-600 rounded-lg flex items-center justify-center">
                      <i className="ri-slack-line text-white"></i>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Slack</div>
                      <div className="text-sm text-gray-500">Notifications</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Communication</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Warning
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 hour ago</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">45</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">
                    <i className="ri-settings-line"></i>
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <i className="ri-disconnect-line"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Integration Categories</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <i className="ri-shield-check-line text-blue-600 mr-3"></i>
                <span className="text-sm">Security Tools</span>
              </div>
              <span className="text-sm text-gray-500">15 available</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <i className="ri-cloud-line text-green-600 mr-3"></i>
                <span className="text-sm">Cloud Platforms</span>
              </div>
              <span className="text-sm text-gray-500">8 available</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <i className="ri-user-settings-line text-purple-600 mr-3"></i>
                <span className="text-sm">Identity Management</span>
              </div>
              <span className="text-sm text-gray-500">6 available</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <i className="ri-notification-line text-orange-600 mr-3"></i>
                <span className="text-sm">Communication</span>
              </div>
              <span className="text-sm text-gray-500">4 available</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <i className="ri-code-line text-red-600 mr-3"></i>
                <span className="text-sm">Development Tools</span>
              </div>
              <span className="text-sm text-gray-500">12 available</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Sync Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded">
              <div>
                <p className="text-sm font-medium">AWS EC2 Instances</p>
                <p className="text-xs text-green-600">Successfully synced 145 instances</p>
              </div>
              <span className="text-sm text-green-600">2 min ago</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
              <div>
                <p className="text-sm font-medium">Microsoft 365 Users</p>
                <p className="text-xs text-blue-600">Updated 234 user profiles</p>
              </div>
              <span className="text-sm text-blue-600">5 min ago</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 rounded">
              <div>
                <p className="text-sm font-medium">Slack Notifications</p>
                <p className="text-xs text-red-600">Sync failed - API limit exceeded</p>
              </div>
              <span className="text-sm text-red-600">1 hour ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
