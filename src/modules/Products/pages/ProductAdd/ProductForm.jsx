import React from 'react';
import { CardActionArea } from "@mui/material";

export default function ProductForm() {
    return (
        <section>
            <div className="container">
                <div className="product_bg">

                    <div className="product_back">
                        <CardActionArea className='product_back_btn'>Назад</CardActionArea>

                        <CardActionArea className='product_add_btn'>Добавить и сохранить</CardActionArea>
                    </div>
                    <hr />
                    <div className="product_form">
                        <h2 className='product_form_title'>Данные продукта</h2>

                        <form className='product_form_wrapper'>
                            <div className='product_form_item'>
                                <label className='product_form_label'>Наименование <span>*</span></label>
                                <input className='product_form_input' type="text" />
                            </div>
                            <div className='product_form_item'>
                                <label className='product_form_label'>Количество <span>*</span></label>
                                <input className='product_form_input' type="text" />
                            </div>
                            <div className='product_form_item'>
                                <label className='product_form_label'>Цена (сом) <span>*</span></label>
                                <input className='product_form_input' type="text" />
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}
