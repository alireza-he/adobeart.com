import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Image from "next/image";
import Link from "@/components/Link";
import styles from "./Pages.module.css";

const IconMenu = () => {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(null);
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
    const validPaths = items.map(item => item.link);

    useEffect(() => {
        const savedActiveIndex = localStorage.getItem('activeIndex');
        if (validPaths.includes(router.pathname)) {
            if (savedActiveIndex !== null) {
                setActiveIndex(parseInt(savedActiveIndex, 10));
            }
        } else {
            setActiveIndex(null);
            localStorage.removeItem('activeIndex');
        }
    }, [router.pathname]);

    const handleClick = (index) => {
        setActiveIndex(index);
        localStorage.setItem('activeIndex', index);
    };

    return (
        <div className={"container mt_1-5rem"}>
            <div className={styles.wrapper}>
                <div className={styles.items}>
                    {items.map((item, index) => (
                        <Link
                            href={item.link}
                            key={index}
                            className={`
                                ${styles.item} 
                                    ${styles['item-' + (index + 1)]} ${index === activeIndex ?
                                    styles['item-' + (index + 1) + '-active']
                                    : ''
                            }`}
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={35}
                                height={35}
                                onClick={() => handleClick(index)}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IconMenu;