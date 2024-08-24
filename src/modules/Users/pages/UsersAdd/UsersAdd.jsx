import React from 'react'
import Header from '../../../../components/Header'
import UserForm from './UsersForm'
import { useTranslation } from "react-i18next";

export default function UserAdd() {
  const { t } = useTranslation();

  return (
    <>
    <Header text={t("useradd")} />
    <UserForm/>
    </>
  )
}
