import React, { useEffect, useRef } from "react";
import { CardActionArea } from "@mui/material";
// import images
import Close from "../../assets/icons/close.svg";
import Add from "../../assets/icons/add.svg";
import CloseFilter from "../../assets/icons/close-filter.svg";

const ModalFilterUser = ({ userModal, setUserModal }) => {
  const modalRef = useRef();

  const handleCloseModal = () => {
    setUserModal(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!userModal) return null;

  return (
    <div className="filter_modal close_modal">
      <div ref={modalRef} className="modal_content">
        <div className="modal_header">
          <h4 className="modal_title">Фильтр</h4>
          <button onClick={handleCloseModal}>
            <img src={Close} alt="Close" />
          </button>
        </div>
        <div className="modal_hr"></div>
        <div className="modal_body">
          <div className="modal_role">
            <p className="modal_role_text">Роль</p>
            <select className="modal_role_choose">
              <option value="admin">Администратор</option>
              <option value="courier">Курьер</option>
            </select>
          </div>
          <div className="modal_btns">
            <CardActionArea
              onClick={handleCloseModal}
              className="modal_btn_canse"
            >
              <img src={CloseFilter} alt="Close filter" />
              Отменить
            </CardActionArea>
            <CardActionArea className="modal_btn_filter">
              <img src={Add} alt="add filter" />
              Фильтровать
            </CardActionArea>
          </div>
        </div>
      </div>
    </div>
  );
};

const ModalFilterProduct = ({ userModal, setUserModal }) => {
  const modalRef = useRef();

  const handleCloseModal = () => {
    setUserModal(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!userModal) return null;

  return (
    <div className="filter_modal close_modal">
      <div ref={modalRef} className="modal_content">
        <div className="modal_header">
          <h4 className="modal_title">Фильтр</h4>
          <button onClick={handleCloseModal}>
            <img src={Close} alt="Close" />
          </button>
        </div>
        <div className="modal_hr"></div>
        <div className="modal_body">
          <div className="modal_role-product">
            <div className="modal_role-product-item">
              <p>Цена (сом)</p>
              <input type="number" placeholder="От" />
              <input type="number" placeholder="До" />
            </div>
            <div className="modal_role-product-item">
              <p>Количество</p>
              <input type="number" placeholder="От" />
              <input type="number" placeholder="До" />
            </div>
          </div>
          <div className="modal_btns">
            <CardActionArea
              onClick={handleCloseModal}
              className="modal_btn_canse"
            >
              <img src={CloseFilter} alt="Close filter" />
              Отменить
            </CardActionArea>
            <CardActionArea className="modal_btn_filter">
              <img src={Add} alt="add filter" />
              Фильтровать
            </CardActionArea>
          </div>
        </div>
      </div>
    </div>
  );
};

const ModalFilterClient = ({ userModal, setUserModal }) => {
  const modalRef = useRef();

  const handleCloseModal = () => {
    setUserModal(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!userModal) return null;

  return (
    <div className="filter_modal close_modal">
      <div ref={modalRef} className="modal_content">
        <div className="modal_header">
          <h4 className="modal_title">Фильтр</h4>
          <button onClick={handleCloseModal}>
            <img src={Close} alt="Close" />
          </button>
        </div>
        <div className="modal_hr"></div>
        <div className="modal_body">
          <div className="modal_role">
            <p className="modal_role_text">Курьер</p>
            <select className="modal_role_choose">
              <option value="courier">Курьер</option>
            </select>
          </div>
          <div className="modal_btns">
            <CardActionArea
              onClick={handleCloseModal}
              className="modal_btn_canse"
            >
              <img src={CloseFilter} alt="Close filter" />
              Отменить
            </CardActionArea>
            <CardActionArea className="modal_btn_filter">
              <img src={Add} alt="add filter" />
              Фильтровать
            </CardActionArea>
          </div>
        </div>
      </div>
    </div>
  );
};

const ModalFilterOrder = ({ userModal, setUserModal }) => {
  const modalRef = useRef();

  const handleCloseModal = () => {
    setUserModal(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!userModal) return null;

  return (
    <div className="filter_modal close_modal">
      <div ref={modalRef} className="modal_content">
        <div className="modal_header">
          <h4 className="modal_title">Фильтр</h4>
          <button onClick={handleCloseModal}>
            <img src={Close} alt="Close" />
          </button>
        </div>
        <div className="modal_hr"></div>
        <div className="modal_body-order">
          <div className="modal_role">
            <div className="modal_role-form">
              <p className="modal_role_text">Роль</p>
              <select className="modal_role_choose">
                <option value="admin">Администратор</option>
                <option value="courier">Курьер</option>
              </select>
            </div>
            <div className="modal_role-form">
              <p className="modal_role_text">Курьер</p>
              <select className="modal_role_choose">
                <option value="admin">Администратор</option>
                <option value="courier">Курьер</option>
              </select>
            </div>
            <div className="modal_role-product-order">
              <div className="modal_role-product-order-item">
                <p>Цена (сом)</p>
                <input type="number" placeholder="От" />
                <input type="number" placeholder="До" />
              </div>
              <div className="modal_role-product-order-item">
                <p>Количество</p>
                <input type="number" placeholder="От" />
                <input type="number" placeholder="До" />
              </div>
            </div>
          </div>
          <div className="modal_btns">
            <CardActionArea
              onClick={handleCloseModal}
              className="modal_btn_canse"
            >
              <img src={CloseFilter} alt="Close filter" />
              Отменить
            </CardActionArea>
            <CardActionArea className="modal_btn_filter">
              <img src={Add} alt="add filter" />
              Фильтровать
            </CardActionArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export {
  ModalFilterUser,
  ModalFilterProduct,
  ModalFilterClient,
  ModalFilterOrder,
};
