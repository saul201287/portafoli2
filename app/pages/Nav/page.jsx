"use client";
import React, { useEffect, useState } from "react";
import Opciones from "@/app/components/Nav/Opciones";
import "@/app/styles/Nav/nav.css";
import SobreMi from "@/app/components/SobreMi/SobreMi";
import Bienvenido from "@/app/components/Nav/Bienvenido";
import Habilidades from "@/app/components/Nav/Habilidades";
import Educacion from "@/app/components/Nav/Educacion";
import Experiencia from "@/app/components/Nav/Experiencia";
import { IoMdPrint } from "react-icons/io";
import { ImExit } from "react-icons/im";
import { useRouter } from "next/navigation";


function Nav() {
  const [info2, setinfo2] = useState([]);
  const [info, setinfo] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = JSON.parse(localStorage.getItem("Id"));
        await fetch(`/api/Informacion/${id}`, {
          method: "GET",
        }).then((data) => {
          data.json().then((data) => {
            setinfo(data.result2[0].sobremi);
            setinfo2(data.result[0]);
          });
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const exit = () => {
    localStorage.clear();
    router.push("/pages/Login")
  };
  const imprimir = () =>{
    router.push("/pages/Cvview")
  }
  return (
    <div style={{ display: "flex" }}>
      <Opciones />
      <div className="cont">
        <nav>
          <div className="iconos">
            <IoMdPrint onClick={imprimir} color="#ffff" className="cv" size={40} />
            <ImExit onClick={exit} color="#ffff" className="cv" size={40} />
          </div>
        </nav>
        <Bienvenido info2={info2} />
        <SobreMi info={info} />
        <Habilidades />
        <Educacion id="educacion" />
        <Experiencia />
      </div>
    </div>
  );
}

export default Nav;
