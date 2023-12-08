import React from "react";

//Local Components
import LapashaFormData from "../components/lapasha form data/LapashaFormData";

//Axios Library
import axios from "axios";

//Server Url
let baseUrl = "http://localhost:8000";

const NaraCafe = () => {
  const [naraAdminData, setNaraAdminData] = React.useState([]);
  const getFormData = () => {
    axios
      .get(`${baseUrl}/naracafedataPost`)
      .then(({ data }) => {
        setNaraAdminData(data);
      })
      .catch(error => {
        console.error("Error getting data:", error);
      });
  };

  React.useEffect(() => {
    getFormData();
  }, []);
  return <LapashaFormData lapashaData={naraAdminData} title={"Nara Cafe"} />;
};

export default NaraCafe;
