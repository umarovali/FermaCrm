import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import ModalDelete from "../../../components/Modals/ModalDelete";

export default function ClientsItem({ id, name, tel, inn, courier, onDelete, count }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    onDelete(id);
    handleClose();
  };

  return (
    <>
      <tr>
        <td>{count}</td>
        <td>{name}</td>
        <td>{tel}</td>
        <td>{inn}</td>
        <td>{courier ? courier : "N/A"}</td>
        <td>
          <Link to={`/clients/client-look/${id}`}>
            <CardActionArea className="table_btn_eye">
              <FiEye className="table_icon" />
            </CardActionArea>
          </Link>
          <Link to={`/clients/client-edit/${id}`}>
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
        onDelete={handleDelete} 
        id={id} 
        name={name} 
      />
    </>
  );
}
