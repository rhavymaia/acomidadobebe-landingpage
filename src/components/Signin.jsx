import React from "react";
import { useState } from "react";
import icon_google from "../assets/images/icon_google.png";
import Axios from "axios";

import "./Form.css";

export default function Signin() {
  const url = "http://localhost:3001/login";
  const [login, setLogin] = useState({});

  function submit(event) {
    event.preventDefault();
    Axios.post(url, login)
    .then((r) =>{
      console.log(r);
      setLogin({
        email: "",
        senha: "",
      });
    })
    alert("Login realizado com sucesso!");
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLogin(values => ({ ...values, [name]: value }))
  }

  return (
    <>
      <div className="outer">
        <form className="form"
        onSubmit={(event) => submit(event)}
        >
          <h3 className="col text-center">Sign in</h3>
          <div className="form-group">
            <label>E-mail</label>
            <input
            required
            type="email" 
            name="email"
            className="form-control" 
            value={login.email || ''} 
            onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Senha</label>
            <input
            required 
            type="password" 
            name='senha'
            className="form-control" 
            value={login.senha || ''}
            onChange={handleChange} />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label form-group" htmlFor="customCheck1">
                Lembrar de mim
              </label>
              <span style={{ float: "right" }}>
                <a href="/">Esqueceu a senha?</a>
              </span>
            </div>
          </div>

          <div className="col text-center form-group">
            <button 
            type="submit" 
            className="btn btn-dark btn-lg btn-block">
              Entrar
            </button>
          </div>

          <h4 className="col text-center">ou</h4>

          <div className="col text-center form-group">
            <button type="button" className="btn btn-light btn-lg btn-block">
              <img alt="" src={icon_google} width="35" height="35" />
              Entrar com o Google
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
