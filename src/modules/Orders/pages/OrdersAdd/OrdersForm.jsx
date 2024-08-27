import React from "react";
import BackAdd from "../../../../components/Back/BackAdd";
import { IoIosArrowDown } from "react-icons/io";
import deleteIcon from "../../../../assets/icons/delete.svg";
import OrderProductAddIcon from "../../../../assets/icons/order_add_btn.svg";

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
              <div className="order_product">
                <div className="orders_product__size">
                  <h3>C1</h3>
                  <IoIosArrowDown />
                </div>

                <div className="order_product_coun_sum">
                  <div className="order_product_count">100</div>

                  <p className="order_product_sum">2 000 000 сум</p>

                  <img className="order_product_delete" src={deleteIcon} alt="delete icon" />
                </div>
              </div>
              <div className="order_product">
                <div className="orders_product__size">
                  <h3>C1</h3>
                  <IoIosArrowDown />
                </div>

                <div className="order_product_coun_sum">
                  <div className="order_product_count">100</div>

                  <p className="order_product_sum">2 000 000 сум</p>

                  <img className="order_product_delete" src={deleteIcon} alt="delete icon" />
                </div>
              </div>
              <button className="order_product_btn">
                <img src={OrderProductAddIcon} alt="" />
                Добавить продукт
              </button>
            </div>
            <div className="order_form_bg">
              <h2 className="order_fotm_title">Выбрать клиента
                <div className="order_wrapper_client">
                  <div className="order_client">
                    <label>Клиент <span>*</span></label>
                    <div className="order_client_select">
                      <h3></h3>
                      <IoIosArrowDown />
                    </div>
                  </div>
                  <div className="order_client">
                    <label>Курьер <span>*</span></label>
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
              <h2 className="order_fotm_title">Общая сумма</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
