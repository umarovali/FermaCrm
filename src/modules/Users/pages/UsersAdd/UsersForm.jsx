import React, { useRef, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
// img
import UserFoto from "../../../../assets/images/user_foto.png";
import BackAdd from "../../../../components/Back/BackAdd";

export default function UserForm() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState();
  const formRef = useRef();
  const fileInputRef = useRef();
  const fullNameRef = useRef();
  const phoneNumberRef = useRef();
  const passwordRef = useRef();
  const roleRef = useRef();

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = fileInputRef.current.files[0];

    let uploadPromise;

    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      uploadPromise = axios.post("https://api.bbk.kg/upload", formData)
        .then((response) => response.data.data.image);
    } else {
      uploadPromise = Promise.resolve(UserFoto);
    }

    uploadPromise.then((imageUrl) => {
      const postData = {
        full_name: fullNameRef.current.value.trim(),
        phone_number: phoneNumberRef.current.value.trim(),
        password: passwordRef.current.value.trim(),
        role: roleRef.current.value.trim(),
        image: imageUrl,
      };

      return axios.post("https://api.bbk.kg/admin/users/", postData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    })
      .then(() => {
        alert("Пользователь успешно добавлен!");
        formRef.current.reset();
        setSelectedImage(null);
      })
      .catch((error) => {
        console.error("Ошибка загрузки:", error.response ? error.response.data : error.message);
      });
  };

  return (
    <section>
      <div className="container">
        <section className="user__form">
          <div className="user__form__header">
            <BackAdd formRef={formRef} />
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="user__form__wrapper">
              <div className="user__form__left">
                <img
                  src={selectedImage || UserFoto}
                  alt="user"
                  onClick={handleImageClick}
                />
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />
                <h4 onClick={handleImageClick}></h4>
              </div>

              <div className="user__form__right">
                <div className="user__form__right-top">
                  <h2>{t("userdata")}</h2>
                  <div className="user__form__data">
                    <div className="user__form__info">
                      <label>{t("fullname")}</label>
                      <input type="text" ref={fullNameRef} />
                    </div>
                    <div className="user__form__info">
                      <label>{t("phonenumber")}</label>
                      <input type="text" placeholder="9" ref={phoneNumberRef} />
                    </div>
                    <div className="user__form__info">
                      <label>{t("password")}</label>
                      <input type="password" autoComplete="off" ref={passwordRef} />
                    </div>
                  </div>
                </div>
                <div className="hr"></div>
                <div className="user__form__right-bottom">
                  <h2>{t("accessroles")}</h2>
                  <div className="user__form__info">
                    <label>{t("chooserole")}</label>
                    <select className="form__right__select" ref={roleRef}>
                      <option value="CLIENT">Клиенты</option>
                      <option value="COURIER">Куреры</option>
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
