import React from 'react';
import BackAdd from "../../../../components/Back/BackAdd"
import { useTranslation } from "react-i18next";

export default function ProductForm() {
  const { t } = useTranslation();

    return (
        <section>
            <div className="container">
                <div className="product_bg">

                    <div className="product_back">
                        <BackAdd/>
                    </div>
                    <hr />
                    <div className="product_form">
                        <h2 className='product_form_title'>{t("productdata")}</h2>

                        <form className='product_form_wrapper'>
                            <div className='product_form_item'>
                                <label className='product_form_label'>{t("name")} <span>*</span></label>
                                <input className='product_form_input' type="text" />
                            </div>
                            <div className='product_form_item'>
                                <label className='product_form_label'>{t("quantity")} <span>*</span></label>
                                <input className='product_form_input' type="text" />
                            </div>
                            <div className='product_form_item'>
                                <label className='product_form_label'>{t("price")} (сом) <span>*</span></label>
                                <input className='product_form_input' type="text" />
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}
