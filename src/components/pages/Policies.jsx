import React, { useState } from "react";

const Policies = () => {
  const [policies] = useState([
    {
      id: 1,
      title: "Information Security Policy",
      description:
        "Comprehensive policy covering information security management and controls",
      category: "Security",
      status: "Active",
      version: "2.1",
      owner: "Security Team",
      createdDate: "2023-06-15",
      lastUpdated: "2024-01-10",
      nextReview: "2024-06-15",
      approvedBy: "CISO",
      complianceFrameworks: ["ISO 27001", "SOC 2", "NIST"],
      documentType: "Core Policy",
      stakeholders: ["IT Department", "HR", "Legal"],
      implementationStatus: "Fully Implemented",
    },
    {
      id: 2,
      title: "Data Privacy Policy",
      description:
        "Policy governing the collection, processing, and protection of personal data",
      category: "Privacy",
      status: "Active",
      version: "1.8",
      owner: "Data Protection Officer",
      createdDate: "2023-05-20",
      lastUpdated: "2024-01-05",
      nextReview: "2024-05-20",
      approvedBy: "Legal Counsel",
      complianceFrameworks: ["GDPR", "CCPA", "PIPEDA"],
      documentType: "Core Policy",
      stakeholders: ["Legal", "Marketing", "Customer Service"],
      implementationStatus: "Fully Implemented",
    },
    {
      id: 3,
      title: "Access Control Procedure",
      description:
        "Detailed procedures for managing user access rights and privileges",
      category: "Security",
      status: "Under Review",
      version: "1.5",
      owner: "IT Security",
      createdDate: "2023-08-10",
      lastUpdated: "2024-01-12",
      nextReview: "2024-02-10",
      approvedBy: "Pending",
      complianceFrameworks: ["ISO 27001", "SOC 2"],
      documentType: "Procedure",
      stakeholders: ["IT Department", "HR"],
      implementationStatus: "Partially Implemented",
    },
    {
      id: 4,
      title: "Business Continuity Plan",
      description:
        "Comprehensive plan for maintaining business operations during disruptions",
      category: "Operations",
      status: "Active",
      version: "3.0",
      owner: "Operations Manager",
      createdDate: "2023-04-01",
      lastUpdated: "2023-12-20",
      nextReview: "2024-04-01",
      approvedBy: "CEO",
      complianceFrameworks: ["ISO 22301", "NIST"],
      documentType: "Plan",
      stakeholders: ["All Departments"],
      implementationStatus: "Fully Implemented",
    },
    {
      id: 5,
      title: "Vendor Management Policy",
      description:
        "Policy for assessing and managing third-party vendor relationships",
      category: "Third Party",
      status: "Draft",
      version: "1.0",
      owner: "Procurement",
      createdDate: "2024-01-15",
      lastUpdated: "2024-01-15",
      nextReview: "2024-03-15",
      approvedBy: "Pending",
      complianceFrameworks: ["SOC 2", "ISO 27001"],
      documentType: "Policy",
      stakeholders: ["Procurement", "Legal", "Security"],
      implementationStatus: "Not Started",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterType, setFilterType] = useState("All");
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Under Review":
        return "bg-yellow-100 text-yellow-800";
      case "Draft":
        return "bg-blue-100 text-blue-800";
      case "Expired":
        return "bg-red-100 text-red-800";
      case "Archived":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getImplementationColor = (status) => {
    switch (status) {
      case "Fully Implemented":
        return "bg-green-100 text-green-800";
      case "Partially Implemented":
        return "bg-yellow-100 text-yellow-800";
      case "Not Started":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredPolicies = policies.filter((policy) => {
    const matchesSearch =
      policy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      policy.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      policy.owner.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "All" || policy.status === filterStatus;
    const matchesCategory =
      filterCategory === "All" || policy.category === filterCategory;
    const matchesType =
      filterType === "All" || policy.documentType === filterType;

    return matchesSearch && matchesStatus && matchesCategory && matchesType;
  });

  const policyStats = {
    total: policies.length,
    active: policies.filter((p) => p.status === "Active").length,
    underReview: policies.filter((p) => p.status === "Under Review").length,
    draft: policies.filter((p) => p.status === "Draft").length,
    dueForReview: policies.filter(
      (p) =>
        new Date(p.nextReview) <=
        new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    ).length,
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Policy Management
        </h1>
        <p className="text-gray-600">
          Manage organizational policies, procedures, and documentation for
          compliance
        </p>
      </div>

      {/* Stats Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <i className="ri-file-text-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Total Policies
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {policyStats.total}
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
              <p className="text-sm font-medium text-gray-600">Active</p>
              <p className="text-2xl font-bold text-gray-900">
                {policyStats.active}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
              <i className="ri-eye-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Under Review</p>
              <p className="text-2xl font-bold text-gray-900">
                {policyStats.underReview}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <i className="ri-draft-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Drafts</p>
              <p className="text-2xl font-bold text-gray-900">
                {policyStats.draft}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-orange-100 text-orange-600">
              <i className="ri-calendar-check-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Due for Review
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {policyStats.dueForReview}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Policy Templates Section */}
      <div className="bg-white rounded-lg shadow mb-6 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Policy Templates
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center mb-2">
              <i className="ri-shield-check-line text-2xl text-blue-600 mr-3"></i>
              <h4 className="font-medium">Security Policy</h4>
            </div>
            <p className="text-sm text-gray-600">
              Standard information security policy template
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center mb-2">
              <i className="ri-user-settings-line text-2xl text-green-600 mr-3"></i>
              <h4 className="font-medium">Privacy Policy</h4>
            </div>
            <p className="text-sm text-gray-600">
              Data privacy and protection policy template
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center mb-2">
              <i className="ri-user-3-line text-2xl text-purple-600 mr-3"></i>
              <h4 className="font-medium">HR Policy</h4>
            </div>
            <p className="text-sm text-gray-600">
              Human resources policy template
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center mb-2">
              <i className="ri-refresh-line text-2xl text-orange-600 mr-3"></i>
              <h4 className="font-medium">Incident Response</h4>
            </div>
            <p className="text-sm text-gray-600">
              Security incident response policy template
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
                placeholder="Search policies..."
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
              <option value="Active">Active</option>
              <option value="Under Review">Under Review</option>
              <option value="Draft">Draft</option>
              <option value="Expired">Expired</option>
              <option value="Archived">Archived</option>
            </select>

            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Security">Security</option>
              <option value="Privacy">Privacy</option>
              <option value="Operations">Operations</option>
              <option value="Third Party">Third Party</option>
              <option value="HR">HR</option>
            </select>

            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="All">All Types</option>
              <option value="Core Policy">Core Policy</option>
              <option value="Policy">Policy</option>
              <option value="Procedure">Procedure</option>
              <option value="Plan">Plan</option>
              <option value="Standard">Standard</option>
            </select>

            <button
              onClick={() => setShowAddModal(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center gap-2"
            >
              <i className="ri-add-line"></i>
              Add Policy
            </button>
          </div>
        </div>

        {/* Policies Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Policy
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Version
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Owner
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Next Review
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Implementation
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPolicies.map((policy) => (
                <tr key={policy.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <i className="ri-file-text-line text-blue-600"></i>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {policy.title}
                        </div>
                        <div className="text-sm text-gray-500 max-w-xs truncate">
                          {policy.description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {policy.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(policy.status)}`}
                    >
                      {policy.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {policy.version}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {policy.owner}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {policy.lastUpdated}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div
                      className={
                        new Date(policy.nextReview) <=
                        new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                          ? "text-orange-600 font-medium"
                          : ""
                      }
                    >
                      {policy.nextReview}
                      {new Date(policy.nextReview) <=
                        new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) && (
                        <i className="ri-alert-line ml-1"></i>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getImplementationColor(policy.implementationStatus)}`}
                    >
                      {policy.implementationStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedPolicy(policy)}
                        className="text-blue-600 hover:text-blue-900"
                        title="View Details"
                      >
                        <i className="ri-eye-line"></i>
                      </button>
                      <button
                        className="text-green-600 hover:text-green-900"
                        title="Edit"
                      >
                        <i className="ri-edit-line"></i>
                      </button>
                      <button
                        className="text-purple-600 hover:text-purple-900"
                        title="Download"
                      >
                        <i className="ri-download-line"></i>
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
            <i className="ri-upload-cloud-line mr-2 text-blue-600"></i>
            <span className="text-sm font-medium">Bulk Upload</span>
          </button>
          <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500">
            <i className="ri-calendar-check-line mr-2 text-green-600"></i>
            <span className="text-sm font-medium">Review Calendar</span>
          </button>
          <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500">
            <i className="ri-pie-chart-line mr-2 text-orange-600"></i>
            <span className="text-sm font-medium">Compliance Report</span>
          </button>
          <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500">
            <i className="ri-notification-line mr-2 text-purple-600"></i>
            <span className="text-sm font-medium">Set Reminders</span>
          </button>
        </div>
      </div>

      {/* Policy Detail Modal */}
      {selectedPolicy && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl mx-4 max-h-screen overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">{selectedPolicy.title}</h3>
              <button
                onClick={() => setSelectedPolicy(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Policy Information</h4>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">Description:</span>{" "}
                    {selectedPolicy.description}
                  </p>
                  <p>
                    <span className="font-medium">Category:</span>{" "}
                    {selectedPolicy.category}
                  </p>
                  <p>
                    <span className="font-medium">Document Type:</span>{" "}
                    {selectedPolicy.documentType}
                  </p>
                  <p>
                    <span className="font-medium">Status:</span>
                    <span
                      className={`ml-2 px-2 py-1 rounded ${getStatusColor(selectedPolicy.status)}`}
                    >
                      {selectedPolicy.status}
                    </span>
                  </p>
                  <p>
                    <span className="font-medium">Version:</span>{" "}
                    {selectedPolicy.version}
                  </p>
                  <p>
                    <span className="font-medium">Implementation:</span>
                    <span
                      className={`ml-2 px-2 py-1 rounded ${getImplementationColor(selectedPolicy.implementationStatus)}`}
                    >
                      {selectedPolicy.implementationStatus}
                    </span>
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Management Information</h4>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">Owner:</span>{" "}
                    {selectedPolicy.owner}
                  </p>
                  <p>
                    <span className="font-medium">Approved By:</span>{" "}
                    {selectedPolicy.approvedBy}
                  </p>
                  <p>
                    <span className="font-medium">Created:</span>{" "}
                    {selectedPolicy.createdDate}
                  </p>
                  <p>
                    <span className="font-medium">Last Updated:</span>{" "}
                    {selectedPolicy.lastUpdated}
                  </p>
                  <p>
                    <span className="font-medium">Next Review:</span>
                    <span
                      className={
                        new Date(selectedPolicy.nextReview) <=
                        new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                          ? "text-orange-600 font-medium ml-1"
                          : "ml-1"
                      }
                    >
                      {selectedPolicy.nextReview}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-2">Compliance Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {selectedPolicy.complianceFrameworks.map((framework, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                  >
                    {framework}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-medium mb-2">Stakeholders</h4>
              <div className="flex flex-wrap gap-2">
                {selectedPolicy.stakeholders.map((stakeholder, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
                  >
                    {stakeholder}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={() => setSelectedPolicy(null)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
              >
                Close
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                <i className="ri-download-line mr-2"></i>
                Download
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                <i className="ri-edit-line mr-2"></i>
                Edit Policy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Policy Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-medium mb-4">Add New Policy</h3>
            <p className="text-gray-600 mb-4">
              Policy creation form would go here...
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Create Policy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Policies;
