import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
// icons
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// img
import UserFoto from "../../../../assets/images/user_foto.png";
import BackAdd from "../../../../components/Back/BackAdd";
import axios from "axios";

export default function CouriersForm() {
  const [selectedImage, setSelectedImage] = useState();
  const formRef = useRef();
  const fileInputRef = useRef();
  const fullNameRef = useRef();
  const phoneNumberRef = useRef();
  const passwordRef = useRef();
  const salaryRef = useRef();

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const { t } = useTranslation();

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
        salary: salaryRef.current.value.trim(),
        password: passwordRef.current.value.trim(),
        image: imageUrl,
      }

      return axios.post("https://api.bbk.kg/admin/couriers/", postData, {
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
  }

  return (
    <section>
      <div className="container">
        <section className="couriers__form">
          <div className="couriers__form__header">
            <BackAdd formRef={formRef} />
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="couriers__form__wrapper">
              <div className="couriers__form__left">
                <img
                  src={selectedImage || UserFoto}
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
                    <input type="text" ref={fullNameRef} />
                  </div>
                  <div className="couriers__form__info">
                    <label>{t("phonenumber")}</label>
                    <input type="text" placeholder="+996" ref={phoneNumberRef} />
                  </div>
                  <div className="couriers__form__info">
                    <label>{t("password")}</label>
                    <input type="password" ref={passwordRef} />
                  </div>
                  <div className="couriers__form__info">
                    <label>Зарплата *</label>
                    <input type="number" ref={salaryRef} />
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
