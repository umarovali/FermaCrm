import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import ModalDelete from "../../../components/Modals/ModalDelete";

export default function ProductItem({ id, name, quantity, price, onDelete, count }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <tr>
        <td>{count}</td>
        <td>{name}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td>
          <Link to={`/products/product-look/${id}`}>
            <div className="table_btn_eye">
              <FiEye className="table-icon" />
            </div>
          </Link>
          <Link to={`/products/product-edit/${id}`}>
            <div className="table_btn_change">
              <LuPencil className="table-icon" />
            </div>
          </Link>
          <div className="table_btn_delete" onClick={handleOpen}>
            <RiDeleteBinLine className="table-icon" />
          </div>
        </td>
      </tr>
      <ModalDelete open={open} setOpen={setOpen} onDelete={onDelete} id={id} name={name} />
    </>
  );
}
