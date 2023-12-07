import React, { useEffect, useState } from "react";
import "@/app/styles/Educacion/main.css";
import { Roll } from "react-awesome-reveal";

function Educacion() {
  const [educacion, setEducacion] = useState(undefined);
  useEffect(() => {
    const result = async () => {
      try {
        const id = JSON.parse(localStorage.getItem("Id"));
        const response = await fetch(`/api/Educacion/${id}`, {
          method: "GET",
        });
        const data = await response.json();
        setEducacion(data);
      } catch (error) {
        console.error(error);
      }
    };
    result();
  }, []);

  return (
    <div className="edu">
      <h1>Educación</h1>
      {educacion !== undefined ? (
        <Roll triggerOnce>
          <ul>
            <li>
              <strong> Escolaridad maxima: </strong> {educacion[0].escolaridad}
            </li>
            <li>
              <strong>Fecha de inicio:</strong> {educacion[0].fechainc}
            </li>
            <li>
              <strong>Fecha en que termino: </strong>
              {educacion[0].fechafin}
            </li>
            <li>
              <strong>Diploma:</strong> {educacion[0].diploma}
            </li>
            <li>
              <strong>Profesión: </strong>
              {educacion[0].profecion}
            </li>
          </ul>
        </Roll>
      ) : (
        "Cargando..."
      )}
    </div>
  );
}

export default Educacion;
