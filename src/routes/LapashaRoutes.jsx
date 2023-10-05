import React from "react";
import EligibilityVerification from "../pages/EligibilityVerification";
import AcceptableDocuments from "../pages/AcceptableDocuments";
import SupplementA from "../pages/SupplementA";
import SupplementB from "../pages/SupplementB";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const LapashaRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EligibilityVerification />} />
        <Route path="/acceptabledocuments" element={<AcceptableDocuments />} />
        <Route path="/supplementa" element={<SupplementA />} />
        <Route path="/supplementb" element={<SupplementB />} />
      </Routes>
    </BrowserRouter>
  );
};

export default LapashaRoutes;
