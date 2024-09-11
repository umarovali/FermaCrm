import React from 'react';
// icons
import AddIcons from "../../assets/icons/add.svg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { CardActionArea } from '@mui/material';

export default function BackEdit({ onSave }) {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <>
            <CardActionArea onClick={() => navigate(-1)} className="user__form__btn1">
                <FaArrowLeftLong />
                {t("back")}
            </CardActionArea>
            <CardActionArea onClick={onSave} className="user__form__btn2">
                <img src={AddIcons} alt="add icon" />
                {t("editsave")}
            </CardActionArea>
        </>
    )
}
