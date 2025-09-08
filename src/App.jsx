import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import DashboardContent from "./components/DashboardContent";
import Assets from "./components/pages/Assets";
import Risks from "./components/pages/Risks";
import Policies from "./components/pages/Policies";
import Controls from "./components/pages/Controls";
import Compliance from "./components/pages/Compliance";
import Projects from "./components/pages/Projects";
import Audits from "./components/pages/Audits";
import ThirdPartyRisk from "./components/pages/ThirdPartyRisk";
import Reports from "./components/pages/Reports";
import ContinuousComplianceMonitoring from "./components/pages/ContinuousComplianceMonitoring";
import Integrations from "./components/pages/Integrations";
import Settings from "./components/pages/Settings";
import "remixicon/fonts/remixicon.css";

function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<DashboardContent />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/risks" element={<Risks />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/controls" element={<Controls />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/audits" element={<Audits />} />
          <Route path="/third-party-risk" element={<ThirdPartyRisk />} />
          <Route path="/reports" element={<Reports />} />
          <Route
            path="/continuous-compliance-monitoring"
            element={<ContinuousComplianceMonitoring />}
          />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;
