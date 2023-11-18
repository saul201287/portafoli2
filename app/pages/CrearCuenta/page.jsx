"use client";
import React, { useState } from "react";
import Pregunta from "@/app/components/CrearCuenta/Pregunta";
import Formulario from "@/app/components/CrearCuenta/Formulario";
import Link from "next/link";
import "@/app/styles/CrearCuenta/main.css";
import Swal from "sweetalert2";
import Habilidades from "@/app/components/CrearCuenta/Habilidades";
import Educacion from "@/app/components/CrearCuenta/Educacion";
import Experiencia from "@/app/components/CrearCuenta/Experiencia";
import SobreMi from "@/app/components/CrearCuenta/SobreMi";
import { useRouter } from "next/navigation";
import Credenciales from "@/app/components/CrearCuenta/Credenciales";

function CrearCuenta() {
  const [see, setSeee] = useState(false);
  const [see2, setSeee2] = useState(false);
  const [see3, setSeee3] = useState(false);
  const [see4, setSeee4] = useState(false);
  const [see5, setSeee5] = useState(false);
  const [see6, setSeee6] = useState(false);
  const [valor, setValor] = useState([]);
  const [valor2, setValor2] = useState([]);
  const [valor3, setValor3] = useState([]);
  const [valor4, setValor4] = useState([]);
  const [valor5, setValor5] = useState("");
  const [valor6, setValor6] = useState("");
  const router = useRouter();
  const setValores = async (value) => {
    setValor(value);
    try {
      const response = await fetch("/api/User", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(valor),
      });
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "OK",
          text: "Datos enviados",
        });
        const data = await response.json();
        console.log("Datos enviados:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const setValores2 = async (value2) => {
    setValor2(value2);
    try {
      const response = await fetch("/api/Habilidades", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(valor2),
      });
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "OK",
          text: "Datos enviados",
        });
        const data = await response.json();
        console.log("Datos enviados:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const setValores3 = async (value3) => {
    setValor3(value3);
    try {
      const response = await fetch("/api/Educacion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(valor3),
      });
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "OK",
          text: "Datos enviados",
        });
        const data = await response.json();
        console.log("Datos enviados:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const setValores4 = async (value4) => {
    setValor4(value4);
    try {
      const response = await fetch("/api/Experiencia", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(valor4),
      });
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "OK",
          text: "Datos enviados",
        });
        const data = await response.json();
        console.log("Datos enviados:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const setValores5 = async (value5) => {
    setValor5(value5);
    try {
      const response = await fetch("/api/SobreMi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(valor5),
      });
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "OK",
          text: "Datos enviados",
        });
        const data = await response.json();
        console.log("Datos enviados:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const setValores6 = async (value6) => {
    setValor6(value6);
    try {
      const response = await fetch("/api/User/Credenciales", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(valor6),
      });
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "OK",
          text: "Datos enviados",
        });
        const data = await response.json();
        console.log("Datos enviados:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const view = () => {
    setSeee(false);
    setSeee2(true);
    setSeee3(false);
    setSeee4(false);
    setSeee5(false);
    setSeee6(false);
  };
  const view2 = () => {
    console.log(valor);
    if (valor.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Envie la informacion requerida antes de pasar a la siguiente pagina",
      });
    } else {
      setSeee(false);
      setSeee2(false);
      setSeee3(true);
      setSeee4(false);
      setSeee5(false);
      setSeee6(false);
    }
  };
  const view3 = () => {
    if (valor2.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Envie la informacion requerida antes de pasar a la siguiente pagina",
      });
    } else {
      setSeee(false);
      setSeee2(false);
      setSeee3(false);
      setSeee4(true);
      setSeee5(false);
      setSeee6(false);
    }
  };
  const view4 = () => {
    setSeee(false);
    setSeee2(false);
    setSeee3(false);
    setSeee4(false);
    setSeee5(true);
    setSeee6(false);
  };
  const view5 = () => {
    setSeee(false);
    setSeee2(false);
    setSeee3(false);
    setSeee4(false);
    setSeee5(false);
    setSeee6(true);
  };

  const view6 = () => {
    setSeee(false);
    setSeee2(false);
    setSeee3(false);
    setSeee4(false);
    setSeee5(false);
    setSeee6(false);
  };
  const view7 = () => {
    if (valor6.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Envie la informacion requerida antes de pasar a la siguiente pagina",
      });
    } else {
      router.push("/pages/Nav");
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {see === true ? (
        <div>
          <Pregunta />
          <div className="pregunta">
            <Link href="/pages/Login">
              <button className="btn1">Regresar</button>
            </Link>
            <button onClick={view} className="btn2">
              Continuar
            </button>
          </div>
        </div>
      ) : see2 === true ? (
        <div className="form">
          <Formulario setValores={setValores} />
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={view6}
              className="btn1"
              style={{ marginRight: "50px" }}>
              Regresar
            </button>
            <button onClick={view2} className="btn2">
              Siguiente
            </button>
          </div>
        </div>
      ) : see3 === true ? (
        <div className="skils">
          <Habilidades setValores2={setValores2} />
          <div className="cont-btn">
            <button
              onClick={view}
              className="btn1"
              style={{ marginRight: "50px" }}>
              Regresar
            </button>
            <button onClick={view3} className="btn2">
              Siguiente
            </button>
          </div>
        </div>
      ) : see4 === true ? (
        <div className="educacion">
          <Educacion setValores3={setValores3} />
          <div className="cont-btn">
            <button
              onClick={view2}
              className="btn1"
              style={{ marginRight: "50px" }}>
              Regresar
            </button>
            <button onClick={view4} className="btn2">
              Siguiente
            </button>
          </div>
        </div>
      ) : see5 === true ? (
        <div className="experiencia">
          <Experiencia setValores4={setValores4} />
          <div className="cont-btn">
            <button
              onClick={view3}
              className="btn1"
              style={{ marginRight: "50px" }}>
              Regresar
            </button>
            <button onClick={view5} className="btn2">
              Siguiente
            </button>
          </div>
        </div>
      ) : see6 === true ? (
        <div className="about">
          <SobreMi setValores5={setValores5} />
          <div className="cont-btn">
            <button
              onClick={view4}
              className="btn1"
              style={{ marginRight: "50px" }}>
              Regresar
            </button>
            <button onClick={view6} className="btn2">
              Siguiente
            </button>
          </div>
        </div>
      ) : (
        <div className="registro">
          <Credenciales setValores6={setValores6} />
          <div className="cont-btn">
            <button
              onClick={view5}
              className="btn1"
              style={{ marginRight: "50px" }}>
              Regresar
            </button>
            <button onClick={view7} className="btn2">
              Terminar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CrearCuenta;
