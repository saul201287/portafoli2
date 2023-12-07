"use client";
import React, { useState } from "react";
import "../../styles/Login/main.css";
import Link from "next/link";
import Image from "next/image";
import portafolio from "../../img/portfolio.png";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

function Body() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const capturarUser = (e) => {
    setUser(e.target.value);
  };
  const capturarPassword = (e) => {
    setPassword(e.target.value);
  };

  const validarDatos = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/User/${user}/${password}`, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if(data.success === true) {
        if (user === data.data[0].usuario && password === data.data[0].contraseña) {
          localStorage.setItem("Usuario", JSON.stringify(data.data[0].usuario));
          localStorage.setItem("Id", JSON.stringify(data.data[0].id));
          router.push("/pages/Nav")
        } else {
          Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Credenciales incorrectas",
          });
        }
      }else{
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "Credenciales incorrectas",
        });
        setUser("");
        setPassword("");
      }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="body">
      <form className="formu" onSubmit={validarDatos} method="post">
        <h1 style={{ marginTop: "-70px" }}>Portafolio CMS</h1>
        <Image
          src={portafolio}
          width={100}
          height={100}
          style={{ marginTop: "-100px" }}
        />
        <div className="divicion" style={{ textAlign: "center" }}>
          Bienvenido
        </div>
        <div className="info">
          <label htmlFor="user">Usuario</label>
          <br />
          <input
            required
            type="text"
            name="user"
            value={user}
            onChange={capturarUser}
            placeholder="usuario"
          />
          <br />
          <label htmlFor="passsword">Contraseña</label>
          <br />
          <input
            required
            type="password"
            name="password"
            minLength={6}
            value={password}
            onChange={capturarPassword}
            placeholder="contraseña"
          />
          <br />
          <div className="buton">
            <button type="submit">Iniciar</button>
            <br />
            <br />
            <Link href="/pages/CrearCuenta">
              <span>Crear cuenta</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Body;
