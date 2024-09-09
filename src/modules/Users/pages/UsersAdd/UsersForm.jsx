import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
// icons
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// img
import User from "../../../../assets/images/user.svg";
import BackAdd from "../../../../components/Back/BackAdd";

export default function UserForm() {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <section className="user__form">
          <div className="user__form__header">
            <BackAdd />
          </div>
          <form>
            <div className="user__form__wrapper">
              <div className="user__form__left">
                <img
                  src={selectedImage || User}
                  alt="user"
                  onClick={handleImageClick}
                />
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                />
                <h4 onClick={handleImageClick}></h4>
              </div>
              <div className="user__form__right">
                <div className="user__form__right-top">
                  <h2>{t("userdata")}</h2>
                  <div className="user__form__data">
                    <div className="user__form__info">
                      <label>{t("fullname")}</label>
                      <input type="text" />
                    </div>
                    <div className="user__form__info">
                      <label>{t("phonenumber")}</label>
                      <input type="text" placeholder="+996" />
                    </div>
                    <div className="user__form__info">
                      <label>{t("password")}</label>
                      <input type="password" />
                    </div>
                  </div>
                </div>
                <div className="hr"></div>
                <div className="user__form__right-bottom">
                  <h2>{t("accessroles")}</h2>
                  <div className="user__form__info">
                    <label>{t("chooserole")}</label>
                    <select className="form__right__select">
                      <option value="admin">Администратор</option>
                      <option value="courier">Курьер</option>
                      <option value="client">Клиенты</option>
                    </select>
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
