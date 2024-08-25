import React from 'react'
import { CardActionArea } from "@mui/material";

export default function OrdersFilterBtn({ click, text, active, index }) {
    return (
        <CardActionArea
            className={` ${active === index ? 'order_filter_btn ' : 'order_filter_btn_active'}`}
            onClick={() => click(index)}
        >
            {text}
        </CardActionArea>

    )
}
