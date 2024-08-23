import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import ModalDelete from "../../../components/Modals/ModalDelete";

export default function UserItem({ id, name, tel, role }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{tel}</td>
        <td>{role}</td>
        <td>
          <Link to={"/user/user_look"}>
            <CardActionArea className="table_btn_eye">
              <FiEye className="table-icon" />
            </CardActionArea>
          </Link>
          <Link to={"/user/user_edit"}>
            <CardActionArea className="table_btn_change">
              <LuPencil className="table-icon" />
            </CardActionArea>
          </Link>
          <CardActionArea className="table_btn_delete" onClick={handleOpen}>
            <RiDeleteBinLine className="table-icon" />
          </CardActionArea>
        </td>
      </tr>
      <ModalDelete open={open} setOpen={setOpen} />
    </>
  );
}
