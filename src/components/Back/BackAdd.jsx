import React from 'react';
// icons
import AddIcons from "../../assets/icons/add.svg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { CardActionArea } from '@mui/material';

export default function BackAdd({ formRef }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleExternalSubmit = (evt) => {
    evt.preventDefault();
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  return (
    <>
      <CardActionArea onClick={() => navigate(-1)} className="user__form__btn1">
        <FaArrowLeftLong />
        {t("back")}
      </CardActionArea>
      <CardActionArea type='button' onClick={handleExternalSubmit} className="user__form__btn2">
        <img src={AddIcons} alt="add icon" />
        {t("addsave")}
      </CardActionArea>
    </>
  )
}
