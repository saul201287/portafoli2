"use client";
import React, { useState } from "react";
import Image from "next/image";
import formulario from "../../img/formulario.png";
import skills from "@/app/img/skills.png";

function Habilidades(props) {
  const [habilidades, setHabilidades] = useState(["", "", "", "", ""]);

  const capturarHabilidades = (index, event) => {
    const nuevasHabilidades = [...habilidades];
    nuevasHabilidades[index] = event.target.value;
    setHabilidades(nuevasHabilidades);
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    props.setValores2({
      habilidad1: habilidades[0],
      habilidad2: habilidades[1],
      habilidad3: habilidades[2],
      habilidad4: habilidades[3],
      habilidad5: habilidades[4],
    });
    console.log(habilidades);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      <Image src={formulario} alt="formulario" width={200} height={150} />
      <form method="post" className="SkillsForm" onSubmit={enviarDatos}>
        <div>
          <div>
            <h2>Habilidades</h2>
            <br />
            <label htmlFor="name">
              Ingrese 5 habilidades principales que posee
            </label>
            {habilidades.map((valor, index) => {
              return (
                <input
                  required
                  key={index}
                  type="text"
                  value={valor}
                  onChange={(event) => capturarHabilidades(index, event)}
                  name="name"
                  placeholder={`Habilidad ${index + 1}`}
                />
              );
            })}
          </div>
        </div>
        <button type="submit" className="btn4 btn">
          Enviar datos
        </button>
      </form>
      <Image src={skills} alt="formulario" width={200} height={200} />
    </div>
  );
}

export default Habilidades;
