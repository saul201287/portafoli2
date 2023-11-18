import { NextResponse } from "next/server";
const conect = require("@/libs/conect");

export async function POST(request, { params }) {
  const body = await request.json();
  try {
    await new Promise((resolve, reject) => {
      conect.query(
        "INSERT INTO sobremi(id, sobremi) VALUES (?, ?)",
        [0, body],
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
  console.log(params);
  try {
    const result = await new Promise((resolve, reject) => {
      conect.query(
        "SELECT * FROM usuarios WHERE id = ? ",
        [params.id],
        (error, res) => {
          if (error) {
            reject(error);
          } else {
            resolve(res);
          }
        }
      );
    });
    console.log(result);
    if (result && result.length > 0) {
      return NextResponse.json({ success: true, data: result });
    } else {
      return NextResponse.json({
        success: false,
        message: "Usuario no encontrado",
      });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({
      success: false,
      message: "Error al obtener datos",
    });
  }
}
