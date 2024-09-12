import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import User from "../../../../assets/images/user.svg";
import BackLook from "../../../../components/Back/BackLook";
import Loading from "../../../../assets/images/loading.svg";

export default function UserFormLook() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Initialize the file input ref
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    axios
      .get(`https://api.bbk.kg/admin/users/${id}`)
      .then((res) => {
        console.log(res.data);
        setItem(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <center>
        <img className="loadin__img" src={Loading} alt="loading" />
      </center>
    );
  
  if (error)
    return (
      <p>
        {t("error")}: {error}
      </p>
    );

  return (
    <section>
      <div className="container">
        <section className="user__form">
          <div className="user__form__header">
            <BackLook />
          </div>
          <form>
            <div className="user__form__wrapper">
              <div className="user__form__left">
                <img
                  src={item?.image || User}
                  alt="user"
                  onClick={handleImageClick}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="user__form__right">
                <div className="user__form__right-top">
                  <h2>{t("userdata")}</h2>
                  <div className="user__form__data">
                    <div className="user__form__info">
                      <label>{t("fullname")}</label>
                      <div className="user_look_bg">
                        {item?.full_name || t("noData")}
                      </div>
                    </div>
                    <div className="user__form__info">
                      <label>{t("phonenumber")}</label>
                      <div className="user_look_bg">
                        {item?.phone_number || t("noData")}
                      </div>
                    </div>
                    <div className="user__form__info">
                      <label>{t("password")}</label>
                      <input
                        type="text"
                        value={item?.password || ""}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <div className="hr"></div>
                <div className="user__form__right-bottom">
                  <h2>{t("accessroles")}</h2>
                  <div className="user__form__info">
                    <label>{t("chooserole")}</label>
                    <div className="form__right__select_bg">
                      {item?.user_roles?.join(", ") || t("noData")}
                      <MdOutlineKeyboardArrowDown className="form__right__icon" />
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
