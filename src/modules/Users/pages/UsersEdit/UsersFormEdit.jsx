import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// icons
import { FaArrowLeftLong } from "react-icons/fa6";
import Add from "../../../../assets/icons/add.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// img
import User from "../../../../assets/images/user.svg"; 

export default function UsersFormEdit() {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click(); 
  };

  return (
    <section>
      <div className="container">
        <section className="user__form">
          <div className="user__form__header">
            <button onClick={() => navigate(-1)} className="user__form__btn1">
              <FaArrowLeftLong />
              Назад
            </button>
            <button className="user__form__btn2">
              <img src={Add} alt="add icon" />
              Изменить и сохранить
            </button>
          </div>
          <form>
            <div className="user__form__wrapper">
              <div className="user__form__left">
                <img 
                  src={selectedImage || User} 
                  alt="user" 
                  onClick={handleImageClick} 
                  style={{ cursor: "pointer" }}
                />
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  style={{ display: "none" }} 
                />
                <h4 onClick={handleImageClick} style={{ cursor: "pointer" }}>Изменить</h4>
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
