import React, { useState, useEffect } from "react"; 
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios";
import ProductItem from "./ProductItem";
import { useTranslation } from "react-i18next";

export default function ProductTable() {
  const { t } = useTranslation();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.bbk.kg/admin/products/")
      .then((res) => {
        setProduct(res.data.data.records);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>{t("loading")}</p>;

  if (error) return <p>{t("error")}: {error}</p>;

  return (
    <section>
      <div className="container">
        <div className="table_bg">
          <div className="table_container">
            <table className="table">
              <thead>
                <tr>
                  <th>№</th>
                  <th>
                    {t("name")}
                    <IoIosArrowDown className="th_icon" />
                  </th>
                  <th>
                    {t("quantity")}
                    <IoIosArrowDown className="th_icon" />
                  </th>
                  <th>
                    {t("price")} (сом)
                    <IoIosArrowDown className="th_icon" />
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {product.map((item, index) => (
                  <ProductItem
                    key={item.id}
                    id={index + 1} 
                    name={item.name}
                    quantity={item.quantity}
                    price={item.price}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
