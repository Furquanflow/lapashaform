import React from "react";
import axios from "axios";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const baseUrl = "https://lapasha-server.vercel.app";

const GeneratePDFButton = ({ formData }) => {

    let navigate = useNavigate()
    const handleGeneratePDF = async () => {
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('data', JSON.stringify(formData));
            const response = await axios.post(`${baseUrl}/generate-and-send-pdf`, formDataToSend);
            if (response.data && response.data.pdfPath) {
                alert('PDF generated and sent successfully.');
                window.open(`${baseUrl}/download-pdf`, '_blank');
                navigate("/stepform")
            } else {
                alert('Failed to generate and send PDF.');
            }
        } catch (error) {
            console.error('Error:', error);
            console.log("Hello");
        }
    };

    return (
        <Grid sx={{ float: "right" }}>
            <Button variant="contained" className="save-btn" onClick={handleGeneratePDF}>Generate PDF</Button>
        </Grid>
    );
};

export default GeneratePDFButton;
