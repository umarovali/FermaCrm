import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiEye } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import UserItem from "./UserItem";

export default function UserTable() {
  return (
    <section>
      <div className="container">
        <div className="usertable">
          <table className="user_table">
            <thead>
              <tr>
                <th>№</th>
                <th>Ф.И.О.<IoIosArrowDown className="th_icon" /></th>
                <th>Телефон<IoIosArrowDown className="th_icon" /></th>
                <th>Роль<IoIosArrowDown className="th_icon" /></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <UserItem id={1} name="Janibek Maxatov" tel="+99699 807 01 16" role="Курьер" />
              <UserItem id={2} name="Janibek Maxatov" tel="+99699 807 01 16" role="Курьер" />
              <UserItem id={3} name="Janibek Maxatov" tel="+99699 807 01 16" role="Курьер" />
              <UserItem id={4} name="Janibek Maxatov" tel="+99699 807 01 16" role="Курьер" />
              <UserItem id={5} name="Janibek Maxatov" tel="+99699 807 01 16" role="Курьер" />
              <UserItem id={6} name="Janibek Maxatov" tel="+99699 807 01 16" role="Курьер" />
              <UserItem id={7} name="Janibek Maxatov" tel="+99699 807 01 16" role="Курьер" />
              <UserItem id={8} name="Janibek Maxatov" tel="+99699 807 01 16" role="Курьер" />
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
