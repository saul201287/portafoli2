import React, { useEffect, useState } from "react";
import "@/app/styles/SobreMi/main.css";
import { Fade } from "react-awesome-reveal";

function SobreMi(props) {
  return (
    <div className="me">
      {props.info  ? (
        <Fade triggerOnce>
          <h1>Sobre mí</h1>
          <div className="text" style={{ marginLeft: "150px" }}>
            <p>{props.info}</p>
          </div>
        </Fade>
      ) : (
        <>Cargando...</>
      )}
    </div>
  );
}

export default SobreMi;
