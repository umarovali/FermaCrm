import React from 'react';
import { FiEye } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";

export default function UserItem({id, name, tel, role,}) {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{tel}</td>
            <td>{role}</td>
            <td>
                <button className="table_btn_eye">
                    <FiEye className="table-icon" />
                </button>
                <button className="table_btn_cahnge">
                    <LuPencil className="table-icon" />
                </button>
                <button className="table_btn_delete">
                    <RiDeleteBinLine className="table-icon" />
                </button>
            </td>
        </tr>
    )
}
