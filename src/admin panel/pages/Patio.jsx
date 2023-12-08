import React from "react";

//Local Component
import LapashaFormData from "../components/lapasha form data/LapashaFormData";

//Axios Library
import axios from "axios";

//Server Url
let baseUrl = "http://localhost:8000";

const Patio = ({ lapashaData }) => {
  const [adminPatioData, setAdminPatioData] = React.useState([]);
  const getFormData = () => {
    axios
      .get(`${baseUrl}/formdata`)
      .then(({ data }) => {
        setAdminPatioData(data);
      })
      .catch(error => {
        console.error("Error getting data:", error);
      });
  };

  React.useEffect(() => {
    getFormData();
  }, []);
  return <LapashaFormData lapashaData={adminPatioData} title={"Patio"} />;
};

export default Patio;
