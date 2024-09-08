import React from 'react';
import BackLook from "../../../../components/Back/BackLook";
import { useTranslation } from "react-i18next";

export default function ProductFormLook() {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <div className="product_bg">
          <div className="product_back">
            <BackLook />
          </div>
          <div className="product_form">
            <h2 className='product_form_title'>{t("productdata")}</h2>

            <form className='product_form_wrapper'>
              <div className='product_form_item'>
                <label className='product_form_label'>{t("name")} <span>*</span></label>
                <div className="product_form_input_bg"></div>
              </div>
              <div className='product_form_item'>
                <label className='product_form_label'>{t("quantity")} <span>*</span></label>
                <div className="product_form_input_bg"></div>
              </div>
              <div className='product_form_item'>
                <label className='product_form_label'>{t("price")} (сом) <span>*</span></label>
                <div className="product_form_input_bg"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}