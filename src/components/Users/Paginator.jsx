import styles from "./Users.module.sass";
import React from "react";

export const Paginator = ({totalCount, pageSize, pageNumber, onPageChange }) => {
    let totalPageCount = Math.ceil(totalCount / pageSize);

    let pages = [];

    for (let i = 1; totalPageCount >= i; i++) {
        pages.push(i);
    }


    return (
        <div>
        {
            pages.map(p => {
                return <span className={pageNumber === p ? styles.selectedPage : styles.page}
                             onClick={(e) => {
                                 onPageChange(p)
                             }}> {p} </span>
            })
        }
        </div>
    )
}