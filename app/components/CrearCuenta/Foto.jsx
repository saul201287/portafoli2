import React, { useState, useEffect } from "react";
import imageCompression from "browser-image-compression";
import "@/app/styles/CrearCuenta/main.css";

function Foto(props) {
  const [imagen, setImagen] = useState(
    "data:image/webp;base64,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"
  );
  const [url, serUrl] = useState("");

  const handleImagenChange = async (event) => {
    const archivo = event.target.files[0];
    console.log(archivo);
    if (archivo) {
      const opcionesCompresion = {
        maxSizeMB: 1,
        maxWidthOrHeight: 800,
        useWebWorker: true,
      };

      try {
        const imagenComprimida = await imageCompression(
          archivo,
          opcionesCompresion
        );
        const compressedURL = URL.createObjectURL(imagenComprimida);
        setImagen(compressedURL);
        serUrl(imagenComprimida);
        console.log(compressedURL, imagen);
      } catch (error) {
        console.error("Error al comprimir la imagen:", error);
      }
    }
  };
  
  return (
    <div className="per">
      <div className="contenedor">
        <span className="perfil">
          {imagen && (
            <img src={imagen} alt="Vista previa" style={{ maxWidth: "100%" }} />
          )}
        </span>
      </div>
      <label htmlFor="input">Cambiar foto de perfil:</label>
      <input
        type="file"
        accept="image/*"
        placeholder="Seleccione una imagen"
        onChange={handleImagenChange}
      />
    </div>
  );
}

export default Foto;
