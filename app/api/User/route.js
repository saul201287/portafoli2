import { NextResponse } from "next/server";
const conect = require("@/libs/conect");

export async function POST(request, { params }) {
  const body = await request.json();
  console.log(body);
  try {
    await insertarUsuario(body);
    await insertarContacto(body);

    return NextResponse.json({ msg: "Datos insertados correctamente" });
  } catch (error) {
    return NextResponse.json({ msg: error.message });
  }
}

async function insertarUsuario(body) {
  return new Promise((resolve, reject) => {
    conect.query(
      "INSERT INTO usuarios(id, nombre, apellidos, edad) VALUES (?, ?, ?, ?)",
      [0, body.nombre, body.apellidos, body.edad],
      (error, res) => {
        if (error) {
          reject(error);
        } else {
          resolve(res);
        }
      }
    );
  });
}

async function insertarContacto(body) {
  return new Promise((resolve, reject) => {
    conect.query(
      "INSERT INTO contacto(id, correo, telefono, sitio) VALUES (?, ?, ?, ?)",
      [0, body.correo, body.telefono, body.sitio],
      (error, res) => {
        if (error) {
          reject(error);
        } else {
          resolve(res);
        }
      }
    );
  });
}

export async function GET(request, { params }) {
  try {
    const result = await new Promise((resolve, reject) => {
      conect.query(
        "SELECT * FROM credenciales WHERE usuario = ? AND contraseña = ?",
        [params.user, params.password],
        (error, res) => {
          if (error) {
            reject(error);
          } else {
            resolve(res);
          }
        }
      );
    });
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Error al obtener datos" });
  }
}
