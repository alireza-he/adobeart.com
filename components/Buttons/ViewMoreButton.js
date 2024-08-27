import React from 'react';
import Link from "@/components/Link";
import styles from "./Buttons.module.css";

const ViewMoreButton = ({link}) => {
    return (
        <Link to={link} className={styles.parentMoreBtn}>
            <button className={styles.moreBtn}>
                مشاهده بیشتر
            </button>
        </Link>
    );
};

export default ViewMoreButton;