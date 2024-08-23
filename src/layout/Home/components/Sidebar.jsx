import React from 'react';
import SidebarItem from './SidebarItem';
// react icons
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
// import img
import Logo from "../../../assets/images/logo.svg"

export default function Sidebar() {
    return (
        <nav className='sidebar'>
            <img src={Logo} alt="Logo site" />

            <p className='sidebar_menu'>menu</p>

            <ul className='sidebar_list'>
                <SidebarItem link="/user" Icon={HiOutlineBuildingOffice2} text={"Пользователи"} />
                <SidebarItem link="/products" Icon={IoSettingsOutline} text={"Продукты"} />
                <SidebarItem link="/clients" Icon={IoSettingsOutline} text={"Клиенты"} />
                <SidebarItem link="/couriers" Icon={IoSettingsOutline} text={"Курьеры"} />
                <SidebarItem link="/orders" Icon={IoSettingsOutline} text={"Заказы"} />
            </ul>
        </nav>
    )
}
