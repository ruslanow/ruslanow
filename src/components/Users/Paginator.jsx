import React, {useState} from "react";
import {Pagination} from "@material-ui/lab";


export const Paginator = ({totalCount, pageSize, pageNumber, onPageChange, portionSize}) => {

    let totalPageCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; totalPageCount >= i; i++) {
        pages.push(i);
    }



    return (
        <div>
            <Pagination count={totalPageCount} shape="rounded" size={"medium"} page={pageNumber} onChange={(event, page) => {
                onPageChange(page)
            }}/>
        </div>
    )
}