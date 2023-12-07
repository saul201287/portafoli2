"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../../styles/Nav/nav.css";
import Icon from "./Icon";
function Opciones() {
  const [name, setName] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = JSON.parse(localStorage.getItem("Id"));
        const todo = await fetch(`/api/Informacion/${id}`, {
          method: "GET",
        });
        const result = await todo.json()
        setName(result.result[0].nombre + " " + result.result[0].apellidos);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(); 
  }, []);

  return (
    <div className="barra">
    <div className="nav">
      <Icon name={name} />
      <ul className="opciones">
        <Link to="educacion" smooth={true} duration={500}>
          <li style={{ borderTop: "solid 1px bisque" }}>Sobre de mi</li>
        </Link>
        <li>Habilidades</li>
        <li>Educación</li>
        <li>Experiencia laboral</li>
      </ul>
    </div>
    </div>
  );
}

export default Opciones;
