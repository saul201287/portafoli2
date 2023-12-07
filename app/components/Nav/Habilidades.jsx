import React, { useEffect, useState } from "react";
import "@/app/styles/Nav/nav.css";
import { Fade } from "react-awesome-reveal";

const Habilidades = () => {
  const [habilidades, setHabilidades] = useState([]);

  useEffect(() => {
    const result = async () => {
      try {
        const id = JSON.parse(localStorage.getItem("Id"));
        const response = await fetch(`/api/Habilidades/${id}`, {
          method: "GET",
        });
        const data = await response.json();
        setHabilidades(data);
      } catch (error) {
        console.error(error);
      }
    };
    result();
  }, []);

  return (
    <div className="habilidades">
      <h1>Habilidades</h1>

      <div className="lista">
        <ul>
          {habilidades.length > 0 ? (
            habilidades.map((habilidad, i) => (
              <>
                <Fade cascade damping={0.2} triggerOnce>
                  <li key={i}>
                    <strong>{`Habilidad ${i + 1}: `}</strong>
                    {habilidad.habilidad1}
                  </li>
                  <li key={i}>
                    <strong>{`Habilidad ${i + 2}: `}</strong>
                    {habilidad.habilidad2}
                  </li>
                  <li key={i}>
                    <strong>{`Habilidad ${i + 3}: `}</strong>
                    {habilidad.habilidad3}
                  </li>{" "}
                  <li key={i}>
                    <strong>{`Habilidad ${i + 4}: `}</strong>
                    {habilidad.habilidad4}
                  </li>{" "}
                  <li key={i}>
                    <strong>{`Habilidad ${i + 5}: `}</strong>
                    {habilidad.habilidad5}
                  </li>
                </Fade>
              </>
            ))
          ) : (
            <li>Cargando habilidades...</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Habilidades;
