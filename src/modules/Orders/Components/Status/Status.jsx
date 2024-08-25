import React from "react";

const StatusNew = () => {
    return (
        <div className='status_new'>Новый</div>
    )
}

const StatusPaid = () => {
    return (
        <div className='status_paid'>Оплачено</div>
    )
}

const StatusDelivUnpaid = () => {
    return (
        <div className='status_deliv_unpaid'>Доставлено, неоплачено</div>
    )
}

const StatusAccepted = () => {
    return (
        <div className='status_accepted'>Заказ принят</div>
    )
}

export { StatusNew, StatusPaid, StatusDelivUnpaid, StatusAccepted }