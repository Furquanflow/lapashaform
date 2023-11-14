import React, { useEffect, useState } from "react";
import EligibilityVerification from "../pages/EligibilityVerification";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import StepForm from "../pages/StepForm";
import EligibilityVerificationView from "../pages/EligibilityVerificationView";
import EmploymentInformationForm from "../pages/EmploymentInformationForm";
import ContractForm from "../pages/ContractForm";
import PolicyForm from "../pages/PolicyForm";
import { data } from "../obj/Obj";
import Register from "../pages/Register";
import axios from "axios";

//Server Url
// let baseUrl = "https://lapasha-server.vercel.app";

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
  const [formDataArr, setFormDataArr] = useState(null);
  const [companyCall, setCompanyCall] = useState(0);
  let dataString = formData;
  const navigate = useNavigate();

  const onForm = e => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onStepForm = eve => {
    let formDataChanges = {};
    localStorage.setItem("DATA", addStep.toString());
    localStorage.setItem("FORMDATA", dataString);
    setAddStep(eve);
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
      formDataChanges.signOfPre = signatureVerificationPreData;
    }
    if (verificationEmpSBCanvas) {
      const signatureVerificationEmpSBData = verificationEmpSBCanvas.toDataURL();
      formDataChanges.signOfEmpSB = signatureVerificationEmpSBData;
    }
    setFormData(prevFormData => ({
      ...prevFormData,
      ...formDataChanges
    }));
  };

  const onLoginClick = () => {
    navigate("/home");
    localStorage.setItem("DATA", addStep.toString());
    localStorage.setItem("FORMDATA", dataString);


    //  Will Use this Function Later
    // window.onload = () => {
    //   localStorage.setItem("DATA", addStep.toString());
    //   localStorage.setItem("FORMDATA", dataString);
    // }; Will Use this Function Later
  };

  const onRegister = () => {
    navigate("/login");
  };

  const onCompany = eve => {
    setCompanyCall(eve);
    navigate("/stepform");
    if (companyCall === 0) {
      setFormData({});
      setAddStep(0);
    } else if (companyCall === 1) {
      setFormData({});
      setAddStep(0);
    } else if (companyCall === 2) {
      setFormData({});
      setAddStep(0);
    }
  };

  const postFormData = async () => {
    const url = getPostUrl();
    if (!url) {
      alert("Select a valid option.");
      return;
    }
    try {
      const response = await axios.post(url, dataString);
      console.log(response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const getFormData = () => {
    const url = getGetUrl();
    if (!url) {
      alert("Select a valid option.");
      return;
    }
    axios
      .get(url)
      .then(({ data }) => {
        setFormDataArr(data);
      })
      .catch(error => {
        console.error("Error getting data:", error);
      });
  };

  console.log(formDataArr);

  const getPostUrl = () => {
    switch (companyCall) {
      case 0:
        return "https://lapasha-server.vercel.app/loungeandgrilldatapost";
      case 1:
        return "https://lapasha-server.vercel.app/formdatapost";
      case 2:
        return "https://lapasha-server.vercel.app/naracafedataPost";
      default:
        return null;
    }
  };

  const getGetUrl = () => {
    switch (companyCall) {
      case 0:
        return "https://lapasha-server.vercel.app/loungeandgrilldata";
      case 1:
        return "https://lapasha-server.vercel.app/formdata";
      case 2:
        return "https://lapasha-server.vercel.app/naracafedata";
      default:
        return null;
    }
  };

  useEffect(
    () => {
      // getFormData();
      localStorage.getItem("DATA", addStep);
      localStorage.getItem("FORMDATA", dataString);
    },
    [dataString, addStep]
  );

  return (
    <Routes>
      <Route path="/home" element={<Home callData={onCompany} />} />
      <Route
        path="/eligibilityverification"
        element={
          <EligibilityVerification
            data={formData}
            formChange3={onForm}
            onStep3={() => onStepForm(4)}
            addData3={addStep}
            formData={getFormData}
            canvaVerificationState={setVerificationCanvas}
            canvaVerificationEmpState={setVerificationEmpCanvas}
            canvaVerificationPreState={setVerificationPreCanvas}
            canvaVerificationEmpSBState={setVerificationEmpSBCanvas}
            formDataFunc={postFormData}
          />
        }
      />
      <Route
        path="/eligibilityverificationview"
        element={
          <EligibilityVerificationView
            dataString={formDataArr}
            // fomDataGetFunc={getFormData}
            formDataFunc={getFormData}
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
      <Route path="/login" element={<Login onLogin={onLoginClick} />} />
      <Route
        path="/register"
        element={<Register registerForm={onRegister} />}
      />
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route
        path="/stepform"
        element={
          <StepForm addCount={addStep} onStep2={eve => onStepForm(eve)} />
        }
      />
    </Routes>
  );
};

export default LapashaRoutes;
