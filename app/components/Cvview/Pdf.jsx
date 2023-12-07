"use client";
import { Document, Text, Page, View } from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";

function Pdf() {
  const [habilidades, sethabilidades] = useState([]);
  const [info2, setinfo2] = useState([]);
  const [info, setinfo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = JSON.parse(localStorage.getItem("Id"));
        await fetch(`/api/pdf/${id}`, {
          method: "GET",
        }).then((data) => {
          data.json().then((data) => {
            setinfo(data.result2[0].sobremi);
            setinfo2(data.result[0]);
            sethabilidades(data.result3[0]);
          });
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(info, info2);

  return (
    <Document>
      <Page size="A4">
        <View
          style={{
            display: "flex",
            textAlign: "justify",
            margin: "20px",
            flexDirection: "column",
          }}>
          <View style={{ marginBottom: "15px" }}>
            <Text>Nombre: {info2.nombre + " " + info2.apellidos} </Text>
            <Text>Edad: {info2.edad} </Text>
          </View>
          <View>
            <Text>Sobre mi</Text>
            <Text>{info}</Text>
          </View>
          <View>
            {habilidades.length > 0 ? (
              habilidades.map((habilidad, i) => (
                <>
                  <Text key={i}>
                    <strong>{`Habilidad ${i + 1}: `}</strong>
                    {habilidad.habilidad1}
                  </Text>
                  <Text key={i}>
                    <strong>{`Habilidad ${i + 2}: `}</strong>
                    {habilidad.habilidad2}
                  </Text>
                  <Text key={i}>
                    <strong>{`Habilidad ${i + 3}: `}</strong>
                    {habilidad.habilidad3}
                  </Text>{" "}
                  <Text key={i}>
                    <strong>{`Habilidad ${i + 4}: `}</strong>
                    {habilidad.habilidad4}
                  </Text>{" "}
                  <Text key={i}>
                    <strong>{`Habilidad ${i + 5}: `}</strong>
                    {habilidad.habilidad5}
                  </Text>
                </>
              ))
            ) : (
              <Text>Cargando habilidades...</Text>
            )}
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default Pdf;
