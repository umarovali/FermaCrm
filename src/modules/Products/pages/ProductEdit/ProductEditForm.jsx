import React, { useState, useEffect } from 'react';
import BackEdit from "../../../../components/Back/BackEdit";
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import axios from 'axios';

export default function ProductEditForm() {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const { t } = useTranslation();
  const [product, setProduct] = useState({
    name: '',
    quantity: '',
    price: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.bbk.kg/admin/products/${id}`)
      .then((res) => {
        setProduct(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://api.bbk.kg/admin/products/${id}`, product)
      .then(() => {
        console.log(t("productUpdated"));
        navigate(-1); 
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  const handleSave = () => {
    handleSubmit(new Event('submit'));
  };

  if (loading) return <p>{t("loading")}</p>;
  if (error) return <p>{t("error")}: {error}</p>;

  return (
    <section>
      <div className="container">
        <div className="product_bg">
          <div className="product_back">
            <BackEdit onSave={handleSave} />
          </div>
          <div className="product_form">
            <h2 className='product_form_title'>{t("productdata")}</h2>

            <form className='product_form_wrapper' onSubmit={handleSubmit}>
              <div className='product_form_item'>
                <label className='product_form_label'>{t("name")} <span>*</span></label>
                <input
                  className='product_form_input'
                  type="text"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                />
              </div>
              <div className='product_form_item'>
                <label className='product_form_label'>{t("quantity")} <span>*</span></label>
                <input
                  className='product_form_input'
                  type="text"
                  name="quantity"
                  value={product.quantity}
                  onChange={handleChange}
                />
              </div>
              <div className='product_form_item'>
                <label className='product_form_label'>{t("price")} (сом) <span>*</span></label>
                <input
                  className='product_form_input'
                  type="text"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}