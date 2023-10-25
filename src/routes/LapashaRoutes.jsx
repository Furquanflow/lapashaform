import React from "react";
import EligibilityVerification from "../pages/EligibilityVerification";
import AcceptableDocuments from "../pages/AcceptableDocuments";
import SupplementA from "../pages/SupplementA";
import SupplementB from "../pages/SupplementB";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import StepForm from "../pages/StepForm";
import EligibilityVerificationView from "../pages/EligibilityVerificationView";
import EmploymentInformationForm from "../pages/EmploymentInformationForm";
import ContractForm from "../pages/ContractForm";
import PolicyForm from "../pages/PolicyForm";

const LapashaRoutes = ({ formData, onForm }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/eligibilityverification"
          element={
            <EligibilityVerification data={formData} formChange={onForm} />
          }
        />
        <Route
          path="/eligibilityverificationview"
          element={<EligibilityVerificationView />}
        />
        <Route
          path="/employmentinformationform"
          element={
            <EmploymentInformationForm data={formData} formChange={onForm} />
          }
        />
        <Route
          path="/contractform"
          element={<ContractForm data={formData} formChange={onForm} />}
        />
        <Route
          path="/policyform"
          element={<PolicyForm data={formData} formChange={onForm} />}
        />
        <Route path="/acceptabledocuments" element={<AcceptableDocuments />} />
        <Route path="/supplementa" element={<SupplementA />} />
        <Route path="/supplementb" element={<SupplementB />} />
        <Route path="/login" element={<Login />} />
        <Route path="/stepform" element={<StepForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default LapashaRoutes;
