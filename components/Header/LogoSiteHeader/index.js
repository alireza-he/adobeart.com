import React from 'react';
import Link from "next/link";
import styles from "../Header.module.css";

const LogoSiteHeader = () => {
    return (
        <Link href="/" style={{width: "fit-content"}}>
            <img
                src="/assets/logoHeader.jpg"
                alt="islamic sources logo"
                className={styles.HeaderLogo}
            />
        </Link>
    );
};

export default LogoSiteHeader;