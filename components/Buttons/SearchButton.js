import React from 'react';
import Image from "next/image";
import styles from "./Buttons.module.css";

const SearchButton = () => {
    return (
        <button className={styles.mx_btn}>
            <Image src={"/assets/headerIcons/search.svg"}
                   alt={"login"}
                   width={15}
                   height={15}
            />
        </button>
    );
};

export default SearchButton;