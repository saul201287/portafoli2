import React, { useState, useEffect } from "react";
import "@/app/styles/Nav/nav.css";

function Experiencia() {
  const [experiencia, setExperiencia] = useState(undefined);
  useEffect(() => {
    const result = async () => {
      try {
        const id = JSON.parse(localStorage.getItem("Id"));
        const response = await fetch(`/api/Experiencia/${id}`, {
          method: "GET",
        });
        const data = await response.json();
        const datos = data[0].experiencia.split("-");
        setExperiencia(datos.filter((valor) => valor !== ""));
      } catch (error) {
        console.error(error);
      }
    };
    result();
  }, []);
  console.log(experiencia);
  return (
    <div className="explab">
      <h1>Experiencia Laboral</h1>
      <ul>
        {experiencia !== undefined
          ? experiencia.map((esp, i) => (
              <>
                <li key={i} value={esp}>
                  {i + 1}.-{esp}.
                </li>
              </>
            ))
          : "Cargando..."}
      </ul>
    </div>
  );
}

export default Experiencia;
