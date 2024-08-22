import React from "react";
import toggle from "../assets/icons/toggle.svg";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

export default function Search() {
  return (
    <section>
      <div className="container">
        <div className="search">
          <div className="search__left">
            <div className="search__input">
              <FiSearch className="search__icon" />
              <input type="text" placeholder="Поиск"/>
            </div>
            <button>
              <img src={toggle} alt="icon" />
              Фильтр
            </button>
          </div>

          <div className="search__right">
            <button className="add__btn">
              <IoMdAddCircleOutline className="add__icon" />
              Добавить
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
