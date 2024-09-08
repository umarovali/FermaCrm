import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
// icons
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// img
import User from "../../../../assets/images/user.svg";
import BackLook from "../../../../components/Back/BackLook";

export default function UserFormLook() {
  const { t } = useTranslation();

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
                  src={User}
                  alt="user"
                />
              </div>
              <div className="user__form__right">
                <div className="user__form__right-top">
                  <h2>{t("userdata")}</h2>
                  <div className="user__form__data">
                    <div className="user__form__info">
                      <label>{t("fullname")}</label>
                      <div className="user_look_bg"></div>
                    </div>
                    <div className="user__form__info">
                      <label>{t("phonenumber")}</label>
                      <div className="user_look_bg"></div>
                    </div>
                    <div className="user__form__info">
                      <label>{t("password")}</label>
                      <div className="user_look_bg"></div>
                    </div>
                  </div>
                </div>
                <div className="hr"></div>
                <div className="user__form__right-bottom">
                  <h2>{t("accessroles")}</h2>
                  <div className="user__form__info">
                    <label>{t("chooserole")}</label>
                    <div className="form__right__select_bg">
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
