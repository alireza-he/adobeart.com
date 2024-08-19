import React from 'react';
import classNames from "classnames";
import {Button, ButtonGroup} from '@mui/material';
import styles from "./Pagination.module.css";

const Pagination = ({currentPage, totalPages, onPageChange}) => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(
            <Button
                key={i}
                onClick={() => onPageChange(i)}
                className={classNames(styles.btnPages, i === currentPage ? styles.activePage : "")}
            >
                {i}
            </Button>
        );
    }

    return (
        <ButtonGroup variant="text" color="primary" className={styles.btnGroup}>
            <Button onClick={() => onPageChange(currentPage - 1)} className={classNames(styles.afterBtn)}>
                <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6.5L14 6.5M14 6.5L8.58333 1M14 6.5L8.58333 12" stroke="#979797" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </Button>

            <div className={styles.btnPagesBox}>
                {pages}
            </div>
            <Button onClick={() => onPageChange(currentPage + 1)} className={styles.beforeBtn}>
                <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.002 6.5L1.00195 6.5M1.00195 6.5L6.41862 12M1.00195 6.5L6.41862 0.999999"
                          stroke="#979797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </Button>
        </ButtonGroup>
    );
};

export default Pagination;