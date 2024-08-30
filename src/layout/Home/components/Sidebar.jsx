import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import { IoSettingsOutline } from "react-icons/io5";
import { RiBuilding2Line } from "react-icons/ri";
import { BsPersonLinesFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePostAdd } from "react-icons/md";
import Logo from "../../../assets/images/logo.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={`sidebar ${isOpen ? "active" : ""}`}>
      <Link to="/user">
        <img src={Logo} alt="Logo site" />
      </Link>
      <p className="sidebar_menu">{t("menu")}</p>

      <ul className={`sidebar_list ${isOpen ? "open" : ""}`}>
        <SidebarItem link="/user" Icon={RiBuilding2Line} text={t("users")} />
        <SidebarItem
          link="/products"
          Icon={IoSettingsOutline}
          text={t("products")}
        />
        <SidebarItem
          link="/clients"
          Icon={BsPersonLinesFill}
          text={t("customers")}
        />
        <SidebarItem
          link="/couriers"
          Icon={TbTruckDelivery}
          text={t("couriers")}
        />
        <SidebarItem
          link="/orders"
          Icon={MdOutlinePostAdd}
          text={t("orders")}
        />
      </ul>

      <div
        className={`hamburger-menu ${isOpen ? "open" : ""}`}
        onClick={toggleSidebar}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}
