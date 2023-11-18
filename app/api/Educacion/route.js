import { NextResponse } from "next/server";
const conect = require("@/libs/conect");

export async function POST(request, { params }) {
  const body = await request.json();
  try {
    const result = await new Promise((resolve, reject) => {
      conect.query(
        "INSERT INTO educacion(id, escolaridad, fechainc, fechafin, diploma, profecion) VALUES (?, ?, ?, ?, ?, ?)",
        [
          0,
          body.escolaridad,
          body.date,
          body.date2,
          body.diploma,
          body.profecion,
        ],
        (error, res) => {
          if (error) {
            reject(error);
          } else {
            resolve(res);
          }
        }
      );
    });
    return NextResponse.json("Datos enviados");
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Error al enviar los datos" });
  }
}
