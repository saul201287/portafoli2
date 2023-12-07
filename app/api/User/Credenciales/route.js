import { NextResponse } from "next/server";
const conect = require("@/libs/conect");

export async function POST(request, { params }) {
  const body = await request.json();
  console.log(body);
  try {
    const result = await new Promise((resolve, reject) => {
      conect.query(
        "INSERT INTO credenciales(id, usuario, contraseña) VALUES (?, ?, ?)",
        [0, body.email, body.password],
        (error, res) => {
          if (error) {
            reject(error);
          } else {
            resolve(res);
          }
        }
      );
    });
    console.log(result.insertId);
    return NextResponse.json(result.insertId);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ msg: error.message });
  }
}
