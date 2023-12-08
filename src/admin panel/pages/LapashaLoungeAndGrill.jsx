import React from "react";

//Local Components
import LapashaFormData from "../components/lapasha form data/LapashaFormData";

//Axios
import axios from "axios";

//Server Url
let baseUrl = "http://localhost:8000";

const LapashaLoungeAndGrill = () => {
  const [adminData, setAdminData] = React.useState([]);
  const getFormData = () => {
    axios
      .get(`${baseUrl}/loungeandgrilldata`)
      .then(({ data }) => {
        setAdminData(data);
      })
      .catch(error => {
        console.error("Error getting data:", error);
      });
  };

  React.useEffect(() => {
    getFormData();
  }, []);
  return (
    <LapashaFormData
      lapashaData={adminData}
      title={"Lapasha lounge And Grill"}
    />
  );
};

export default LapashaLoungeAndGrill;
