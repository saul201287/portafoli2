"use client";
import React, { useState } from "react";
import "@/app/styles/CrearCuenta/main.css";
function Formulario(props) {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [edad, setEdad] = useState();
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState();
  const [sitio, setSitio] = useState("");

  const capturarNombre = (e) => {
    setNombre(e.target.value);
  };
  const capturarApellido = (e) => {
    setApellidos(e.target.value);
  };
  const capturarEdad = (e) => {
    setEdad(e.target.value);
  };
  const capturarCorreo = (e) => {
    setCorreo(e.target.value);
  };
  const capturarTelfono = (e) => {
    setTelefono(e.target.value);
  };
  const capturarSitio = (e) => {
    setSitio(e.target.value);
  };
  const handleValues = (event) => {
    event.preventDefault();

    props.setValores({
      nombre: nombre,
      apellidos: apellidos,
      edad: edad,
      correo: correo,
      telefono: telefono,
      sitio: sitio,
    });
    setApellidos("")
    setCorreo("")
    setEdad("")
    setNombre("")
    setSitio("")
    setTelefono("")
  };
  return (
    <form
      onSubmit={handleValues}
      method="post"
      style={{ width: "100%", textAlign: "center", display: "contents" }}>
      <div style={{ display: "flex", marginBottom: "10px", width: "80%" }}>
        <div className="formulario">
          <h2>Información personal</h2>
          <label htmlFor="name">Ingrese su nombre</label>
          <input
            required
            type="text"
            value={nombre}
            onChange={capturarNombre}
            name="name"
            placeholder="Nombre"
          />
          <label htmlFor="lastname">Ingrese sus apellidos</label>
          <input
            required
            type="text"
            value={apellidos}
            onChange={capturarApellido}
            name="lastname"
            placeholder="Apellidos"
          />
          <label htmlFor="edad">Ingrese su edad</label>
          <input
            required
            type="number"
            name="edad"
            value={edad}
            onChange={capturarEdad}
            placeholder="Edad"
            min={18}
            max={65}
          />
        </div>
        <div className="formulario">
          <h2>Contacto</h2>
          <label htmlFor="correo">Ingrese su correo</label>
          <input
            required
            type="email"
            value={correo}
            onChange={capturarCorreo}
            name="correo"
            placeholder="Correo"
          />
          <label htmlFor="telefono">Ingrese su numero celular</label>
          <input
            required
            type="tel"
            value={telefono}
            onChange={capturarTelfono}
            name="telefono"
            placeholder="Telefono"
          />
          <label htmlFor="sitio">Ingrese algun sitio o bloc si posee uno</label>
          <input
            type="text"
            name="sitio"
            value={sitio}
            onChange={capturarSitio}
            placeholder="Sitio"
          />
        </div>
      </div>
      <button type="submit" className="btn3 btn">
        Enviar datos
      </button>
    </form>
  );
}

export default Formulario;
