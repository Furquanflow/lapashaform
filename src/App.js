import React, { useState } from "react";
import LapashaRoutes from "./routes/LapashaRoutes";
import "./App.css";
import { data } from "./obj/Obj";
const App = () => {
  const [lapashaData, setLapashaData] = useState(data);

  const formValueCahnge = (e) => {
    let { name, value } = e.target;
    setLapashaData({ ...lapashaData, [name]: value });
  };

  return (
    <>
      <LapashaRoutes onForm={formValueCahnge} formData={lapashaData} />
    </>
  );
};

export default App;
