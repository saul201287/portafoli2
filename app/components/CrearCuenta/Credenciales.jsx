import React, { useState } from "react";
import Swal from "sweetalert2";

function Credenciales(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handlePassword2 = (event) => {
    setPassword2(event.target.value);
  };

  const envio = (event) => {
    event.preventDefault();
    if (password !== password2) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Las contraseñas no coinciden",
      });
    } else {
      props.setValores6({ email:email, password:password });
    }
  };

  return (
    <form method="post" onSubmit={envio} className="datos">
      <h1>Credenciales</h1>
      <label htmlFor="user">Ingrese un usuario:</label>
      <input required type="text" name="user" value={email} onChange={handleEmail} />
      <label htmlFor="pass">Ingrese una contraseña segura</label>
      <input required
        type="password"
        name="pass"
        value={password}
        onChange={handlePassword}
      />
      <label htmlFor="passconf">Ingrese una contraseña segura</label>
      <input required
        type="password"
        name="passconf"
        value={password2}
        onChange={handlePassword2}
      />
      {password !== password2 ? <span>La contraseña no coincide</span> : null}
      <br />
      <button type="submit" className="btn4 btn">
        Enviar datos
      </button>
    </form>
  );
}

export default Credenciales;
