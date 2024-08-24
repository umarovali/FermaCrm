import React from 'react';
// icons
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

export default function BackLook() {
    const navigate = useNavigate();
    return (
        <>
            <button onClicxk={() => navigate(-1)} className="user__form__btn1">
                <FaArrowLeftLong />
                Назад
            </button>
        </>
    )
}
