import { NextResponse } from "next/server";
const conect = require("@/libs/conect");

export async function GET(request, { params }) {
  //console.log(params);
  try {
    const result = await new Promise((resolve, reject) => {
      conect.query(
        "SELECT * FROM credenciales WHERE usuario = ? AND contraseña = ?",
        [params.user, params.id],
        (error, res) => {
          if (error) {
            reject(error);
          } else {
            resolve(res);
          }
        }
      );
    });
    if (result && result.length > 0) {
      console.log(result);
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
