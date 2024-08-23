import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { CardActionArea } from "@mui/material";
import ModalDelete from "../../../components/Modals/ModalDelete";

export default function ProductItem({ id, name, quantity, price, }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>
                    <CardActionArea className="table_btn_eye">
                        <FiEye className="table-icon" />
                    </CardActionArea>
                    <CardActionArea className="table_btn_cahnge">
                        <LuPencil className="table-icon" />
                    </CardActionArea>
                    <CardActionArea className="table_btn_delete" onClick={handleOpen}>
                        <RiDeleteBinLine className="table-icon" />
                    </CardActionArea>
                </td>
            </tr>
            <ModalDelete open={open} setOpen={setOpen} />
        </>
    );
}
