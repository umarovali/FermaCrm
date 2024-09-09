import React, { useRef } from 'react';
import axios from 'axios';
import BackAdd from "../../../../components/Back/BackAdd";
import { useTranslation } from "react-i18next";

export default function ProductForm() {
    const { t } = useTranslation();

    const formRef = useRef();
    const nameRef = useRef();
    const quantityRef = useRef();
    const priceRef = useRef();

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const name = nameRef.current.value.trim();
        const quantity = quantityRef.current.value.trim();
        const price = priceRef.current.value.trim();

        if (!name || !quantity || !price) {
            alert(t("Заполните все поля"));
            return;
        }

        axios.post('https://api.bbk.kg/admin/products/', {
            name: name,
            quantity: quantity,
            price: price
        }).then(res => {
            console.log(res.data)
            formRef.current.reset()
        }).catch(error => {
            console.error('Error adding product:', error);
        });
    };
    
    return (
        <section>
            <div className="container">
                <div className="product_bg">
                    <div className="product_back">
                        <BackAdd formRef={formRef} />
                    </div>
                    <div className="product_form">
                        <h2 className='product_form_title'>{t("productdata")}</h2>
                        <form className='product_form_wrapper' ref={formRef} onSubmit={handleSubmit}>
                            <div className='product_form_item'>
                                <label className='product_form_label'>{t("name")} <span>*</span></label>
                                <input
                                    className='product_form_input'
                                    type="text"
                                    ref={nameRef}
                                />
                            </div>
                            <div className='product_form_item'>
                                <label className='product_form_label'>{t("quantity")} <span>*</span></label>
                                <input
                                    className='product_form_input'
                                    type="number"
                                    ref={quantityRef}
                                />
                            </div>
                            <div className='product_form_item'>
                                <label className='product_form_label'>{t("price")} (сом) <span>*</span></label>
                                <input
                                    className='product_form_input'
                                    type="number"
                                    ref={priceRef}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
