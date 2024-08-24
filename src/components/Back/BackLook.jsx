import React from "react";
// icons
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CardActionArea } from "@mui/material";

export default function BackLook() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <CardActionArea onClick={() => navigate(-1)} className="user__form__btn1">
        <FaArrowLeftLong />
        {t("back")}
      </CardActionArea>
    </>
  );
}
