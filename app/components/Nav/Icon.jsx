"use client"
import React, {useState, useEffect} from "react";
import "../../styles/Nav/icon.css";
import Foto from "../CrearCuenta/Foto";

function Icon(props) {

  return (
    <div className="user">
      <Foto />
      <h3 className="name">{props.name}</h3>
    </div>
  );
}

export default Icon;
