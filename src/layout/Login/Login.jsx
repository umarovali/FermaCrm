import React, { useRef, useState } from "react";
import Logo from "../../assets/images/ddds 1.svg";
import axios from "axios";
import useToken from "./store/useToken";

export default function Login() {
  const setToken = useToken((state) => state.setToken);
  const elLogin = useRef()
  const elPassword = useRef()

  const handleLogin = (evt) => {
    evt.preventDefault()
    axios.post("https://api.bbk.kg/sign-in", {
      phone_number: elLogin.current.value,
      password: elPassword.current.value
    }).then((res) => (setToken(res.data.data.token)))
      .catch(function (error) {
        console.log(`Произошло ошибка: ${error}`);
      });
  };

  return (
    <>
      <div className="login__wrapper">
        <div className="login__left">
          login: 996123456789
          <br />
          password: 1234567
        </div>

        <div className="login__right">
          <div className="login__block">
            <img src={Logo} alt="" />
            <h2>Войдите в свою учетную запись</h2>

            <form onSubmit={handleLogin}>
              <label>Логин</label>
              <input
                type="text"
                ref={elLogin}
              />
              <label>Пароль</label>
              <input
                type="password"
                ref={elPassword}
              />
              <button type="submit">Вход</button>
            </form>
            <p>
              У вас нет аккаунта? <span>Регистрация</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
