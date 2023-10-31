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
import { data } from "../obj/Obj";

import axios from "axios";

//Server Url
let baseUrl = "http://localhost:8000";

const LapashaRoutes = () => {
  const [addStep, setAddStep] = useState(0);
  const [canvas, setCanvas] = useState(null);
  const [contactEmployeeCanvas, setContactEmployeeCanvas] = useState(null);
  const [verificationCanvas, setVerificationCanvas] = useState(null);
  const [verificationEmpCanvas, setVerificationEmpCanvas] = useState(null);
  const [verificationPreCanvas, setVerificationPreCanvas] = useState(null);
  const [verificationEmpSBCanvas, setVerificationEmpSBCanvas] = useState(null);
  const [contactTransCanvas, setContactTransCanvas] = useState(null);
  const [policyCanvas, setPolicyCanvas] = useState(null);
  const [policyEmployeeCanvas, setPolicyEmployeeCanvas] = useState(null);
  const [policyTranslatorCanvas, setPolicyTranslatorCanvas] = useState(null);
  const [formData, setFormData] = useState(data);
  const [formDataArr, setFormDataArr] = useState([]);
  const dataString = JSON.stringify(formData);

  const onForm = e => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onStepForm = eve => {
    let formDataChanges = {};
    localStorage.setItem("DATA", addStep.toString());
    localStorage.setItem("FORMDATA", dataString);
    setAddStep(eve);

    console.log(dataString);

    if (canvas) {
      const signatureData = canvas.toDataURL();
      formDataChanges.conFormsign = signatureData;
    }
    if (policyCanvas) {
      const signaturePolicyData = policyCanvas.toDataURL();
      formDataChanges.empSigPolicy = signaturePolicyData;
    }
    if (policyEmployeeCanvas) {
      const signatureEmployeePolicyData = policyEmployeeCanvas.toDataURL();
      formDataChanges.empSignPolicy = signatureEmployeePolicyData;
    }
    if (policyTranslatorCanvas) {
      const signatureTransPolicyData = policyTranslatorCanvas.toDataURL();
      formDataChanges.transSignPolicy = signatureTransPolicyData;
    }
    if (contactEmployeeCanvas) {
      const signatureTransPolicyData = contactEmployeeCanvas.toDataURL();
      formDataChanges.empSign = signatureTransPolicyData;
    }
    if (contactTransCanvas) {
      const signatureTransPolicyData = contactTransCanvas.toDataURL();
      formDataChanges.transSignName = signatureTransPolicyData;
    }
    if (verificationCanvas) {
      const signatureVerificationData = verificationCanvas.toDataURL();
      formDataChanges.signOfEmp = signatureVerificationData;
    }
    if (verificationEmpCanvas) {
      const signatureVerificationEmpData = verificationEmpCanvas.toDataURL();
      formDataChanges.signOfEmpRep = signatureVerificationEmpData;
    }
    if (verificationPreCanvas) {
      const signatureVerificationPreData = verificationPreCanvas.toDataURL();
      formDataChanges.signOfEmpRep = signatureVerificationPreData;
    }
    if (verificationEmpSBCanvas) {
      const signatureVerificationEmpSBData = verificationEmpSBCanvas.toDataURL();
      formDataChanges.signOfEmpRep = signatureVerificationEmpSBData;
    }
    setFormData(prevFormData => ({
      ...prevFormData,
      ...formDataChanges
    }));
  };

  const postFormData = async () => {
    try {
      let resp = await axios.post(`${baseUrl}/formDataPost`, dataString);
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getFormData = () => {
    try {
      axios.get(`${baseUrl}/formData`).then(({ data }) => {
        setFormDataArr(data);
        console.log(data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      localStorage.getItem("DATA", addStep);
      localStorage.getItem("FORMDATA", dataString);
      getFormData();
    },
    [dataString, addStep,]
  );

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
            canvaVerificationState={setVerificationCanvas}
            canvaVerificationEmpState={setVerificationEmpCanvas}
            canvaVerificationPreState={setVerificationPreCanvas}
            canvaVerificationEmpSBState={setVerificationEmpSBCanvas}
            // formDataFunc={postFormData}
          />
        }
      />
      <Route
        path="/eligibilityverificationview"
        element={
          <EligibilityVerificationView
            dataString={formDataArr}
            fomDataGetFunc={getFormData}
          />
        }
      />
      <Route
        path="/employmentinformationform"
        element={
          <EmploymentInformationForm
            data={formData}
            formChange={onForm}
            onStep={() => onStepForm(1)}
            addData={addStep}
            canvaUpdatedState={setCanvas}
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
            updateEmployeeContactSignature={setContactEmployeeCanvas}
            updateTransContactSignature={setContactTransCanvas}
            formDataFunc={postFormData}
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
            updatePolicySignature={setPolicyCanvas}
            updateEmployeePolicySignature={setPolicyEmployeeCanvas}
            updateTransPolicySignature={setPolicyTranslatorCanvas}
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
          <StepForm
            addCount={addStep}
            onStep2={eve => onStepForm(eve)}
            formDataFunc={postFormData}
          />
        }
      />
    </Routes>
    // </BrowserRouter>
  );
};

export default LapashaRoutes;
