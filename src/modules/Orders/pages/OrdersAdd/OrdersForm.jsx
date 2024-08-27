import React from "react";
import BackAdd from "../../../../components/Back/BackAdd";
import { IoIosArrowDown } from "react-icons/io";
import OrderProductAddIcon from "../../../../assets/icons/order_add_btn.svg";
import OrdersAddItem from "../../Components/OrdersAddItem";
import OrdersSum from "../../Components/OrdersSum"

export default function OrdersForm() {
  return (
    <section className="order_form">
      <div className="container">
        <div className="order_back_bg">
          <BackAdd />
        </div>
        <div className="order_wrapper">
          <div className="order_left">
            <div className="order_form_bg">
              <h2 className="order_fotm_title">Выбрать продукт</h2>
              <OrdersAddItem name="C1" price="200 000"/>
              <OrdersAddItem name="C2" price="200 000"/>
              <button className="order_product_btn">
                <img src={OrderProductAddIcon} alt="" />
                Добавить продукт
              </button>
            </div>
            <div className="order_form_bg">
              <h2 className="order_fotm_title">
                Выбрать клиента
                <div className="order_wrapper_client">
                  <div className="order_client">
                    <label>
                      Клиент <span>*</span>
                    </label>
                    <div className="order_client_select">
                      <h3></h3>
                      <IoIosArrowDown />
                    </div>
                  </div>
                  <div className="order_client">
                    <label>
                      Курьер <span>*</span>
                    </label>
                    <div className="order_client_select">
                      <h3></h3>
                      <IoIosArrowDown />
                    </div>
                  </div>
                </div>
              </h2>
            </div>
          </div>

          <div className="order_right">
            <div className="order_form_bg">
              <h3 className="order_fotm_title">Общая сумма</h3>
              <OrdersSum size="C1" piecessum="25 000" allsum="200 000"/>
              <OrdersSum size="C2" piecessum="255 000" allsum="2000 000"/>
              <div className="hr"></div>
              <h2 className="order__total" >Общая сумма <span>2 000 000 сум</span> </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
