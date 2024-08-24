import React from 'react'
// icons
import AddIcons from "../../assets/icons/add.svg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export default function BackEdit() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <>
            <button onClick={() => navigate(-1)} className="user__form__btn1">
                <FaArrowLeftLong />
                {t("back")}
            </button>
            <button className="user__form__btn2">
                <img src={AddIcons} alt="add icon" />
                {t("editsave")}
            </button>
        </>
    )
}
