"use client";
import React, { useEffect, useState } from "react";
import Opciones from "@/app/components/Nav/Opciones";
import "@/app/styles/Nav/nav.css";
import SobreMi from "@/app/components/SobreMi/SobreMi";
import Bienvenido from "@/app/components/Nav/Bienvenido";
function Nav() {
  const [info2, setinfo2] = useState([]);
  const [info, setinfo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = JSON.parse(localStorage.getItem("Id"));
       await fetch(`/api/Informacion/${id}`, {
          method: "GET",
        }).then((data) =>{
           data.json().then((data) => {
            setinfo(data.result2[0].sobremi);
            setinfo2(data.result[0]);
          });
        })
       
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Opciones />
      <div className="cont">
        <Bienvenido info2={info2} />
        <SobreMi info={info} />
      </div>
    </div>
  );
}

export default Nav;
