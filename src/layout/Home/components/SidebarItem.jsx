import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SidebarItem({ link, Icon, text }) {
    return (
        <li className='sidebar_item'>
            <NavLink to={link}>
                <Icon className="item_icon" />
                <p className='item_text'>{text}</p>
            </NavLink>
        </li>
    )
}
