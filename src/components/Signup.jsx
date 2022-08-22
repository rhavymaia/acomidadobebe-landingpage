import React from "react";
import { useState } from "react";
import Axios from "axios";
import icon_google from "../assets/images/icon_google.png";
import "./Form.css"

export default function Signup() {

  const url = "http://localhost:3001/usuario";
  const [signup, setSignup] = useState({});

  function submit(event) {
    event.preventDefault();
    Axios.post(url, signup)
    .then((r) =>{
      console.log(r);
      setSignup({
        nome: "",
        sobrenome: "",
        nascimento: "",
        email: "",
        senha: "",
      });
    })
    alert("Cadastro realizado com sucesso!");
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSignup(values => ({ ...values, [name]: value }))
  }
  return (
    <>
      <div className="outer">
        <form onSubmit={(event) => submit(event)}
        className="form">
          <h3 className="col text-center">Cadastrar</h3>

          <div className="form-group">
            <label>Nome</label>
            <input
            required
            type="text" 
            name="nome"
            className="form-control"
            value={signup.nome || ''} 
            onChange={handleChange}/>
          </div>

          <div className="form-group">
            <label>Sobrenome</label>
            <input 
            required
            type="text" 
            name="sobrenome"
            className="form-control"
            value={signup.sobrenome || ''} 
            onChange={handleChange}/>
          </div>

          <div className="form-group">
            <label>Nascimento</label>
            <input 
            required
            type="date" 
            name="nascimento"
            className="form-control"
            value={signup.nascimento || ''} 
            onChange={handleChange}/>
          </div>

          <div className="form-group">
            <label>E-mail</label>
            <input 
            required
            type="email" 
            name="email"
            className="form-control"
            value={signup.email || ''} 
            onChange={handleChange}/>
          </div>

          <div className="form-group">
            <label>Senha</label>
            <input 
            required
            type="password" 
            name="senha"
            className="form-control"
            value={signup.senha || ''} 
            onChange={handleChange}/>
          </div>

          <div className="col text-center form-group">
            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Register
            </button>
          </div>

          <div className="col text-center form-group">
            <button type="button" className="btn btn-light btn-lg btn-block">
              <img alt="" src={icon_google} width="35" height="35" />
              Cadastrar com o Google
            </button>
          </div>

          <p className="forgot-password text-right">
            Já possui conta? <a href="/signin">Log in</a>
          </p>
        </form>
      </div>
    </>
  );
};
