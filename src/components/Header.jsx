import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
// import images
import LanguageIconRu from "../assets/images/languageru.webp";
import LanguageIconKg from "../assets/images/languagekg.jpeg";
import LanguageIconUz from "../assets/images/languageuz.webp";
import Avatar from "../assets/images/avatar.svg";
// import react-icons
import { IoIosArrowDown } from "react-icons/io";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsRu from "../../public/locale/translationsru";
import translationsUz from "../../public/locale/translationsuz";
import translationsKg from "../../public/locale/translationsKg";

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: translationsRu },
    uz: { translation: translationsUz },
    kg: { translation: translationsKg },
  },
  lng: "ru",
  fallbackLng: "ru",
});

export default function Header({ text }) {
  const languageOptions = [
    { code: "ru", icon: LanguageIconRu, name: "Ру", value: "ru" },
    { code: "kg", icon: LanguageIconKg, name: "Кы", value: "kg" },
    { code: "uz", icon: LanguageIconUz, name: "Уз", value: "uz" },
  ];

  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setLanguageDropdownOpen(false);
    changeLang(language.value);
    localStorage.setItem("selectedLanguage", language.value);
  };

  const changeLang = (value) => {
    i18n.changeLanguage(value);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage) {
      const language = languageOptions.find(
        (lang) => lang.value === savedLanguage
      );
      if (language) {
        setSelectedLanguage(language);
        changeLang(savedLanguage);
      }
    }
  }, []);

  const { t } = useTranslation();

  const handleLogout = () => {
    localStorage.clear(); 
    window.location.href = "/login"; 
  };
  
  return (
    <header className="header">
      <div className="container">
        <div className="header_wrapper">
          <h1 className="header_title">{text}</h1>

          <div className="header_language_profil">
            <div className="header_language" onClick={toggleLanguageDropdown}>
              <div className="header_language_name">
                <img
                  className="language_icon"
                  src={selectedLanguage.icon}
                  alt="Language"
                />
                <p className="language_name">{selectedLanguage.name}</p>
              </div>
              <IoIosArrowDown
                className={`header_language_arrow ${
                  isLanguageDropdownOpen ? "open" : ""
                }`}
              />
              {isLanguageDropdownOpen && (
                <div className="language_dropdown">
                  {languageOptions
                    .filter(
                      (language) => language.code !== selectedLanguage.code
                    )
                    .map((language) => (
                      <div
                        key={language.code}
                        className="language_option"
                        onClick={() => handleLanguageChange(language)}
                      >
                        <img
                          className="language_icon"
                          src={language.icon}
                          alt={language.name}
                        />
                        <p className="language_name">{language.name}</p>
                      </div>
                    ))}
                </div>
              )}
            </div>

            <div className="header_profil" onClick={toggleProfileDropdown}>
              <div className="header_profil_avatar_name">
                <img
                  className="header_profil_avatar"
                  src={Avatar}
                  alt="Avatar"
                />
                <div className="header_profil_name">
                  <h2 className="profil_name">Janibek Maxatov</h2>
                  <p className="profil_jobtitle">{t("admin")}</p>
                </div>
              </div>
              <IoIosArrowDown
                className={`header_profil_arrow ${
                  isProfileDropdownOpen ? "open" : ""
                }`}
              />
              {isProfileDropdownOpen && (
                <ul className="profile_dropdown">
                  <li className="profile_option">{t("profile")}</li>
                  <li className="profile_option">{t("settings")}</li>
                  <li className="profile_option" onClick={handleLogout}>
                    {t("logout")}
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
