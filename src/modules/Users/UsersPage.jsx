import React from "react";
import { Route, Routes } from "react-router-dom";
import User from "./components/User";
import UserAdd from "./pages/UsersAdd/UsersAdd";
import UsersEdit from "./pages/UsersEdit/UsersEdit";
import UserLook from "./pages/UserLook/UserLook";

export default function UsersPage() {
  return (
    <Routes>
      <Route path="/" element={<User />} />
      <Route path="/user_add" element={<UserAdd />} />
      <Route path="/user_edit" element={<UsersEdit />} />
      <Route path="/user_look" element={<UserLook />} />
    </Routes>
  );
}
