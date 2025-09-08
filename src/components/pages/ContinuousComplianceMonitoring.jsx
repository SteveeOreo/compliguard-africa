import React from "react";

const ContinuousComplianceMonitoring = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Continuous Compliance Monitoring</h1>
        <p className="text-gray-600">Real-time monitoring and automated compliance tracking across your infrastructure</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <i className="ri-shield-check-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Monitored Systems</p>
              <p className="text-2xl font-bold text-gray-900">28</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <i className="ri-pulse-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Monitors</p>
              <p className="text-2xl font-bold text-blue-600">156</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-100 text-red-600">
              <i className="ri-error-warning-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Violations</p>
              <p className="text-2xl font-bold text-red-600">3</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <i className="ri-timer-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Uptime</p>
              <p className="text-2xl font-bold text-purple-600">99.8%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Real-time Compliance Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">ISO 27001</h3>
              <span className="text-green-600 text-sm">Compliant</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{width: '95%'}}></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">95% of controls passing</p>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">SOC 2</h3>
              <span className="text-yellow-600 text-sm">Warning</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-600 h-2 rounded-full" style={{width: '88%'}}></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">88% of controls passing</p>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">GDPR</h3>
              <span className="text-green-600 text-sm">Compliant</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{width: '92%'}}></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">92% of controls passing</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Alerts</h3>
          <div className="space-y-3">
            <div className="flex items-center p-3 bg-red-50 rounded">
              <i className="ri-error-warning-line text-red-600 mr-3"></i>
              <div className="flex-1">
                <p className="text-sm font-medium">Failed Login Attempts Exceeded</p>
                <p className="text-xs text-gray-500">Server: web-prod-01 • 5 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-yellow-50 rounded">
              <i className="ri-alert-line text-yellow-600 mr-3"></i>
              <div className="flex-1">
                <p className="text-sm font-medium">SSL Certificate Expiring Soon</p>
                <p className="text-xs text-gray-500">Domain: api.example.com • 30 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-blue-50 rounded">
              <i className="ri-information-line text-blue-600 mr-3"></i>
              <div className="flex-1">
                <p className="text-sm font-medium">Backup Completed Successfully</p>
                <p className="text-xs text-gray-500">Database: production • 2 hours ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Monitor Categories</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Security Controls</span>
              <div className="flex items-center">
                <span className="text-sm text-green-600 mr-2">45 Active</span>
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Access Management</span>
              <div className="flex items-center">
                <span className="text-sm text-green-600 mr-2">32 Active</span>
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Data Protection</span>
              <div className="flex items-center">
                <span className="text-sm text-yellow-600 mr-2">28 Active</span>
                <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Network Security</span>
              <div className="flex items-center">
                <span className="text-sm text-green-600 mr-2">51 Active</span>
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Active Monitors</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <i className="ri-add-line mr-2"></i>
            Add Monitor
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monitor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Check</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Compliance Framework</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Password Policy Compliance</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Security Control</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Passing
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 minutes ago</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">ISO 27001, SOC 2</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">
                    <i className="ri-eye-line"></i>
                  </button>
                  <button className="text-green-600 hover:text-green-900">
                    <i className="ri-settings-line"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Data Encryption at Rest</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Data Protection</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Passing
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5 minutes ago</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">GDPR, PCI DSS</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">
                    <i className="ri-eye-line"></i>
                  </button>
                  <button className="text-green-600 hover:text-green-900">
                    <i className="ri-settings-line"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Access Log Monitoring</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Access Management</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Failing
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 minute ago</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">SOC 2, ISO 27001</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">
                    <i className="ri-eye-line"></i>
                  </button>
                  <button className="text-red-600 hover:text-red-900 mr-2">
                    <i className="ri-alert-line"></i>
                  </button>
                  <button className="text-green-600 hover:text-green-900">
                    <i className="ri-settings-line"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContinuousComplianceMonitoring;
