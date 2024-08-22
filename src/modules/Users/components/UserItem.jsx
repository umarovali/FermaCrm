import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { CardActionArea, Modal, Box } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { RiCloseCircleLine, RiDeleteBin5Line } from "react-icons/ri";

export default function UserItem({ id, name, tel, role, onDelete }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleConfirmDelete = () => {
    onDelete(id);
    handleClose();
  };

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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="delete-confirmation-title"
        aria-describedby="delete-confirmation-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 700,  
            bgcolor: "#fff",
            borderRadius: "16px",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="table__modal">
            <div className="table__modal__header">
              <h4>Удалить</h4>
              <button onClick={handleClose}>
                <IoClose />
              </button>
            </div>
            <hr className="table__modal__hr" />
            <div className="table__modal__body">
              <h2>Вы действительно хотите удалить "{name}"?</h2>
              <div className="table__modal__body-btns">
                <button className="btns__1" onClick={handleClose}>
                  <RiCloseCircleLine /> Отменить
                </button>
                <button className="btns__2" onClick={handleConfirmDelete}>
                  <RiDeleteBin5Line /> Да, удалить
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
