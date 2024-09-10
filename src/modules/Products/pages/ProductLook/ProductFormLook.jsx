import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; 
import BackLook from "../../../../components/Back/BackLook";
import { useTranslation } from "react-i18next";

export default function ProductFormLook() {
  const { t } = useTranslation();
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.bbk.kg/admin/products/${id}`)
      .then((res) => {
        setProduct(res.data.data); 
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>{t("loading")}</p>;
  if (error) return <p>{t("error")}: {error}</p>;

  return (
    <section>
      <div className="container">
        <div className="product_bg">
          <div className="product_back">
            <BackLook />
          </div>
          <div className="product_form">
            <h2 className="product_form_title">{t("productdata")}</h2>
            {product ? (
              <form className="product_form_wrapper">
                <div className="product_form_item">
                  <label className="product_form_label">
                    {t("name")} <span>*</span>
                  </label>
                  <div className="product_form_input_bg">{product.name}</div>
                </div>
                <div className="product_form_item">
                  <label className="product_form_label">
                    {t("quantity")} <span>*</span>
                  </label>
                  <div className="product_form_input_bg">{product.quantity}</div>
                </div>
                <div className="product_form_item">
                  <label className="product_form_label">
                    {t("price")} (сом) <span>*</span>
                  </label>
                  <div className="product_form_input_bg">{product.price}</div>
                </div>
              </form>
            ) : (
              <p>{t("noProductFound")}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
