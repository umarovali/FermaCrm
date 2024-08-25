import React from "react";
import { useTranslation } from "react-i18next";


const StatusNew = () => {
    const { t } = useTranslation();
    return (
        <div className='status_new'>{t("news")}</div>
    )
}

const StatusPaid = () => {
    const { t } = useTranslation();
    return (
        <div className='status_paid'>{t("paidfor")}</div>
    )
}

const StatusDelivUnpaid = () => {
    const { t } = useTranslation();
    return (
        <div className='status_deliv_unpaid'>{t("deliverednotpaid")}</div>
    )
}

const StatusAccepted = () => {
    const { t } = useTranslation();
    return (
        <div className='status_accepted'>{t("orderaccepted")}</div>
    )
}

export { StatusNew, StatusPaid, StatusDelivUnpaid, StatusAccepted }