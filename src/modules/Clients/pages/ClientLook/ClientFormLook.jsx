import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
// icons
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
// img
import User from "../../../../assets/images/user.svg";
import BackLook from "../../../../components/Back/BackLook";
import { BiCopy } from "react-icons/bi";

export default function ClientFormLook() {
  const { t } = useTranslation();
  const { id } = useParams(); 
  const [client, setClient] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    axios
      .get(`https://api.bbk.kg/admin/clients/${id}`)
      .then((res) => {
        setClient(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  if (loading) return <p>{t("loading")}</p>;
  if (error) return <p>{t("error")}: {error}</p>;

  return (
    <section>
      <div className="container">
        <section className="client__form">
          <div className="client__form__header">
            <BackLook />
          </div>
          <form>
            <div className="client__form__wrapper">
              <div className="client__form__left">
                <img
                  src={selectedImage || (client?.profile_image || User)}
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
              </div>
              <div className="client__form__right">
                <div className="client__form__right-top">
                  <h2>{t("userdata")}</h2>
                  <div className="client__form__data">
                    <div className="client__form__info">
                      <label>{t("fullname")}</label>
                      <input type="text" value={client?.user.full_name || ""} readOnly />
                    </div>
                    <div className="client__form__info">
                      <label>{t("phonenumber")}</label>
                      <input type="text" value={client?.user.phone_number || ""} readOnly />
                    </div>
                    <div className="client__form__info">
                      <label>{t("password")}</label>
                      <div className="password-wrapper">
                        <input
                          type={passwordVisible ? "text" : "password"}
                          value={t("hidden")}
                          readOnly
                        />
                        <button type="button" onClick={togglePasswordVisibility}>
                          {passwordVisible ? (
                            <FaRegEyeSlash />
                          ) : (
                            <FaRegEye />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hr"></div>
                <div className="client__form__right-bottom">
                  <h2>{t("сourier")}</h2>
                  <div className="client__form__info">
                    <label>{t("сourier")}</label>
                    <div className="form__right__select">
                      {client?.courier || t("noData")}
                      <MdOutlineKeyboardArrowDown className="form__right__icon" />
                    </div>
                  </div>
                </div>
                <div className="hr"></div>
                <div className="client__form__right-bottom">
                  <h2>{t("location")}</h2>
                  <div className="client__form-map">
                    <iframe
                      src={client?.location || "https://yandex.ru/map-widget/v1/?um=constructor%3Ac0e87cf7d6ad861d6fd0df4913c2e277ac0c49c76f31085fde1e5d93be83ed49&amp;source=constructor"}
                      frameBorder="0"
                    ></iframe>
                    <label>{t("link")}</label>
                    <div className="client__form-map-input">
                      <input
                        type="url"
                        placeholder={client?.map_link || t("noData")}
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
