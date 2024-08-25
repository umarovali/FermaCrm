import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
// icons
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// img
import User from "../../../../assets/images/user.svg";
import BackEdit from "../../../../components/Back/BackEdit";
import { BiCopy } from "react-icons/bi";

export default function ClientFormEdit() {
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
        <section className="client__form">
          <div className="client__form__header">
            <BackEdit />
          </div>
          <form>
            <div className="client__form__wrapper">
              <div className="client__form__left">
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
              <div className="client__form__right">
                <div className="client__form__right-top">
                  <h2>{t("userdata")}</h2>
                  <div className="client__form__data">
                    <div className="client__form__info">
                      <label>{t("fullname")}</label>
                      <input type="text" />
                    </div>
                    <div className="client__form__info">
                      <label>{t("phonenumber")}</label>
                      <input type="text" placeholder="+996" />
                    </div>
                    <div className="client__form__info">
                      <label>{t("password")}</label>
                      <input type="password" />
                    </div>
                  </div>
                </div>
                <div className="hr"></div>
                <div className="client__form__right-bottom">
                  <h2>{t("сourier")}</h2>
                  <div className="client__form__info">
                    <label>{t("сourier")}</label>
                    <div className="form__right__select">
                      Janibek Maxatov
                      <MdOutlineKeyboardArrowDown className="form__right__icon" />
                    </div>
                  </div>
                </div>
                <div className="hr"></div>
                <div className="client__form__right-bottom">
                  <h2>{t("location")}</h2>
                  <div className="client__form-map">
                    <iframe
                      src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac0e87cf7d6ad861d6fd0df4913c2e277ac0c49c76f31085fde1e5d93be83ed49&amp;source=constructor"
                      frameborder="0"
                    ></iframe>
                    <label>{t("link")}</label>
                    <div className="client__form-map-input">
                      <input
                        type="url"
                        placeholder="+https://yandex.com/maps/geo/771288885/?ll=69.257748%2C41.311121&z=14.88"
                      />
                      <BiCopy className="icon-copy"/>
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
