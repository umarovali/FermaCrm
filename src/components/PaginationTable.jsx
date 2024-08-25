import React from 'react';
import Pagination from '@mui/material/Pagination';
import { useTranslation } from 'react-i18next';

export default function PaginationTable() {
    const { t } = useTranslation();
    return (
        <div className='pagination_table'>
            <p className='pagination_all'>{t("total")} 121 {t("piece")}</p>
            <Pagination count={50} variant="outlined" shape="rounded" siblingCount={2} boundaryCount={1} />
        </div>
    )
}
