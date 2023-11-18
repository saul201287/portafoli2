import React from "react";
import Image from "next/image";
import Animacion from "@/app/img/Lap.gif";
import "@/app/styles/CrearCuenta/main.css";

function Pregunta() {
  return (
    <div className="informacion">
      <div>
        <Image className="lap" src={Animacion} width={600} height={400} alt="Ladtop" />
        <h2>Te haremos unas preguntas para empezar a crear tu portafolio </h2>
          </div>
    </div>
  );
}

export default Pregunta;
