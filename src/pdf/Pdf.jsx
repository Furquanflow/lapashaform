// import React, { useRef } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import { saveAs } from 'file-saver';

// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const MyComponent = () => {
//   const numPages = 64;
//   const pages = [];
//   const containerRef = useRef(null);

//   for (let i = 1; i <= numPages; i++) {
//     pages.push(
//       <Page key={i} pageNumber={i} width={300} renderAnnotationLayer={false} />
//     );
//   }

//   const generatePDF = async () => {
//     const container = containerRef.current;

//     if (!container) {
//       return;
//     }

//     const pdfElement = (
//       <Document>
//         {pages}
//       </Document>
//     );

//     // Use toBlob method on the PDF element to generate the blob
//     pdfElement.toBlob(async (blob) => {
//       // Use file-saver to save the blob as a PDF
//       saveAs(blob, 'document.pdf');
//     });
//   };

//   return (
//     <div>
//       <div ref={containerRef}></div>
//       <button onClick={generatePDF} className="button">
//         Generate PDF
//       </button>
//     </div>
//   );
// };

// export default MyComponent;
