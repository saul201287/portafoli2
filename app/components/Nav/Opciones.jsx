"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "../../styles/Nav/nav.css";
import Icon from "./Icon";
function Opciones() {
  const [name, setName] = useState([]);
  const [usuario, setUsuario] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = JSON.parse(localStorage.getItem("Id"));
        const nombre = await fetch(`/api/Informacion/${id}`, {
          method: "GET",
        });
        const result = await nombre.json();
        console.log(result.data[0]);
        setName(result.data[0].nombre + " " + result.data[0].apellidos);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(); 
  }, []);
  console.log(name);
  /*     const user = JSON.parse(localStorage.getItem("Usuario"))
   */
  return (
    <div className="nav">
      <Icon name={name} />
      <ul className="opciones">
        <Link href="../components/Bienvenido.jsx">
          <li style={{ borderTop: "solid 1px bisque" }}>Acerca de mi</li>
        </Link>
        <li>Habilidades</li>
        <li>Educación</li>
        <li>Experiencia laboral</li>
      </ul>
    </div>
  );
}

export default Opciones;
