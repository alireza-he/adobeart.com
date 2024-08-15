import React from 'react';
import Link from "next/link";
import styles from "./Buttons.module.css";

const UserButton = () => {
    return (
        <Link href={"/Login"} className={styles.mx_btn}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8 3.42857C7.43491 3.42857 6.88251 3.59614 6.41266 3.91009C5.9428 4.22403 5.57659 4.67026 5.36034 5.19233C5.14409 5.71441 5.08751 6.28888 5.19776 6.84311C5.308 7.39735 5.58012 7.90644 5.9797 8.30602C6.37927 8.7056 6.88837 8.97771 7.4426 9.08796C7.99683 9.1982 8.57131 9.14162 9.09338 8.92537C9.61546 8.70912 10.0617 8.34291 10.3756 7.87306C10.6896 7.4032 10.8571 6.8508 10.8571 6.28571C10.8571 5.52795 10.5561 4.80123 10.0203 4.26541C9.48449 3.72959 8.75776 3.42857 8 3.42857ZM8 8C7.66095 8 7.32951 7.89946 7.04759 7.71109C6.76568 7.52272 6.54596 7.25499 6.41621 6.94174C6.28646 6.6285 6.25251 6.28381 6.31865 5.95127C6.3848 5.61873 6.54807 5.31328 6.78782 5.07353C7.02756 4.83378 7.33302 4.67051 7.66556 4.60437C7.9981 4.53822 8.34278 4.57217 8.65603 4.70192C8.96927 4.83167 9.23701 5.05139 9.42538 5.33331C9.61374 5.61522 9.71429 5.94666 9.71429 6.28571C9.71377 6.74021 9.533 7.17595 9.21162 7.49733C8.89024 7.81871 8.4545 7.99949 8 8Z"
                    fill="#979797"/>
                <path
                    d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346627 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6568C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9976 5.879 15.154 3.84556 13.6542 2.34578C12.1544 0.846012 10.121 0.00238965 8 0ZM4.57143 13.9294V13.1429C4.57193 12.6884 4.7527 12.2526 5.07409 11.9312C5.39547 11.6098 5.83121 11.4291 6.28572 11.4286H9.71429C10.1688 11.4291 10.6045 11.6098 10.9259 11.9312C11.2473 12.2526 11.4281 12.6884 11.4286 13.1429V13.9294C10.3881 14.537 9.20487 14.8571 8 14.8571C6.79513 14.8571 5.61191 14.537 4.57143 13.9294ZM12.5671 13.1005C12.5558 12.3509 12.2504 11.6358 11.7167 11.1093C11.1831 10.5828 10.4639 10.287 9.71429 10.2857H6.28572C5.53606 10.287 4.81692 10.5828 4.28327 11.1093C3.74963 11.6358 3.44422 12.3509 3.43286 13.1005C2.39661 12.1752 1.66585 10.957 1.33734 9.60712C1.00883 8.25729 1.09806 6.83951 1.59323 5.54152C2.08839 4.24353 2.96613 3.12655 4.11021 2.33849C5.2543 1.55044 6.61077 1.12847 8 1.12847C9.38923 1.12847 10.7457 1.55044 11.8898 2.33849C13.0339 3.12655 13.9116 4.24353 14.4068 5.54152C14.9019 6.83951 14.9912 8.25729 14.6627 9.60712C14.3342 10.957 13.6034 12.1752 12.5671 13.1005Z"
                    fill="#979797"/>
            </svg>
        </Link>
    );
};

export default UserButton;