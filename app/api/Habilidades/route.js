import { NextResponse } from "next/server";
const conect = require("@/libs/conect");

export async function POST(request, { params }) {
  const body = await request.json();
  console.log(body);

  try {
    await new Promise((resolve, reject) => {
      conect.query(
        "INSERT INTO habilidades(id, habilidad1, habilidad2, habilidad3,habilidad4,habilidad5) VALUES (?, ?, ?, ?, ?, ?)",
        [
          0,
          body.habilidad1,
          body.habilidad2,
          body.habilidad3,
          body.habilidad4,
          body.habilidad5,
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
    return NextResponse.json({ msg: "Datos insertados correctamente" });
  } catch (error) {
    return NextResponse.json({ msg: error.message });
  }
}
export async function GET(request, { params }) {
  /* try {
      const result = await new Promise((resolve, reject) => {
        conect.query("SELECT * FROM usuarios", (error, res) => {
          if (error) {
            reject(error);
          } else {
            resolve(res);
          }
        });
      });
  
      return NextResponse.json(result);
    } catch (error) {
      console.error("Error:", error);
      return NextResponse.json({ error: "Error al obtener datos" });
    } */
  return NextResponse.json({ error: "Error al obtener datos" });
}
