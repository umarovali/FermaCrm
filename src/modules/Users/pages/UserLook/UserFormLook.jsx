import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// icons
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// img
import User from "../../../../assets/images/user.svg";
import BackLook from "../../../../components/Back/BackLook";

export default function UserFormLook() {
  const navigate = useNavigate();

  return (
    <section>
      <div className="container">
        <section className="user__form">
          <div className="user__form__header">
            <BackLook />
          </div>
          <form>
            <div className="user__form__wrapper">
              <div className="user__form__left">
                <img
                  src={User}
                  alt="user"
                  style={{ cursor: "pointer" }}
                />
                <h4 style={{ cursor: "pointer" }}>Изменить</h4>
              </div>
              <div className="user__form__right">
                <div className="user__form__right-top">
                  <h2>Данные пользователя</h2>
                  <div className="user__form__data">
                    <div className="user__form__info">
                      <label>Ф.И.О. *</label>
                      <input type="text" />
                    </div>
                    <div className="user__form__info">
                      <label>Номер телефона *</label>
                      <input type="text" placeholder="+996" />
                    </div>
                    <div className="user__form__info">
                      <label>Пароль</label>
                      <input type="password" />
                    </div>
                  </div>
                </div>
                <div className="hr"></div>
                <div className="user__form__right-bottom">
                  <h2>Роль для доступа</h2>
                  <div className="user__form__info">
                    <label>Выбрать роль</label>
                    <div className="form__right__select">
                      Администратор<MdOutlineKeyboardArrowDown className="form__right__icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
}
