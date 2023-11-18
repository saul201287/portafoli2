import React, { useState } from "react";

function SobreMi(props) {
    const [sobremi, setSobremi] = useState("")

    const handleSobremiChange = (e) => {
        setSobremi(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.setValores5(sobremi);
    }
    console.log(sobremi);
  return (
    <div className="aboutmy">
      <form className="my" method="post" onSubmit={handleSubmit}>
      <h1>Sobre mi</h1>
        <textarea
          type="text"
          rows={8}
          cols={50}
          value={sobremi}
          onChange={(event) =>handleSobremiChange(event)}
          style={{ resize: "vertical" }}
          placeholder="Ingrese cosas rrelevantes sobre usted"
        />
        <button type="submit" className="btn3 btn">
          Enviar datos
        </button>
      </form>
    </div>
  );
}

export default SobreMi;
