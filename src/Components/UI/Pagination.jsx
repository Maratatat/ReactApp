import React from 'react';
import {UsePagination} from "../../hooks/UsePagination";

const Pagination = ({ChangePage, page, totalPages}) => {
    const pagesArray = UsePagination(totalPages)
    return (
        <div className="page_wrapper">
            {pagesArray.map((p) =>
                <span key={p} onClick={() => ChangePage(p)} className={page === p ? 'page page__current' : 'page'}>
                        {p}
                    </span>
            )}
        </div>
    );
};

export default Pagination;