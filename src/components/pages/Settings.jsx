import React, { useState } from "react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "General", icon: "ri-settings-line" },
    { id: "notifications", label: "Notifications", icon: "ri-notification-line" },
    { id: "security", label: "Security", icon: "ri-shield-check-line" },
    { id: "compliance", label: "Compliance", icon: "ri-file-shield-line" },
    { id: "users", label: "Users & Roles", icon: "ri-user-settings-line" },
    { id: "integrations", label: "API & Integrations", icon: "ri-plug-line" },
    { id: "billing", label: "Billing", icon: "ri-bank-card-line" },
    { id: "backup", label: "Backup & Recovery", icon: "ri-database-line" }
  ];

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Organization Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="ComplIguard Africa"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Financial Services</option>
              <option>Healthcare</option>
              <option>Technology</option>
              <option>Government</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Primary Contact Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="admin@compliguard.africa"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Africa/Lagos (WAT)</option>
              <option>Africa/Cairo (EET)</option>
              <option>Africa/Johannesburg (SAST)</option>
              <option>UTC</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">System Preferences</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Auto-save Changes</label>
              <p className="text-sm text-gray-500">Automatically save changes as you work</p>
            </div>
            <input type="checkbox" className="toggle" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Dark Mode</label>
              <p className="text-sm text-gray-500">Switch to dark theme</p>
            </div>
            <input type="checkbox" className="toggle" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Data Retention</label>
              <p className="text-sm text-gray-500">Automatically archive old data</p>
            </div>
            <select className="px-3 py-2 border border-gray-300 rounded-md">
              <option>1 Year</option>
              <option>2 Years</option>
              <option>5 Years</option>
              <option>Never</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Email Notifications</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Risk Alerts</label>
              <p className="text-sm text-gray-500">High and critical risk notifications</p>
            </div>
            <input type="checkbox" className="toggle" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Compliance Updates</label>
              <p className="text-sm text-gray-500">Changes in compliance status</p>
            </div>
            <input type="checkbox" className="toggle" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Audit Reminders</label>
              <p className="text-sm text-gray-500">Upcoming audits and deadlines</p>
            </div>
            <input type="checkbox" className="toggle" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Weekly Digest</label>
              <p className="text-sm text-gray-500">Weekly summary of activities</p>
            </div>
            <input type="checkbox" className="toggle" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Slack Notifications</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Critical Alerts</label>
              <p className="text-sm text-gray-500">Send critical alerts to Slack</p>
            </div>
            <input type="checkbox" className="toggle" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Slack Channel</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="#compliance-alerts"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Authentication</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Two-Factor Authentication</label>
              <p className="text-sm text-gray-500">Require 2FA for all users</p>
            </div>
            <input type="checkbox" className="toggle" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Single Sign-On (SSO)</label>
              <p className="text-sm text-gray-500">Enable SSO authentication</p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Configure
            </button>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout</label>
            <select className="px-3 py-2 border border-gray-300 rounded-md">
              <option>15 minutes</option>
              <option>30 minutes</option>
              <option>1 hour</option>
              <option>8 hours</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Password Policy</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Length</label>
            <input
              type="number"
              className="w-20 px-3 py-2 border border-gray-300 rounded-md"
              defaultValue="12"
            />
          </div>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <span className="text-sm">Require uppercase letters</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <span className="text-sm">Require lowercase letters</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <span className="text-sm">Require numbers</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <span className="text-sm">Require special characters</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderComplianceSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Active Frameworks</h3>
        <div className="space-y-3">
          <label className="flex items-center">
            <input type="checkbox" className="mr-3" defaultChecked />
            <span className="text-sm font-medium">ISO 27001</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-3" defaultChecked />
            <span className="text-sm font-medium">SOC 2</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-3" defaultChecked />
            <span className="text-sm font-medium">GDPR</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-3" />
            <span className="text-sm font-medium">PCI DSS</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-3" />
            <span className="text-sm font-medium">HIPAA</span>
          </label>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Assessment Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Risk Assessment Frequency</label>
            <select className="px-3 py-2 border border-gray-300 rounded-md">
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Quarterly</option>
              <option>Annually</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Control Testing Frequency</label>
            <select className="px-3 py-2 border border-gray-300 rounded-md">
              <option>Monthly</option>
              <option>Quarterly</option>
              <option>Semi-annually</option>
              <option>Annually</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUsersSettings = () => (
    <div className="space-y-6">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">User Management</h3>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            <i className="ri-add-line mr-2"></i>
            Add User
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Login</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-medium">JD</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">John Doe</div>
                      <div className="text-sm text-gray-500">john.doe@compliguard.africa</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Admin</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 hours ago</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Disable</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Role Permissions</h3>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium mb-2">Administrator</h4>
            <p className="text-sm text-gray-500 mb-3">Full system access and management capabilities</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked disabled />
                <span>All permissions</span>
              </label>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium mb-2">Compliance Manager</h4>
            <p className="text-sm text-gray-500 mb-3">Manage compliance frameworks and assessments</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span>View dashboards</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span>Manage risks</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span>Generate reports</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>User management</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "general":
        return renderGeneralSettings();
      case "notifications":
        return renderNotificationSettings();
      case "security":
        return renderSecuritySettings();
      case "compliance":
        return renderComplianceSettings();
      case "users":
        return renderUsersSettings();
      case "integrations":
        return (
          <div className="text-center py-8">
            <i className="ri-plug-line text-4xl text-gray-400 mb-4"></i>
            <p className="text-gray-500">Integration settings will be available soon</p>
          </div>
        );
      case "billing":
        return (
          <div className="text-center py-8">
            <i className="ri-bank-card-line text-4xl text-gray-400 mb-4"></i>
            <p className="text-gray-500">Billing settings will be available soon</p>
          </div>
        );
      case "backup":
        return (
          <div className="text-center py-8">
            <i className="ri-database-line text-4xl text-gray-400 mb-4"></i>
            <p className="text-gray-500">Backup settings will be available soon</p>
          </div>
        );
      default:
        return renderGeneralSettings();
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your organization's system configuration and preferences</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:w-64">
          <div className="bg-white rounded-lg shadow">
            <nav className="p-4">
              <ul className="space-y-2">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        activeTab === tab.id
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <i className={`${tab.icon} mr-3`}></i>
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow p-6">
            {renderTabContent()}

            {/* Save Button */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex justify-end space-x-4">
                <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-50">
                  Cancel
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
