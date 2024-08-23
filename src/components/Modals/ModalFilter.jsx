import React from 'react';
import { CardActionArea } from '@mui/material';
// import img
import Close from "../../assets/icons/close.svg";
import Add from "../../assets/icons/add.svg"
import CloseFilter from "../../assets/icons/close-filter.svg"

export default function ModalFilter({ userModal, setUserModal }) {

    const handleCloseModal = () => {
        setUserModal(false);
    };

    return (
        <div className={`close_modal ${userModal ? "filter_modal" : ""}`}>
            <div className="modal_header">
                <h4 className="modal_title">Фильтр</h4>

                <button onClick={handleCloseModal}>
                    <img src={Close} alt="" />
                </button>
            </div>
            <div className="modal_hr"></div>
            <div className="modal_body">
                <div className="modal_role">
                    <p className="modal_role_text">Роль</p>
                    <select className="modal_role_choose">
                        <option value="">Администратор</option>
                        <option value="">Курьер</option>
                    </select>
                </div>
                <div className="modal_btns">
                    <CardActionArea className="modal_btn_canse">
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
    )
}

