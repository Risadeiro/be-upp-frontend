/* Credits to FLORIN POP (Login/Register Design) */
import React, { useEffect } from 'react';
import './Login.css'

const Login = () => {
  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });
  }, [])

  return (
    <div className="body">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form className="formLogin" action="#">
            <h1 className="h1Login"> Criar Conta </h1>
            <input className="inputLogin" type="text" placeholder="Nome Completo" />
            <input className="inputLogin" type="email" placeholder="Email" />
            <input className="inputLogin" type="password" placeholder="Senha" />
            <button className="buttonLogin"> Registrar </button>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form className="formLogin" action="#">
            <h1 className="h1Login"> Login </h1>
            <input className="inputLogin" type="email" placeholder="Email" />
            <input className="inputLogin" type="password" placeholder="Senha" />
            <a href="#"> Esqueceu a senha? </a>
            <button className="buttonLogin"> Login </button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="h1Login"> Seja bem-vindo! </h1>
              <p className="pLogin"> Registre-se com seus dados pessoais </p>
              <h3> Já tem conta? </h3>
              <button className="buttonLogin ghost" id="signIn"> Login </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="h1Login"> Seja bem-vindo! </h1>
              <p className="pLogin"> Entre com seus dados de acesso por favor </p>
              <h3> Ainda não tem conta? </h3>
              <button className="buttonLogin ghost" id="signUp"> Registrar </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login