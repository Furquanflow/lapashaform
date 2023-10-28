import React, { useEffect, useState } from "react";
import EligibilityVerification from "../pages/EligibilityVerification";
import AcceptableDocuments from "../pages/AcceptableDocuments";
import SupplementA from "../pages/SupplementA";
import SupplementB from "../pages/SupplementB";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import StepForm from "../pages/StepForm";
import EligibilityVerificationView from "../pages/EligibilityVerificationView";
import EmploymentInformationForm from "../pages/EmploymentInformationForm";
import ContractForm from "../pages/ContractForm";
import PolicyForm from "../pages/PolicyForm";

const LapashaRoutes = ({ formData, onForm }) => {
  const [addStep, setAddStep] = useState(0);

  const onStepForm = eve => {
    setAddStep(eve);
    console.log(addStep);
  };

  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/eligibilityverification"
        element={
          <EligibilityVerification
            data={formData}
            formChange3={onForm}
            onStep3={() => onStepForm(4)}
            addData3={addStep}
          />
        }
      />
      <Route
        path="/eligibilityverificationview"
        element={<EligibilityVerificationView />}
      />
      <Route
        path="/employmentinformationform"
        element={
          <EmploymentInformationForm
            data={formData}
            formChange={onForm}
            onStep={() => onStepForm(1)}
            addData={addStep}
          />
        }
      />
      <Route
        path="/contractform"
        element={
          <ContractForm
            data={formData}
            formChange2={onForm}
            onStep2={() => onStepForm(3)}
            addData2={addStep}
          />
        }
      />
      <Route
        path="/policyform"
        element={
          <PolicyForm
            data={formData}
            formChange1={onForm}
            onStep1={() => onStepForm(2)}
            addData1={addStep}
          />
        }
      />
      <Route path="/acceptabledocuments" element={<AcceptableDocuments />} />
      <Route path="/supplementa" element={<SupplementA />} />
      <Route path="/supplementb" element={<SupplementB />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/stepform"
        element={
          <StepForm addCount={addStep} onStep2={eve => onStepForm(eve)} />
        }
      />
    </Routes>
    // </BrowserRouter>
  );
};

export default LapashaRoutes;
