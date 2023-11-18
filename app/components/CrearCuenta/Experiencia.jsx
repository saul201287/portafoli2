"use client";
import React, { useState } from "react";
import Image from "next/image";
import Empleo from "@/app/img/empleo.png";
import Empleo2 from "@/app/img/empleo2.png";
import { CiSquarePlus } from "react-icons/ci";

function Experiencia(props) {
  const [experiencia, setExperiencia] = useState([""]);

  const more = () => {
    setExperiencia([...experiencia, ""]);
  };

  const handleExperienciaChange = (index, value) => {
    const nuevasExperiencias = [...experiencia];
    nuevasExperiencias[index] = value;
    setExperiencia(nuevasExperiencias);
  };
  const envio = (event) => {
    event.preventDefault();
    let exp ="";
    for (let i = 0; i < experiencia.length; i++) {
        exp += "- "+experiencia[i];
    }
    props.setValores4(exp);
  };

  return (
    <div className="expere">
      <Image src={Empleo} alt="empleo" width={300} height={280} />

      <form method="post" onSubmit={envio} className="exp">
        <h2>Experiencia laboral</h2>
        {experiencia.map((exp, i) => {
          return (
            <div key={i}>
              <textarea
                type="text"
                rows={4}
                cols={50} 
                style={{ resize: 'vertical' }}
                value={exp}
                placeholder="Ingrese su experiencia"
                onChange={(e) => handleExperienciaChange(i, e.target.value)}
              />
            </div>
          );
        })}
        <CiSquarePlus
          onClick={more}
          style={{ width: "50px", height: "50px" }}
        />
        <br />
        <button type="submit" className="btn4 btn">
          Enviar datos
        </button>
      </form>
      <Image src={Empleo2} alt="empleo2" width={300} height={280} />
    </div>
  );
}

export default Experiencia;
