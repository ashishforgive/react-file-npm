import React from "react";
import { render } from "react-dom";
import { jsPDF } from "jspdf";

const ConvertDocToPdf = (text, fileName) => {

  const onClickConvert = () => {
    const doc = new jsPDF();
    doc.text(text, 10, 10);
    doc.save(fileName+".pdf");
  };

  return (
    <>
        <button onClick={onClickConvert}>Convert to PDF</button>
    </>
  );
};

export default ConvertDocToPdf;
