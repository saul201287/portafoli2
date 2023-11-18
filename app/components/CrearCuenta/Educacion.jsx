"use client";
import React, { useState } from "react";
import "@/app/styles/CrearCuenta/main.css";
import Image from "next/image";
import Edu from "@/app/img/edu.png";
import Edu2 from "@/app/img/edu2.png";

function Educacion(props) {
  const opciones = [
    "Ninguno",
    "Prescolar",
    "Primaria",
    "Secundaria",
    "Preparatoria",
    "Preparatoria Tecnica",
    "Licenciatura",
    "Maestria",
    "Doctorado",
  ];
  const [escolaridad, setescolaridad] = useState(opciones[0]);
  const [opc, setOpc] = useState(" ");
  const [profecion, setProfecion] = useState(" ");
  const [date, setDate] = useState(" ");
  const [date2, setDate2] = useState(" ");
  const [diploma, setDiploma] = useState(" ");

  const handleOpcion = (event) => {
    setOpc(event.target.value);
  };
  const handleChange = (event) => {
    setescolaridad(event.target.value);
  };

  const handleProfecion = (event) => {
    setProfecion(event.target.value);
  };
  const handleDate = (event) => {
    setDate(event.target.value);
  };
  const handleDate2 = (event) => {
    setDate2(event.target.value);
  };
  const handleDiploma = (event) => {
    setDiploma(event.target.value);
  };
  const envio = (event) => {
    event.preventDefault();
    props.setValores3({
      escolaridad: escolaridad,
      profecion: profecion,
      date: date,
      date2: date2,
      diploma: diploma,
    });
  };
  console.log(escolaridad, diploma, profecion, date, date2);
  return (
    <>
      <div className="Edu">
        <div>
          <Image src={Edu} alt="educacion" width={210} height={220} />
        </div>

        <form className="FormEdu" method="post" onSubmit={envio}>
          <div>
            <h2>Nivel de educación</h2>
            <label htmlFor="opciones" style={{ margin: "10px" }}>
              Selecciona el nivel de udacion maximo <br />
              alcanzado hasta ahora:
            </label>
            <br />
            <select
              className="opc"
              id="opciones"
              value={escolaridad}
              onChange={handleChange}>
              {opciones.map((opcion, index) => (
                <option key={index} value={opcion}>
                  {opcion}
                </option>
              ))}
            </select>
            <br />
          </div>
          {escolaridad === "Doctorado" ||
          escolaridad === "Maestria" ||
          escolaridad === "Licenciatura" ||
          escolaridad === "Preparatoria Tecnica" ? (
            <div className="infoEdu">
              <label htmlFor="input">
                Ingrese la fecha que comenzo y termino su {escolaridad}
              </label>
              <br />
              <input required type="date" value={date} onChange={handleDate} />
              <input
                required
                type="date"
                value={date2}
                onChange={handleDate2}
              />
              <br />
              <label htmlFor="input">Ingrese su profeción:</label>
              <input
                required
                type="text"
                value={profecion}
                onChange={handleProfecion}
                placeholder="Profeción"
              />
              <br />
              <label htmlFor="input">
                ¿Obtuvo algun reconocimiento o diploma?
              </label>
              <br />
              <label>
                <input
                  required
                  type="radio"
                  value="Si"
                  checked={opc === "Si"}
                  onChange={handleOpcion}
                />
                Si
              </label>
              <label>
                <input
                  required
                  type="radio"
                  value="No"
                  checked={opc === "No"}
                  onChange={handleOpcion}
                />
                No
              </label>
              {opc === "Si" ? (
                <>
                  <br />
                  <label htmlFor="">
                    Ingrese cual fue el reconoimiento o diploma:
                  </label>
                  <br />
                  <input
                    required
                    type="text"
                    value={diploma}
                    onChange={handleDiploma}
                  />
                </>
              ) : null}
            </div>
          ) : null}
          <button type="submit" className="btn4 btn">
            Enviar datos
          </button>
        </form>
        <Image src={Edu2} alt="educacion" width={210} height={220} />
      </div>
    </>
  );
}

export default Educacion;
