import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Image from "next/image";
import Link from "@/components/Link";
import styles from "./Pages.module.css";

const items = [
    {
        link: "/Ae",
        src: "/assets/PagesIcons/Ae.svg",
        alt: "Ae",
        backgroundColor: "#9999F9"
    },
    {
        link: "/An",
        src: "/assets/PagesIcons/An.svg",
        alt: "An",
        backgroundColor: "#9999F9"
    },
    {
        link: "/Pr",
        src: "/assets/PagesIcons/Pr.svg",
        alt: "Pr",
        backgroundColor: "#9999F9"
    },
    {
        link: "/Lr",
        src: "/assets/PagesIcons/Lr.svg",
        alt: "Lr",
        backgroundColor: "#55A5F9"
    },
    {
        link: "/Ps",
        src: "/assets/PagesIcons/Ps.svg",
        alt: "Ps",
        backgroundColor: "#31A8FE"
    },
    {
        link: "/Fr",
        src: "/assets/PagesIcons/Fr.svg",
        alt: "Fr",
        backgroundColor: "#55A5F9"
    },
    {
        link: "/Sa",
        src: "/assets/PagesIcons/Sa.svg",
        alt: "Sa",
        backgroundColor: "#AAE559"
    },
    {
        link: "/Dn",
        src: "/assets/PagesIcons/Dn.svg",
        alt: "Dn",
        backgroundColor: "#AAE559"
    },
    {
        link: "/Xd",
        src: "/assets/PagesIcons/Xd.svg",
        alt: "Xd",
        backgroundColor: "#FF2BC2"
    },
    {
        link: "/Dw",
        src: "/assets/PagesIcons/Dw.svg",
        alt: "Dw",
        backgroundColor: "#EE6FF0"
    },
    {
        link: "/Id",
        src: "/assets/PagesIcons/Id.svg",
        alt: "Id",
        backgroundColor: "#EC4E68"
    },
    {
        link: "/Ai",
        src: "/assets/PagesIcons/Ai.svg",
        alt: "Ai",
        backgroundColor: "#F2A032"
    },
];

const IconMenu = () => {
    const router = useRouter();

    const activeIndex = items.findIndex(x => router.asPath.toLowerCase().includes(x.link.toLowerCase()))

    return (
        <div className={"container mt_1-5rem"}>
            <div className={styles.wrapper}>
                <div className={styles.items}>
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className={styles.item}
                            style={{backgroundColor: activeIndex === index ? item.backgroundColor : undefined}}
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={35}
                                height={35}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IconMenu;