"use client";
import React from "react";
import Pdf from "@/app/components/Cvview/Pdf";
import { PDFViewer } from "@react-pdf/renderer";

function Cvview() {
  return (
    <div style={{ margin: "0", padding: "0" }}>
      <PDFViewer style={{ width: "100%", height: "100vh", margin: "0" }}>
        <Pdf />
      </PDFViewer>
    </div>
  );
}

export default Cvview;
