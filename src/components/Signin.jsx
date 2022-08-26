import React from "react";
import { useState } from "react";
import icon_google from "../assets/images/icon_google.png";
import Axios from "axios";

import "./Form.css";

export default function Signin() {
  const url = "http://localhost:3001/usuario";
  const [login, setLogin] = useState({});

  function submit(event) {
    event.preventDefault();
    console.log(url + `?email=${login.email}`);
    Axios.get(url + `?email=${login.email}`)
    .then((response) => {
      console.log(response.data.length);
      if (response.data.length === 1) { //Se o e-mail existir e a senha informada estiver correta
        if (response.data[0].senha === login.senha){
          alert("Login realizado com sucesso!");
          setLogin({});
        } else {
          alert("Email ou senha incorretos!");
        }
      } else {
        alert("Email ou senha incorretos!");
      }
    })
    .catch((error) => {console.log(error);})
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
            <span className="span">
              <a href="/">Esqueceu a senha?</a>
            </span>
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input className="custom-control-input"
                type="checkbox"
              />
              <label className="custom-control-label form-group" >
                Lembrar de mim
              </label>
            </div>
          </div>

          <div className="col text-center form-group">
            <button 
            type="submit" 
            className="btn btn-dark btn-lg btn-block button">
              Entrar
            </button>
          </div>

          <h4 className="col text-center">ou</h4>

          <div className="col text-center form-group">
            <button type="button" className="btn btn-light btn-lg btn-block button">
              <img alt="Entrar com o Google" src={icon_google} width="35" height="35" />
              Entrar com o Google
            </button>
          </div>
        </form>

        <small className="small">
          &copy; A Comida do Bebê, 2022. All rights reserved.
        </small>
      </div>
    </>
  );
};
