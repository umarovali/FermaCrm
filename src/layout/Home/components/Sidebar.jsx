import React from 'react';
import SidebarItem from './SidebarItem';
// react icons
import { IoSettingsOutline } from "react-icons/io5";
import { RiBuilding2Line } from "react-icons/ri";
import { BsPersonLinesFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePostAdd } from "react-icons/md";
// import img
import Logo from "../../../assets/images/logo.svg"

export default function Sidebar() {
    return (
        <nav className='sidebar'>
            <img src={Logo} alt="Logo site" />

            <p className='sidebar_menu'>menu</p>

            <ul className='sidebar_list'>
                <SidebarItem link="/user" Icon={RiBuilding2Line} text={"Пользователи"} />
                <SidebarItem link="/products" Icon={IoSettingsOutline} text={"Продукты"} />
                <SidebarItem link="/clients" Icon={BsPersonLinesFill} text={"Клиенты"} />
                <SidebarItem link="/couriers" Icon={TbTruckDelivery} text={"Курьеры"} />
                <SidebarItem link="/orders" Icon={MdOutlinePostAdd} text={"Заказы"} />
            </ul>
        </nav>
    )
}
