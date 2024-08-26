import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import deleteIcon from "../../../../assets/icons/delete.svg";

export default function OrdersProduct() {
  return (
    <>
      <div className="orders__product">
        <div className="orders__size__select">
          <h2>C1</h2>
          <IoIosArrowDown />
        </div>
        <input type="text" />
        <h2>2 000 000 сум</h2>
        <img src={deleteIcon} alt="Delete product" />
      </div>
    </>
  );
}
