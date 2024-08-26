import React from "react";

export default function OrdersSum(sum) {
  return (
    <>
      <div className="order_sum">
        <h3>
          {sum.size}<span>({sum.piecessum}):</span>
        </h3>
        <h2>{sum.allsum}</h2>
      </div>
    </>
  );
}
