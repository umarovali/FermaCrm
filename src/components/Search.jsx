import React from "react";
import { GoSearch } from "react-icons/go";
import toggle from "../assets/icons/toggle.svg";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function Search() {
  return (
    <section>
      <div className="container">
        <div className="search">
          <div className="search__left">
            <div className="search__input">
              <GoSearch className="search__icon" />
              <input type="text" />
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
