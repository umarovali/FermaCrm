import React from 'react';
import { FiEye } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { CardActionArea } from '@mui/material';

export default function UserItem({id, name, tel, role,}) {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{tel}</td>
            <td>{role}</td>
            <td>
                <CardActionArea className="table_btn_eye">
                    <FiEye className="table-icon" />
                </CardActionArea>
                <CardActionArea className="table_btn_cahnge">
                    <LuPencil className="table-icon" />
                </CardActionArea>
                <CardActionArea className="table_btn_delete">
                    <RiDeleteBinLine className="table-icon" />
                </CardActionArea>
            </td>
        </tr>
    )
}
