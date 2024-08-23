import React, { useState } from "react";
import toggle from "../assets/icons/toggle.svg";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CardActionArea } from '@mui/material';
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import ModalFilter from "./Modals/ModalFilter";

export default function Search({ to }) {
  const [userModal, setUserModal] = useState(false);
  const handleOpenModal = () => {
    setUserModal(true);
  };

  return (
    <section>
      <div className="container">
        <div className="search">
          <div className="search__left">
            <div className="search__input">
              <FiSearch className="search__icon" />
              <input type="text" placeholder="Поиск" />
            </div>
            <div className="search_wrapper_modal">
              <CardActionArea className="search_filter_btn" onClick={handleOpenModal}>
                <img src={toggle} alt="icon" />
                Фильтр
              </CardActionArea>
              <ModalFilter userModal={userModal} setUserModal={setUserModal} />

            </div>
          </div>

          <Link to={to} className="search__right">
            <CardActionArea className="add__btn">
              <IoMdAddCircleOutline className="add__icon" />
              Добавить
            </CardActionArea>
          </Link>
        </div>
      </div>
    </section>
  );
} 
