import React from "react";
import axios from "axios";
import { Button, Grid } from "@mui/material";

const baseUrl = "http://localhost:8000";

const GeneratePDFButton = ({ formData }) => {
    const handleGeneratePDF = async () => {
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('data', JSON.stringify(formData));
            const response = await axios.post(`${baseUrl}/generate-and-send-pdf`, formDataToSend);
            if (response.status === 200) {
                alert('PDF generated and sent successfully.');
                window.open(`${baseUrl}/download-pdf`, '_blank');
            } else {
                alert('Failed to generate and send PDF.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Grid sx={{ float: "right" }}>
            <Button variant="contained" className="save-btn" onClick={handleGeneratePDF}>Generate PDF</Button>
        </Grid>
    );
};

export default GeneratePDFButton;
