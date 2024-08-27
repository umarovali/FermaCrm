import React, { useState } from "react";
import toggle from "../assets/icons/toggle.svg";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CardActionArea } from "@mui/material";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ModalFilterUser, ModalFilterProduct, ModalFilterClient, ModalFilterOrder } from "./Modals/ModalFilter";
import { useTranslation } from "react-i18next";

const SearchUser = () => {
  const [userModal, setUserModal] = useState(false);
  const handleOpenModal = () => {
    setUserModal(true);
  };

  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <div className="search">
          <div className="search__left">
            <div className="search__input">
              <FiSearch className="search__icon" />
              <input type="text" placeholder={t("search")} />
            </div>
            <div className="search_wrapper_modal">
              <CardActionArea
                className="search_filter_btn"
                onClick={handleOpenModal}
              >
                <img src={toggle} alt="icon" />
                {t("filter")}
              </CardActionArea>
              <ModalFilterUser userModal={userModal} setUserModal={setUserModal} />
            </div>
          </div>

          <Link to="/user/user_add" className="search__right">
            <CardActionArea className="add__btn">
              <IoMdAddCircleOutline className="add__icon" />
              {t("add")}
            </CardActionArea>
          </Link>
        </div>
      </div>
    </section>
  );
};

const SearchProduct = () => {
  const [userModal, setUserModal] = useState(false);
  const handleOpenModal = () => {
    setUserModal(true);
  };

  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <div className="search">
          <div className="search__left">
            <div className="search__input">
              <FiSearch className="search__icon" />
              <input type="text" placeholder={t("search")} />
            </div>
            <div className="search_wrapper_modal">
              <CardActionArea
                className="search_filter_btn"
                onClick={handleOpenModal}
              >
                <img src={toggle} alt="icon" />
                {t("filter")}
              </CardActionArea>
              <ModalFilterProduct userModal={userModal} setUserModal={setUserModal} />
            </div>
          </div>

          <Link to="/products/product-add" className="search__right">
            <CardActionArea className="add__btn">
              <IoMdAddCircleOutline className="add__icon" />
              {t("add")}
            </CardActionArea>
          </Link>
        </div>
      </div>
    </section>
  );
};

const SearchClient = () => {
  const [userModal, setUserModal] = useState(false);
  const handleOpenModal = () => {
    setUserModal(true);
  };

  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <div className="search">
          <div className="search__left">
            <div className="search__input">
              <FiSearch className="search__icon" />
              <input type="text" placeholder={t("search")} />
            </div>
            <div className="search_wrapper_modal">
              <CardActionArea
                className="search_filter_btn"
                onClick={handleOpenModal}
              >
                <img src={toggle} alt="icon" />
                {t("filter")}
              </CardActionArea>
              <ModalFilterClient userModal={userModal} setUserModal={setUserModal} />
            </div>
          </div>

          <Link to={"/clients/client-add"} className="search__right">
            <CardActionArea className="add__btn">
              <IoMdAddCircleOutline className="add__icon" />
              {t("add")}
            </CardActionArea>
          </Link>
        </div>
      </div>
    </section>
  );
};

const SearchCouriers = () => {
  const [userModal, setUserModal] = useState(false);
  const handleOpenModal = () => {
    setUserModal(true);
  };

  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <div className="search">
          <div className="search__left">
            <div className="search__input">
              <FiSearch className="search__icon" />
              <input type="text" placeholder={t("search")} />
            </div>
          </div>

          <Link to={"/couriers/couriers-add"} className="search__right">
            <CardActionArea className="add__btn">
              <IoMdAddCircleOutline className="add__icon" />
              {t("add")}
            </CardActionArea>
          </Link>
        </div>
      </div>
    </section>
  );
};

const SearchOrders = () => {
  const [userModal, setUserModal] = useState(false);
  const handleOpenModal = () => {
    setUserModal(true);
  };

  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <div className="search">
          <div className="search__left">
            <div className="search__input">
              <FiSearch className="search__icon" />
              <input type="text" placeholder={t("search")} />
            </div>
            <div className="search_wrapper_modal">
              <CardActionArea
                className="search_filter_btn"
                onClick={handleOpenModal}
              >
                <img src={toggle} alt="icon" />
                {t("filter")}
              </CardActionArea>
              <ModalFilterOrder userModal={userModal} setUserModal={setUserModal} />
            </div>
          </div>

          <Link to={"/orders/orders-add"} className="search__right">
            <CardActionArea className="add__btn">
              <IoMdAddCircleOutline className="add__icon" />
              {t("add")}
            </CardActionArea>
          </Link>
        </div>
      </div>
    </section>
  );
};

export {
  SearchUser,
  SearchProduct,
  SearchClient,
  SearchCouriers,
  SearchOrders,
};
