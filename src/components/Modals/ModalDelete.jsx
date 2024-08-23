import React from 'react';
import { CardActionArea, Modal, Box } from "@mui/material";
import { IoClose } from "react-icons/io5";
import Delete from "../../assets/icons/delete.svg";
import Cancel from "../../assets/icons/cancel.svg";

export default function ModalDelete({ open, setOpen, onDelete, id, name }) {
  const handleClose = () => setOpen(false);

  const handleConfirmDelete = () => {
    onDelete(id);
    handleClose();
  };

  return (
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
        <div className="modal_delete">
          <div className="modal_delete__header">
            <h4>Удалить</h4>
            <IoClose className='modal_close' onClick={handleClose} />
          </div>
          <hr className="modal_delete__hr" />
          <div className="modal_delete__body">
            <h2>Вы действительно хотите удалить "{name}"?</h2>
            <div className="modal_delete__body-btns">
              <CardActionArea className="btns__1" onClick={handleClose}>
                <img src={Cancel} alt="Cancel-icon" /> Отменить
              </CardActionArea>
              <CardActionArea className="btns__2" onClick={handleConfirmDelete}>
                <img src={Delete} alt="Delete-icon" /> Да, удалить
              </CardActionArea>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
