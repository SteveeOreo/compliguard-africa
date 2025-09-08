import React, { useState } from "react";

const Controls = () => {
  const [controls] = useState([
    {
      id: 1,
      name: "Access Control Management",
      description: "Manage user access rights and authentication",
      category: "Access Control",
      type: "Technical",
      status: "Implemented",
      effectiveness: "Effective",
      owner: "IT Security",
      lastAssessed: "2024-01-15",
      nextAssessment: "2024-04-15",
      complianceFrameworks: ["ISO 27001", "SOC 2"],
      riskLevel: "Medium",
      automationLevel: "Automated",
    },
    {
      id: 2,
      name: "Data Encryption",
      description: "Encrypt sensitive data at rest and in transit",
      category: "Data Protection",
      type: "Technical",
      status: "Implemented",
      effectiveness: "Effective",
      owner: "Data Security Team",
      lastAssessed: "2024-01-10",
      nextAssessment: "2024-04-10",
      complianceFrameworks: ["GDPR", "PCI DSS"],
      riskLevel: "High",
      automationLevel: "Automated",
    },
    {
      id: 3,
      name: "Security Awareness Training",
      description: "Regular security training for all employees",
      category: "Human Resources",
      type: "Administrative",
      status: "Partially Implemented",
      effectiveness: "Needs Improvement",
      owner: "HR Department",
      lastAssessed: "2024-01-08",
      nextAssessment: "2024-03-08",
      complianceFrameworks: ["ISO 27001", "SOC 2"],
      riskLevel: "Medium",
      automationLevel: "Manual",
    },
    {
      id: 4,
      name: "Incident Response Plan",
      description: "Documented procedures for security incident handling",
      category: "Incident Management",
      type: "Administrative",
      status: "Implemented",
      effectiveness: "Effective",
      owner: "Security Team",
      lastAssessed: "2024-01-12",
      nextAssessment: "2024-07-12",
      complianceFrameworks: ["ISO 27001", "NIST"],
      riskLevel: "High",
      automationLevel: "Semi-Automated",
    },
    {
      id: 5,
      name: "Network Segmentation",
      description: "Isolate network segments to limit breach impact",
      category: "Network Security",
      type: "Technical",
      status: "In Progress",
      effectiveness: "Not Assessed",
      owner: "Network Team",
      lastAssessed: "2023-12-20",
      nextAssessment: "2024-02-20",
      complianceFrameworks: ["ISO 27001", "PCI DSS"],
      riskLevel: "High",
      automationLevel: "Automated",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterEffectiveness, setFilterEffectiveness] = useState("All");
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedControl, setSelectedControl] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case "Implemented":
        return "bg-green-100 text-green-800";
      case "Partially Implemented":
        return "bg-yellow-100 text-yellow-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Not Implemented":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getEffectivenessColor = (effectiveness) => {
    switch (effectiveness) {
      case "Effective":
        return "bg-green-100 text-green-800";
      case "Needs Improvement":
        return "bg-yellow-100 text-yellow-800";
      case "Ineffective":
        return "bg-red-100 text-red-800";
      case "Not Assessed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case "High":
        return "text-red-600";
      case "Medium":
        return "text-yellow-600";
      case "Low":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  const filteredControls = controls.filter((control) => {
    const matchesSearch =
      control.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      control.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      control.owner.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "All" || control.status === filterStatus;
    const matchesCategory =
      filterCategory === "All" || control.category === filterCategory;
    const matchesEffectiveness =
      filterEffectiveness === "All" ||
      control.effectiveness === filterEffectiveness;

    return (
      matchesSearch && matchesStatus && matchesCategory && matchesEffectiveness
    );
  });

  const controlStats = {
    total: controls.length,
    implemented: controls.filter((c) => c.status === "Implemented").length,
    effective: controls.filter((c) => c.effectiveness === "Effective").length,
    needsImprovement: controls.filter(
      (c) => c.effectiveness === "Needs Improvement",
    ).length,
    automated: controls.filter((c) => c.automationLevel === "Automated").length,
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Security Controls
        </h1>
        <p className="text-gray-600">
          Manage and monitor security controls implementation and effectiveness
        </p>
      </div>

      {/* Stats Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <i className="ri-shield-check-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Total Controls
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {controlStats.total}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <i className="ri-check-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Implemented</p>
              <p className="text-2xl font-bold text-gray-900">
                {controlStats.implemented}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <i className="ri-thumb-up-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Effective</p>
              <p className="text-2xl font-bold text-gray-900">
                {controlStats.effective}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
              <i className="ri-error-warning-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Need Improvement
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {controlStats.needsImprovement}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <i className="ri-robot-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Automated</p>
              <p className="text-2xl font-bold text-gray-900">
                {controlStats.automated}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Control Categories */}
      <div className="bg-white rounded-lg shadow mb-6 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Control Categories
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
            <div className="flex items-center mb-2">
              <i className="ri-lock-line text-2xl text-blue-600 mr-3"></i>
              <h4 className="font-medium">Access Control</h4>
            </div>
            <p className="text-sm text-gray-600">
              User authentication and authorization controls
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
            <div className="flex items-center mb-2">
              <i className="ri-database-2-line text-2xl text-green-600 mr-3"></i>
              <h4 className="font-medium">Data Protection</h4>
            </div>
            <p className="text-sm text-gray-600">
              Data encryption and loss prevention controls
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
            <div className="flex items-center mb-2">
              <i className="ri-wifi-line text-2xl text-purple-600 mr-3"></i>
              <h4 className="font-medium">Network Security</h4>
            </div>
            <p className="text-sm text-gray-600">
              Network monitoring and segmentation controls
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
            <div className="flex items-center mb-2">
              <i className="ri-alarm-warning-line text-2xl text-orange-600 mr-3"></i>
              <h4 className="font-medium">Incident Management</h4>
            </div>
            <p className="text-sm text-gray-600">
              Incident response and recovery controls
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                placeholder="Search controls..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Implemented">Implemented</option>
              <option value="Partially Implemented">
                Partially Implemented
              </option>
              <option value="In Progress">In Progress</option>
              <option value="Not Implemented">Not Implemented</option>
            </select>

            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Access Control">Access Control</option>
              <option value="Data Protection">Data Protection</option>
              <option value="Network Security">Network Security</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Incident Management">Incident Management</option>
            </select>

            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filterEffectiveness}
              onChange={(e) => setFilterEffectiveness(e.target.value)}
            >
              <option value="All">All Effectiveness</option>
              <option value="Effective">Effective</option>
              <option value="Needs Improvement">Needs Improvement</option>
              <option value="Ineffective">Ineffective</option>
              <option value="Not Assessed">Not Assessed</option>
            </select>

            <button
              onClick={() => setShowAddModal(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center gap-2"
            >
              <i className="ri-add-line"></i>
              Add Control
            </button>
          </div>
        </div>

        {/* Controls Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Control
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Effectiveness
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Owner
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Risk Level
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Next Assessment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredControls.map((control) => (
                <tr key={control.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <i className="ri-shield-check-line text-blue-600"></i>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {control.name}
                        </div>
                        <div className="text-sm text-gray-500 max-w-xs truncate">
                          {control.description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {control.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {control.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(control.status)}`}
                    >
                      {control.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getEffectivenessColor(control.effectiveness)}`}
                    >
                      {control.effectiveness}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {control.owner}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`text-sm font-medium ${getRiskColor(control.riskLevel)}`}
                    >
                      {control.riskLevel}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {control.nextAssessment}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedControl(control)}
                        className="text-blue-600 hover:text-blue-900"
                        title="View Details"
                      >
                        <i className="ri-eye-line"></i>
                      </button>
                      <button
                        className="text-green-600 hover:text-green-900"
                        title="Assess"
                      >
                        <i className="ri-survey-line"></i>
                      </button>
                      <button
                        className="text-purple-600 hover:text-purple-900"
                        title="Edit"
                      >
                        <i className="ri-edit-line"></i>
                      </button>
                      <button
                        className="text-red-600 hover:text-red-900"
                        title="Delete"
                      >
                        <i className="ri-delete-bin-line"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500">
            <i className="ri-assessment-line mr-2 text-blue-600"></i>
            <span className="text-sm font-medium">Bulk Assessment</span>
          </button>
          <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500">
            <i className="ri-pie-chart-line mr-2 text-green-600"></i>
            <span className="text-sm font-medium">Control Report</span>
          </button>
          <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500">
            <i className="ri-download-line mr-2 text-orange-600"></i>
            <span className="text-sm font-medium">Export Controls</span>
          </button>
          <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500">
            <i className="ri-calendar-line mr-2 text-purple-600"></i>
            <span className="text-sm font-medium">Assessment Calendar</span>
          </button>
        </div>
      </div>

      {/* Control Detail Modal */}
      {selectedControl && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl mx-4 max-h-screen overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">{selectedControl.name}</h3>
              <button
                onClick={() => setSelectedControl(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Control Information</h4>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">Description:</span>{" "}
                    {selectedControl.description}
                  </p>
                  <p>
                    <span className="font-medium">Category:</span>{" "}
                    {selectedControl.category}
                  </p>
                  <p>
                    <span className="font-medium">Type:</span>{" "}
                    {selectedControl.type}
                  </p>
                  <p>
                    <span className="font-medium">Status:</span>
                    <span
                      className={`ml-2 px-2 py-1 rounded ${getStatusColor(selectedControl.status)}`}
                    >
                      {selectedControl.status}
                    </span>
                  </p>
                  <p>
                    <span className="font-medium">Effectiveness:</span>
                    <span
                      className={`ml-2 px-2 py-1 rounded ${getEffectivenessColor(selectedControl.effectiveness)}`}
                    >
                      {selectedControl.effectiveness}
                    </span>
                  </p>
                  <p>
                    <span className="font-medium">Risk Level:</span>
                    <span
                      className={`ml-2 font-medium ${getRiskColor(selectedControl.riskLevel)}`}
                    >
                      {selectedControl.riskLevel}
                    </span>
                  </p>
                  <p>
                    <span className="font-medium">Automation Level:</span>{" "}
                    {selectedControl.automationLevel}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Assessment Information</h4>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">Owner:</span>{" "}
                    {selectedControl.owner}
                  </p>
                  <p>
                    <span className="font-medium">Last Assessed:</span>{" "}
                    {selectedControl.lastAssessed}
                  </p>
                  <p>
                    <span className="font-medium">Next Assessment:</span>{" "}
                    {selectedControl.nextAssessment}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-2">Compliance Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {selectedControl.complianceFrameworks.map(
                  (framework, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                    >
                      {framework}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={() => setSelectedControl(null)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
              >
                Close
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                <i className="ri-survey-line mr-2"></i>
                Assess Control
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                <i className="ri-edit-line mr-2"></i>
                Edit Control
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Control Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-medium mb-4">Add New Control</h3>
            <p className="text-gray-600 mb-4">
              Control creation form would go here...
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Create Control
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Controls;
