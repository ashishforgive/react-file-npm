import React from "react";
import { render } from "react-dom";
import { jsPDF } from "jspdf";

const ConvertDocToPdf = (text, filename) => {

  const onClickConvert = () => {
    const doc = new jsPDF();
    doc.text(text, 10, 10);
    doc.save(filename+".pdf");
  };

  return (
    <>
        <button onClick={onClickConvert}>Convert to PDF</button>
    </>
  );
};

export default ConvertDocToPdf;
