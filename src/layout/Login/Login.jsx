import React from "react";
import Logo from "../../assets/images/ddds 1.svg";

export default function Login() {
  return (
    <>
      <div className="login__wrapper">



        <div className="login__left"></div>



        <div className="login__right">
          <div className="login__block">
            <img src={Logo} alt="" />
            <h2>Войдите в свою учетную запись</h2>

            <form>
              <label>Логин</label>
              <input type="text" />
              <label>Логин</label>
              <input type="text" />
              <button>Вход</button>
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
