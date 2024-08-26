import React from "react";
import BackAdd from "../../../../components/Back/BackAdd";
import { IoIosArrowDown } from "react-icons/io";
import OrdersSum from "../../Components/OrdersSum";
import OrdersProduct from "./OrdersProduct";

export default function OrdersForm() {
  return (
    <section className="order_form">
      <div className="container">
        <div className="order_back_bg">
          <BackAdd />
        </div>
        <div className="order_form__wrapper">
          <div className="order_form__left">
            <div className="order_form__left-top">
              <h3>Выбрать продукт</h3>
              <OrdersProduct />
            </div>
            <div className="order_form__left-bottom">
              <h2>Выбрать клиента</h2>
              <div className="select__wrapper">
                <div className="select">
                  <label>Клиент *</label>
                  <div className="courier">
                    <IoIosArrowDown className="courier_icon" />
                  </div>
                </div>
                <div className="select">
                  <label>Клиент *</label>
                  <div className="courier">
                    <IoIosArrowDown className="courier_icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order_form__right">
            <div className="order_form__right-top">
              <h3>Общая сумма</h3>
              <OrdersSum size="C1" piecessum="25000" allsum="200 000" />
              <OrdersSum size="C2" piecessum="15000" allsum="800 000" />
              <div className="hr"></div>
              <div className="order__total">
                <h2>
                  Общая сумма <span>2 000 000 сум</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
