import { NextResponse } from "next/server";
const conect = require("@/libs/conect");

export async function GET(request, { params }) {
  try {
      const result = await new Promise((resolve, reject) => {
        conect.query("SELECT * FROM educacion where id = ?",[params.id], (error, res) => {
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
