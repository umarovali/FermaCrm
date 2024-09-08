import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import ModalDelete from "../../../components/Modals/ModalDelete";
import save from "../../../assets/icons/save.svg";

export default function OrdersItem({
  id,
  num_id,
  sum,
  paid,
  remainder,
  client,
  status,
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  return (
    <>
      <tr className="table_orders">
        <td>{id}</td>
        <td>{num_id}</td>
        <td>{sum}</td>
        <td>{paid}</td>
        <td>{remainder}</td>
        <td>{client}</td>
        <td>{status}</td>
        <td>
          <Link to={""}>
            <CardActionArea className="table_btn_eye">
              <FiEye className="table_icon" />
            </CardActionArea>
          </Link>
          <Link to={""}>
            <CardActionArea className="table_btn_change">
              <LuPencil className="table_icon" />
            </CardActionArea>
          </Link>
          <CardActionArea className="table_btn_save" onClick={handleOpen}>
            <img src={save} alt="save" />
          </CardActionArea>
          <CardActionArea className="table_btn_delete" onClick={handleOpen}>
            <RiDeleteBinLine className="table_icon" />
          </CardActionArea>
        </td>
      </tr>
      <ModalDelete open={open} setOpen={setOpen} />
    </>
  );
}
