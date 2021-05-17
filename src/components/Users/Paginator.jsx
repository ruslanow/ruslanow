import styles from "./Users.module.sass";
import React from "react";

export const Paginator = (props) => {
    let totalPageCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];

    for (let i = 1; totalPageCount >= i; i++) {
        pages.push(i);
    }
    return (
        <div>
        {
            pages.map(p => {
                return <span className={props.pageNumber === p ? styles.selectedPage : styles.page}
                             onClick={(e) => {
                                 props.onPageChange(p)
                             }}> {p} </span>
            })
        }
        </div>
    )
}