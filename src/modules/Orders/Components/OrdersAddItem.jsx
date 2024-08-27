import React, { useState } from "react";
import { CardActionArea } from "@mui/material";
import { BsPlus } from "react-icons/bs";
import { LiaMinusSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import deleteIcon from "../../../assets/icons/deletered.svg";

export default function OrdersAddItem(item) {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleChange = (event) => {
    const value = Number(event.target.value);
    if (value > 0) {
      setCount(value);
    }
  };

  return (
    <div>
      <div className="order_product">
        <div className="orders_product__size">
          <h3>{item.name}</h3>
          <IoIosArrowDown />
        </div>

        <div className="order_product_coun_sum">
          <div className="order_product_count">
            <CardActionArea onClick={decrement} className="item_count_minus">
              <LiaMinusSolid />
            </CardActionArea>
            <input
              type="number"
              value={count}
              onChange={handleChange}
              min="1"
            />
            <CardActionArea onClick={increment} className="item_count_plus">
              <BsPlus />
            </CardActionArea>
          </div>

          <p className="order_product_sum">{item.price} сом</p>

          <img
            className="order_product_delete"
            src={deleteIcon}
            alt="delete icon"
          />
        </div>
      </div>
    </div>
  );
}
