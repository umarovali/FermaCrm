import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
// icons
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// img
import User from "../../../../assets/images/user.svg";
import BackAdd from "../../../../components/Back/BackAdd";

export default function CouriersForm() {
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
        <section className="couriers__form">
          <div className="couriers__form__header">
            <BackAdd />
          </div>
          <form>
            <div className="couriers__form__wrapper">
              <div className="couriers__form__left">
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
                <h4 onClick={handleImageClick} style={{ cursor: "pointer" }}>
                  {t("edit")}
                </h4>
              </div>
              <div className="couriers__form__right">
                <h2>{t("userdata")}</h2>
                <div className="couriers__form__data">
                  <div className="couriers__form__info">
                    <label>{t("fullname")}</label>
                    <input type="text" />
                  </div>
                  <div className="couriers__form__info">
                    <label>{t("phonenumber")}</label>
                    <input type="text" placeholder="+996" />
                  </div>
                  <div className="couriers__form__info">
                    <label>{t("password")}</label>
                    <input type="password" />
                  </div>
                  <div className="couriers__form__info">
                    <label>Зарплата *</label>
                    <input type="number" />
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
