import React, { useState } from 'react';
import OrdersFilterBtn from './OrdersFilterBtn';
import { useTranslation } from 'react-i18next';

export default function OrdersFilter() {
    const [activeButton, setActiveButton] = useState(1);

    const handleClick = (index) => {
        setActiveButton(index);
    };

    const { t } = useTranslation();
    
    return (
        <div className='orders_filter'>
            <OrdersFilterBtn index={1} text={t("all")} active={activeButton} click={handleClick}  />
            <OrdersFilterBtn index={2} text={t("new")} active={activeButton} click={handleClick}  />
            <OrdersFilterBtn index={3} text={t("paidfor")} active={activeButton} click={handleClick}  />
            <OrdersFilterBtn index={4} text={t("deliverednotpaid")} active={activeButton} click={handleClick}  />
            <OrdersFilterBtn index={5} text={t("orderaccepted")} active={activeButton} click={handleClick}  />
        </div>
    )
}
