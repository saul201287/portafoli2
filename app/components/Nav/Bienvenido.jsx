import React from "react";
import { BiLogIn } from "react-icons/bi";

function Bienvenido({ info2 }) {
  if (!info2 || info2 === undefined) {
    return null;
  }
  const { nombre, apellidos, edad } = info2;

  return (
    <div className="welcome">
      <h1>Bienvenido {nombre} </h1>
    </div>
  );
}

export default Bienvenido;
