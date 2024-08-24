import React from "react";
// icons
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function BackLook() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <button onClick={() => navigate(-1)} className="user__form__btn1">
        <FaArrowLeftLong />
        {t("back")}
      </button>
    </>
  );
}
