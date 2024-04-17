import React from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from "./Pages.module.css"

const Pages = () => {
    const items = [
        {
            link: "/Ae",
            src: "/assets/pagesIcons/Ae.svg",
            alt: "Ae"
        },
        {
            link: "/An",
            src: "/assets/pagesIcons/An.svg",
            alt: "An"
        },
        {
            link: "/Pr",
            src: "/assets/pagesIcons/Pr.svg",
            alt: "Pr"
        },
        {
            link: "/Lr",
            src: "/assets/pagesIcons/Lr.svg",
            alt: "Lr"
        },
        {
            link: "/Ps",
            src: "/assets/pagesIcons/Ps.svg",
            alt: "Ps"
        },
        {
            link: "/Fr",
            src: "/assets/pagesIcons/Fr.svg",
            alt: "Fr"
        },
        {
            link: "/Sa",
            src: "/assets/pagesIcons/Sa.svg",
            alt: "Sa"
        },
        {
            link: "/Dn",
            src: "/assets/pagesIcons/Dn.svg",
            alt: "Dn"
        },
        {
            link: "/Xd",
            src: "/assets/pagesIcons/Xd.svg",
            alt: "Xd"
        },
        {
            link: "/Dw",
            src: "/assets/pagesIcons/Dw.svg",
            alt: "Dw"
        },
        {
            link: "/Id",
            src: "/assets/pagesIcons/Id.svg",
            alt: "Id"
        },
        {
            link: "/Ai",
            src: "/assets/pagesIcons/Ai.svg",
            alt: "Ai"
        },
    ]

    return (
        <div className={styles.wrapper}>
            <div className={styles.items}>
                {
                    items.map((item, index) => (
                        <Link href={item.link} key={index} className={styles.item}>
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={25}
                                height={25}
                            />
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Pages;