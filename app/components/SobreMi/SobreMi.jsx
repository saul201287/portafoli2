import React, { useEffect, useState } from "react";
import "@/app/styles/SobreMi/main.css"

function SobreMi(props) {
  
  return (
    <div className="me">
      <h1>Sobre mí</h1>
      <div className="text">
      <p>{props.info}</p>
      </div>
    </div>
  );
}

export default SobreMi;
