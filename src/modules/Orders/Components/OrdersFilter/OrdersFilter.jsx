import React, { useState } from 'react';
import OrdersFilterBtn from './OrdersFilterBtn';

export default function OrdersFilter() {
    const [activeButton, setActiveButton] = useState(1);

    const handleClick = (index) => {
        setActiveButton(index);
    };
    
    return (
        <div className='orders_filter'>
            <OrdersFilterBtn index={1} text="Все" active={activeButton} click={handleClick}  />
            <OrdersFilterBtn index={2} text="Новые" active={activeButton} click={handleClick}  />
            <OrdersFilterBtn index={3} text="Оплачено" active={activeButton} click={handleClick}  />
            <OrdersFilterBtn index={4} text="Доставлено, неоплачено" active={activeButton} click={handleClick}  />
            <OrdersFilterBtn index={5} text="Заказ принят" active={activeButton} click={handleClick}  />
        </div>
    )
}
