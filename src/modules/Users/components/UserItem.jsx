import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { CardActionArea, Modal, Box } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { RiCloseCircleLine, RiDeleteBin5Line } from "react-icons/ri";
import ModalDelete from "../../../components/Modals/ModalDelete";

export default function UserItem({ id, name, tel, role, onDelete }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  // const handleConfirmDelete = () => {
  //   onDelete(id);
  //   handleClose();
  // };

  return (
    <>
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
          <CardActionArea className="table_btn_delete" onClick={handleOpen}>
            <RiDeleteBinLine className="table-icon" />
          </CardActionArea>
        </td>
    
      </tr>
      <ModalDelete open={open} setOpen={setOpen} />
    </>
  );
}
