import React from 'react';
// icons
import AddIcons from "../../assets/icons/add.svg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

export default function BackAdd() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)} className="user__form__btn1">
        <FaArrowLeftLong />
        Назад
      </button>
      <button className="user__form__btn2">
        <img src={AddIcons} alt="add icon" />
        Добавить и сохранить
      </button>
    </>
  )
}
