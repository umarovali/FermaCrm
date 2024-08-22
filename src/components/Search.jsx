import React from "react";
import toggle from "../assets/icons/toggle.svg";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CardActionArea } from '@mui/material';
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
            <CardActionArea>
              <img src={toggle} alt="icon" />
              Фильтр
            </CardActionArea>
          </div>

          <div className="search__right">
            <CardActionArea className="add__btn">
              <IoMdAddCircleOutline className="add__icon" />
              Добавить
            </CardActionArea>
          </div>
        </div>
      </div>
    </section>
  );
}
