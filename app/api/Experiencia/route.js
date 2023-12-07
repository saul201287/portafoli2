import { NextResponse } from "next/server";
const conect = require("@/libs/conect");

export async function POST(request, { params }) {
  const body = await request.json();
  console.log(body);
  try {
    await new Promise((resolve, reject) => {
      conect.query(
        "INSERT INTO experiencia(id, experiencia) VALUES (?, ?)",
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
