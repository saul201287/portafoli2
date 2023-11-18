"use client"
import React from "react";
import Opciones from "@/app/components/Nav/Opciones";
import "@/app/styles/Nav/nav.css";
import SobreMi from "@/app/components/SobreMi/SobreMi";
function Nav() {
  
  return (
    <div>
      <Opciones />
      <SobreMi />
    </div>
  );
}

export default Nav;
