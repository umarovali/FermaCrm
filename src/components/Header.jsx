import React from 'react';
// import img
import LanguageIcon from "../assets/images/language.svg";
import Avatar from "../assets/images/avatar.svg";
// import react-icons
import { IoIosArrowDown } from "react-icons/io";

export default function Header({ text }) {
    return (
        <header className="header">
            <div className="container">
                <div className="header_wrapper">
                    <h1 className='header_title'>{text}</h1>

                    <div className="header_language_profil">
                        <div className="header_language">
                            <div className="header_language_name">
                                <img className='language_icon' src={LanguageIcon} alt="" />
                                <p className='language_name'>Ру</p>
                            </div>
                            <IoIosArrowDown className='header_language_arrow' />
                        </div>

                        <div className="header_profil">
                            <div className="header_profil_avatar_name">
                                <img className='header_profil_avatar' src={Avatar} alt="" />
                                <div className="header_profil_name">
                                    <h2 className="profil_name">Janibek Maxatov</h2>
                                    <p className='profil_jobtitle'>Admin</p>
                                </div>
                            </div>
                            <IoIosArrowDown className='header_profil_arrow' />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
