import React from "react";
import { BiLogIn } from "react-icons/bi";
import "@/app/styles/Nav/nav.css";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import Chamba from "@/app/img/chamba.gif"
import Image from "next/image";

function Bienvenido({ info2 }) {
  if (!info2 || info2 === undefined) {
    return null;
  }
  const { nombre, apellidos, edad } = info2;

  return (
    <div className="www">
    <div className="welcome">
      {nombre !== undefined ? (
        <Fade cascade duration={2500}>
          <AttentionSeeker effect="bounce">
            <h1>Bienvenido {nombre} </h1>
          </AttentionSeeker>
        </Fade>
      ) : (
        <> Cargando...</>
      )}
    </div>
    </div>
  );
}

export default Bienvenido;
