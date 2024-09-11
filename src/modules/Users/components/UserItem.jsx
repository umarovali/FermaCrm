import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import ModalDelete from "../../../components/Modals/ModalDelete";

export default function UserItem({ item, onDelete, index }) {
  const { full_name, phone_number, user_roles, id } = item;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <tr>
        <td>{index}</td>
        <td>{full_name}</td>
        <td>{phone_number}</td>
        <td>{user_roles.length > 0 ? user_roles[0] : "No Role"}</td>
        <td>
          <Link to={`/user/user_look/${id}`}>
            <CardActionArea className="table_btn_eye">
              <FiEye className="table_icon" />
            </CardActionArea>
          </Link>
          <Link to={`/user/user_edit/${id}`}>
            <CardActionArea className="table_btn_change">
              <LuPencil className="table_icon" />
            </CardActionArea>
          </Link>
          <CardActionArea className="table_btn_delete" onClick={handleOpen}>
            <RiDeleteBinLine className="table_icon" />
          </CardActionArea>
        </td>
      </tr>
      <ModalDelete
        open={open}
        setOpen={setOpen}
        onDelete={onDelete}
        id={id}
        name={full_name}
      />
    </>
  );
}
