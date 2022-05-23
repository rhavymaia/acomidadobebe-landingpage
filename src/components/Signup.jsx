import React from "react";
import "./Form.css"
import icon_google from "../assets/images/icon_google.png";

const Signup = () =>{
    return (
        <div className="outer">
            <form className="form">
                <h3>Register</h3>

                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Sobrenome</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="form-group">
                    <label>E-mail</label>
                    <input type="email" className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Senha</label>
                    <input type="password" className="form-control"/>
                </div>

                <div className="col text-center">
                    <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                </div>
                <p className="forgot-password text-right">
                    Já possui conta? <a href="/sign-in">Log in</a>
                </p>

                <div className="col text-center">
                    <button type="button" className="btn btn-light btn-lg btn-block">
                    <img
                    alt=""
                    src={icon_google}
                    width="35"height="35"/>
                    Entrar com o Google
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Signup;