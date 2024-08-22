import React from 'react';
import Pagination from '@mui/material/Pagination';

export default function PaginationTable() {
    return (
        <div className='pagination_table'>
            <p className='pagination_all'>Всего 121 штука</p>
            <Pagination count={50} variant="outlined" shape="rounded" siblingCount={2} boundaryCount={1} />
        </div>
    )
}
