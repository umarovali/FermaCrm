import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import axios from "axios";

// icons
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// img
import User from "../../../../assets/images/user.svg";
import BackLook from "../../../../components/Back/BackLook";
import Loading from "../../../../assets/images/loading.svg";

export default function CouriersFormLook() {
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
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.bbk.kg/admin/couriers/${id}`)
      .then((res) => {
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
        <section className="couriers__form">
          <div className="couriers__form__header">
            <BackLook />
          </div>
          <form>
            <div className="couriers__form__wrapper">
              <div className="couriers__form__left">
                <img
                  src={selectedImage || (item?.user?.image || User)}
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
              <div className="couriers__form__right">
                <h2>{t("userdata")}</h2>
                <div className="couriers__form__data">
                  <div className="couriers__form__info">
                    <label>{t("fullname")}</label>
                    <div className="couriers_look_bg">
                      {item?.user?.full_name || t("noData")}
                    </div>
                  </div>
                  <div className="couriers__form__info">
                    <label>{t("phonenumber")}</label>
                    <div className="couriers_look_bg">
                      {item?.user?.phone_number || t("noData")}
                    </div>
                  </div>
                  <div className="couriers__form__info">
                    <label>{t("password")}</label>
                    <input type="text" value={item?.password || ""} readOnly />
                  </div>
                  <div className="couriers__form__info">
                    <label>Зарплата *</label>
                    <div className="couriers_look_bg">
                      {item?.salary || t("noData")}
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
