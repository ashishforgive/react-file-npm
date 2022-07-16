import React from "react";
import { render } from "react-dom";
import { jsPDF } from "jspdf";

const ConvertDocToPdf = ({text, filename}) => {

  const onClickConvert = () => {
    const doc = new jsPDF();
    doc.text(text?text:"Dummy Text", 10, 10);
    doc.save(filename? filename: 'download.pdf');
  }

  return (
    <>
        <button className="convert-pdf-btn" onClick={onClickConvert}>Convert to PDF</button>
    </>
  );
};

export default ConvertDocToPdf;
