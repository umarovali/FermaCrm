import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
// icons
import { FaArrowLeftLong } from "react-icons/fa6";
import Add from "../../../../assets/icons/add.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// img
import User from "../../../../assets/images/user.svg"; 
import BackEdit from "../../../../components/Back/BackEdit";

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

  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <section className="user__form">
          <div className="user__form__header">
            <BackEdit />
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
                <h4 onClick={handleImageClick} style={{ cursor: "pointer" }}>{t("edit")}</h4>
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
                    <div className="form__right__select">
                      {t("administrator")}<MdOutlineKeyboardArrowDown className="form__right__icon" />
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
