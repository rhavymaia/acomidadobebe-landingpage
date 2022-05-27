import React from "react";
import icon_google from '../assets/images/icon_google.png';
import './Form.css'

import { Header } from "./Header";
import { Footer } from "./Footer";

export const Signin = () => {
    return (
        <>
        <Header />
        <div className="outer">
            <form className="form">
                <h3 className="col text-center">Sign in</h3>
                <div className="form-group">
                    <label>E-mail</label>
                    <input type="email" className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Senha</label>
                    <input type="password" className="form-control"/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Lembrar de mim</label>
                        <span
                        style={{'float':'right'}}>
                            <a href="#">Esqueceu a senha?</a>
                        </span>
                    </div>
                </div>

                <div className="col text-center">
                    <button type="submit" className="btn btn-dark btn-lg btn-block">Entrar</button>
                </div>

                <h4 className="col text-center">ou</h4>

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
        <Footer />
        </>
    );
}
