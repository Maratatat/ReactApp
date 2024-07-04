import {useMemo} from 'react';

export const UsePagination = (totalPages) => {

    const hook = useMemo(() => {
        let pages = []
        for (let i = 0; i < totalPages; i++) {
            pages.push(i + 1);
        }
        return pages;
    }, [totalPages]);

    return hook;
};

