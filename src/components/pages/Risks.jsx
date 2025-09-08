import React, { useState } from "react";

const Risks = () => {
  const [risks] = useState([
    {
      id: 1,
      title: "Data Breach in Customer Database",
      description: "Potential unauthorized access to customer personal data",
      category: "Data Security",
      severity: "Critical",
      probability: "Medium",
      impact: "High",
      riskScore: 85,
      owner: "John Doe",
      status: "Open",
      dueDate: "2024-02-15",
      createdDate: "2024-01-10",
      mitigation: "Implement additional encryption and access controls",
      affectedAssets: ["Customer Database", "User Authentication System"],
      complianceFrameworks: ["GDPR", "SOC 2"],
    },
    {
      id: 2,
      title: "Third-party Vendor Security Gap",
      description: "Vendor lacks proper security certifications and controls",
      category: "Third Party",
      severity: "High",
      probability: "High",
      impact: "Medium",
      riskScore: 75,
      owner: "Jane Smith",
      status: "In Progress",
      dueDate: "2024-02-28",
      createdDate: "2024-01-05",
      mitigation:
        "Conduct vendor security assessment and require certifications",
      affectedAssets: ["Payment Processing API", "Customer Data"],
      complianceFrameworks: ["PCI DSS", "ISO 27001"],
    },
    {
      id: 3,
      title: "Outdated Software Dependencies",
      description: "Critical security vulnerabilities in third-party libraries",
      category: "Technology",
      severity: "Medium",
      probability: "High",
      impact: "Medium",
      riskScore: 60,
      owner: "Mike Johnson",
      status: "Open",
      dueDate: "2024-02-10",
      createdDate: "2024-01-12",
      mitigation:
        "Update all dependencies and implement automated vulnerability scanning",
      affectedAssets: ["Web Application", "Mobile App"],
      complianceFrameworks: ["ISO 27001"],
    },
    {
      id: 4,
      title: "Insufficient Employee Training",
      description:
        "Staff lack awareness of current security policies and procedures",
      category: "Human Resources",
      severity: "Medium",
      probability: "Medium",
      impact: "Medium",
      riskScore: 45,
      owner: "Sarah Wilson",
      status: "Closed",
      dueDate: "2024-01-30",
      createdDate: "2024-01-01",
      mitigation: "Implement comprehensive security awareness training program",
      affectedAssets: ["All Systems"],
      complianceFrameworks: ["ISO 27001", "SOC 2"],
    },
    {
      id: 5,
      title: "Regulatory Compliance Gap",
      description: "Non-compliance with new data protection regulations",
      category: "Regulatory",
      severity: "High",
      probability: "Low",
      impact: "Critical",
      riskScore: 70,
      owner: "Legal Team",
      status: "Open",
      dueDate: "2024-03-15",
      createdDate: "2024-01-08",
      mitigation:
        "Update policies and procedures to meet new regulatory requirements",
      affectedAssets: ["Data Processing Systems", "Privacy Controls"],
      complianceFrameworks: ["GDPR", "CCPA"],
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterSeverity, setFilterSeverity] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterCategory, setFilterCategory] = useState("All");
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedRisk, setSelectedRisk] = useState(null);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "Critical":
        return "bg-red-100 text-red-800 border-red-200";
      case "High":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "bg-red-100 text-red-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Closed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRiskScoreColor = (score) => {
    if (score >= 80) return "text-red-600";
    if (score >= 60) return "text-orange-600";
    if (score >= 40) return "text-yellow-600";
    return "text-green-600";
  };

  const filteredRisks = risks.filter((risk) => {
    const matchesSearch =
      risk.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      risk.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      risk.owner.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity =
      filterSeverity === "All" || risk.severity === filterSeverity;
    const matchesStatus =
      filterStatus === "All" || risk.status === filterStatus;
    const matchesCategory =
      filterCategory === "All" || risk.category === filterCategory;

    return matchesSearch && matchesSeverity && matchesStatus && matchesCategory;
  });

  const riskStats = {
    total: risks.length,
    open: risks.filter((r) => r.status === "Open").length,
    critical: risks.filter((r) => r.severity === "Critical").length,
    overdue: risks.filter(
      (r) => new Date(r.dueDate) < new Date() && r.status !== "Closed",
    ).length,
    avgScore: Math.round(
      risks.reduce((acc, r) => acc + r.riskScore, 0) / risks.length,
    ),
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Risk Management
        </h1>
        <p className="text-gray-600">
          Identify, assess, and manage organizational risks across all domains
        </p>
      </div>

      {/* Stats Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <i className="ri-alert-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Risks</p>
              <p className="text-2xl font-bold text-gray-900">
                {riskStats.total}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-100 text-red-600">
              <i className="ri-error-warning-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Open Risks</p>
              <p className="text-2xl font-bold text-gray-900">
                {riskStats.open}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-orange-100 text-orange-600">
              <i className="ri-fire-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Critical</p>
              <p className="text-2xl font-bold text-gray-900">
                {riskStats.critical}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
              <i className="ri-time-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Overdue</p>
              <p className="text-2xl font-bold text-gray-900">
                {riskStats.overdue}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <i className="ri-speed-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Avg Risk Score
              </p>
              <p
                className={`text-2xl font-bold ${getRiskScoreColor(riskStats.avgScore)}`}
              >
                {riskStats.avgScore}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Heat Map */}
      <div className="bg-white rounded-lg shadow mb-6 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Risk Heat Map
        </h3>
        <div className="grid grid-cols-6 gap-2 text-xs">
          <div></div>
          <div className="text-center font-semibold">Very Low</div>
          <div className="text-center font-semibold">Low</div>
          <div className="text-center font-semibold">Medium</div>
          <div className="text-center font-semibold">High</div>
          <div className="text-center font-semibold">Very High</div>

          <div className="font-semibold">Critical</div>
          <div className="h-8 bg-yellow-200 border flex items-center justify-center">
            0
          </div>
          <div className="h-8 bg-orange-200 border flex items-center justify-center">
            0
          </div>
          <div className="h-8 bg-red-200 border flex items-center justify-center">
            1
          </div>
          <div className="h-8 bg-red-300 border flex items-center justify-center">
            1
          </div>
          <div className="h-8 bg-red-400 border flex items-center justify-center">
            0
          </div>

          <div className="font-semibold">High</div>
          <div className="h-8 bg-green-200 border flex items-center justify-center">
            0
          </div>
          <div className="h-8 bg-yellow-200 border flex items-center justify-center">
            0
          </div>
          <div className="h-8 bg-orange-200 border flex items-center justify-center">
            1
          </div>
          <div className="h-8 bg-red-200 border flex items-center justify-center">
            1
          </div>
          <div className="h-8 bg-red-300 border flex items-center justify-center">
            0
          </div>

          <div className="font-semibold">Medium</div>
          <div className="h-8 bg-green-200 border flex items-center justify-center">
            0
          </div>
          <div className="h-8 bg-green-200 border flex items-center justify-center">
            0
          </div>
          <div className="h-8 bg-yellow-200 border flex items-center justify-center">
            2
          </div>
          <div className="h-8 bg-orange-200 border flex items-center justify-center">
            0
          </div>
          <div className="h-8 bg-red-200 border flex items-center justify-center">
            0
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
                placeholder="Search risks..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filterSeverity}
              onChange={(e) => setFilterSeverity(e.target.value)}
            >
              <option value="All">All Severities</option>
              <option value="Critical">Critical</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Closed">Closed</option>
            </select>

            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Data Security">Data Security</option>
              <option value="Third Party">Third Party</option>
              <option value="Technology">Technology</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Regulatory">Regulatory</option>
            </select>

            <button
              onClick={() => setShowAddModal(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center gap-2"
            >
              <i className="ri-add-line"></i>
              Add Risk
            </button>
          </div>
        </div>

        {/* Risks Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Risk
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Severity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Owner
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredRisks.map((risk) => (
                <tr key={risk.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                          <i className="ri-alert-line text-red-600"></i>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {risk.title}
                        </div>
                        <div className="text-sm text-gray-500 max-w-xs truncate">
                          {risk.description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {risk.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getSeverityColor(risk.severity)}`}
                    >
                      {risk.severity}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`text-sm font-bold ${getRiskScoreColor(risk.riskScore)}`}
                    >
                      {risk.riskScore}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {risk.owner}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(risk.status)}`}
                    >
                      {risk.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div
                      className={
                        new Date(risk.dueDate) < new Date() &&
                        risk.status !== "Closed"
                          ? "text-red-600"
                          : ""
                      }
                    >
                      {risk.dueDate}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedRisk(risk)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <i className="ri-eye-line"></i>
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <i className="ri-edit-line"></i>
                      </button>
                      <button className="text-red-600 hover:text-red-900">
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
            <i className="ri-file-download-line mr-2 text-blue-600"></i>
            <span className="text-sm font-medium">Export Risks</span>
          </button>
          <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500">
            <i className="ri-mail-line mr-2 text-green-600"></i>
            <span className="text-sm font-medium">Risk Alerts</span>
          </button>
          <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500">
            <i className="ri-pie-chart-line mr-2 text-orange-600"></i>
            <span className="text-sm font-medium">Risk Report</span>
          </button>
          <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500">
            <i className="ri-settings-3-line mr-2 text-purple-600"></i>
            <span className="text-sm font-medium">Risk Settings</span>
          </button>
        </div>
      </div>

      {/* Risk Detail Modal */}
      {selectedRisk && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl mx-4 max-h-screen overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">{selectedRisk.title}</h3>
              <button
                onClick={() => setSelectedRisk(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Risk Details</h4>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">Description:</span>{" "}
                    {selectedRisk.description}
                  </p>
                  <p>
                    <span className="font-medium">Category:</span>{" "}
                    {selectedRisk.category}
                  </p>
                  <p>
                    <span className="font-medium">Severity:</span>{" "}
                    <span
                      className={`px-2 py-1 rounded ${getSeverityColor(selectedRisk.severity)}`}
                    >
                      {selectedRisk.severity}
                    </span>
                  </p>
                  <p>
                    <span className="font-medium">Risk Score:</span>{" "}
                    <span className={getRiskScoreColor(selectedRisk.riskScore)}>
                      {selectedRisk.riskScore}
                    </span>
                  </p>
                  <p>
                    <span className="font-medium">Status:</span>{" "}
                    <span
                      className={`px-2 py-1 rounded ${getStatusColor(selectedRisk.status)}`}
                    >
                      {selectedRisk.status}
                    </span>
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Management Info</h4>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">Owner:</span>{" "}
                    {selectedRisk.owner}
                  </p>
                  <p>
                    <span className="font-medium">Created:</span>{" "}
                    {selectedRisk.createdDate}
                  </p>
                  <p>
                    <span className="font-medium">Due Date:</span>{" "}
                    {selectedRisk.dueDate}
                  </p>
                  <p>
                    <span className="font-medium">Mitigation:</span>{" "}
                    {selectedRisk.mitigation}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-2">Affected Assets</h4>
              <div className="flex flex-wrap gap-2">
                {selectedRisk.affectedAssets.map((asset, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                  >
                    {asset}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-medium mb-2">Compliance Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {selectedRisk.complianceFrameworks.map((framework, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
                  >
                    {framework}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={() => setSelectedRisk(null)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
              >
                Close
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Edit Risk
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Risk Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-medium mb-4">Add New Risk</h3>
            <p className="text-gray-600 mb-4">
              Risk creation form would go here...
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Save Risk
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Risks;
