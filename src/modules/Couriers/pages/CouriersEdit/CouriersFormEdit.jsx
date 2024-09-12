import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiCopy } from "react-icons/bi";
import axios from "axios";
// icons
import User from "../../../../assets/images/user.svg";
import BackEdit from "../../../../components/Back/BackEdit";

export default function CouriersFormEdit() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams(); 
  const fileInputRef = useRef(null);

  const [clientData, setClientData] = useState({
    full_name: "",
    phone_number: "",
    password: "",
    salary: "",
    courier: "",
    location: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.bbk.kg/admin/couriers/${id}`)
      .then((res) => {
        setClientData({
          full_name: res.data.full_name,
          phone_number: res.data.phone_number,
          password: "",
          salary: res.data.salary || "",
          courier: res.data.courier,
          location: res.data.location || "",
        });
        setSelectedImage(res.data.image || User);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClientData({ ...clientData, [name]: value });
  };

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

    axios
      .put(`https://api.bbk.kg/admin/couriers/${id}`, clientData)
      .then(() => {
        alert(t("clientUpdated"));
        navigate("/clients");
      })
      .catch((error) => {
        console.error("Error updating client:", error);
        alert(`${t("updateError")}: ${error.response.status}`);
      });
  };

  if (loading) return <p>{t("loading")}</p>;
  if (error) return <p>{t("error")}: {error}</p>;

  return (
    <section>
      <div className="container">
        <section className="client__form">
          <div className="client__form__header">
            <BackEdit onSave={handleSubmit} />
          </div>
          <form onSubmit={handleSubmit}>
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
                      <label>{t("fullname")}<span> *</span></label>
                      <input
                        type="text"
                        name="full_name"
                        value={clientData.full_name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="client__form__info">
                      <label>{t("phonenumber")}<span> *</span></label>
                      <input
                        type="text"
                        name="phone_number"
                        value={clientData.phone_number}
                        onChange={handleInputChange}
                        placeholder="+996"
                      />
                    </div>
                    <div className="client__form__info">
                      <label>{t("password")}<span> *</span></label>
                      <input
                        type="password"
                        name="password"
                        value={clientData.password}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="client__form__info">
                      <label>{t("salary")}<span> *</span></label>
                      <input
                        type="number"
                        name="salary"
                        value={clientData.salary}
                        onChange={handleInputChange}
                      />
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
