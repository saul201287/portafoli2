import { NextResponse } from "next/server";
const conect = require("@/libs/conect");

export async function GET(request, { params }) {
  try {
    const result = await nombre(params);
    const result2 = await info(params);
    const result3 = await habilidades(params);
    return NextResponse.json({ result, result2, result3 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({
      success: false,
      message: "Error al obtener datos",
    });
  }
}

async function nombre(params) {
  return new Promise((resolve, reject) => {
    conect.query(
      "SELECT * FROM usuarios WHERE id =? ",
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
}

async function info(params) {
  return new Promise((resolve, reject) => {
    conect.query(
      "SELECT * FROM sobremi WHERE id =? ",
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
}
async function habilidades(params) {
  return new Promise((resolve, reject) => {
    conect.query(
      "SELECT * FROM habilidades where id = ?",
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
}
