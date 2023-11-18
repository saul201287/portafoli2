import React from "react";
import "../../styles/Login/main.css";
import Image from "next/image";
import Login from "../../img/login.png";
import Engranajes from "../../img/engranajes.gif";

function Icons() {
  return (
    <div className="icons">
      <h1>Crea tu propio portafolio</h1>
      <Image src={Engranajes} />
      <Image src={Login} />
    </div>
  );
}

export default Icons;
