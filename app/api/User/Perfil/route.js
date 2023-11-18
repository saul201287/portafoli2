import { NextResponse } from "next/server";
const conect = require("@/libs/conect");
export async function POST(request, { params }) {
    const body = await request.json();
    console.log(body);
  try {
    const result = await new Promise((resolve, reject) => {
      conect.query(
        "INSERT INTO imagen(id, url) VALUES (?, ?)",
        [0,body],
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
    return NextResponse.json({ error: "Error al enviar datos" });
  }
}
export async function GET(request, { params }) {
    try {
      const result = await new Promise((resolve, reject) => {
        conect.query("SELECT * FROM imagen", (error, res) => {
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
    }
  }
  
