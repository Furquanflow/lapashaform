import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import EligibilityVerificationView from "../pages/EligibilityVerificationView";

function MainApp({ dataString }) {
  const contentRef = useRef(null);

  const handleGeneratePDF = () => {
    const totalContentHeight = 4000; // Adjust to the height of your content in pixels
    const pageHeight = 800; // Adjust to the desired page height in pixels

    const pageCount = Math.ceil(totalContentHeight / pageHeight);
    const pdf = new jsPDF("p", "pt", "a4"); // Adjust the page size and orientation as needed

    for (let i = 0; i < pageCount; i++) {
      if (i > 0) {
        pdf.addPage(); // Start a new page for each iteration (except the first)
      }

      const yOffset = i * pageHeight;
      const contentHeight = Math.min(totalContentHeight - yOffset, pageHeight);

      // Capture a portion of your content for the current page using html2canvas
      const contentToCapture = contentRef.current;
      contentToCapture.style.height = contentHeight + "px";

      html2canvas(contentToCapture)
        .then(canvas => {
          const imgDataUrl = canvas.toDataURL("image/jpeg", 1.0);
          pdf.addImage(imgDataUrl, "JPEG", 10, 10); // Adjust the coordinates as needed
          pdf.save("multi-page.pdf");
        })
        .catch(error => {
          console.error("Error capturing content:", error);
        });
    }
  };
  return (
    <div>
    <button onClick={handleGeneratePDF}>Convert to PDF</button>
      <div ref={contentRef}>
        <EligibilityVerificationView dataString={dataString} />
      </div>
    </div>
  );
}

export default MainApp;
