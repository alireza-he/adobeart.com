import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import Image from "next/image";
import styles from "./Pages.module.css";

const Pages = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const router = useRouter();

    const items = [
        {
            link: "/Ae",
            src: "/assets/pagesIcons/Ae.svg",
            alt: "Ae",
            backgroundColor: "#9999F9"
        },
        {
            link: "/An",
            src: "/assets/pagesIcons/An.svg",
            alt: "An",
            backgroundColor: "#9999F9"
        },
        {
            link: "/Pr",
            src: "/assets/pagesIcons/Pr.svg",
            alt: "Pr",
            backgroundColor: "#9999F9"
        },
        {
            link: "/Lr",
            src: "/assets/pagesIcons/Lr.svg",
            alt: "Lr",
            backgroundColor: "#55A5F9"
        },
        {
            link: "/Ps",
            src: "/assets/pagesIcons/Ps.svg",
            alt: "Ps",
            backgroundColor: "#31A8FE"
        },
        {
            link: "/Fr",
            src: "/assets/pagesIcons/Fr.svg",
            alt: "Fr",
            backgroundColor: "#55A5F9"
        },
        {
            link: "/Sa",
            src: "/assets/pagesIcons/Sa.svg",
            alt: "Sa",
            backgroundColor: "#AAE559"
        },
        {
            link: "/Dn",
            src: "/assets/pagesIcons/Dn.svg",
            alt: "Dn",
            backgroundColor: "#AAE559"
        },
        {
            link: "/Xd",
            src: "/assets/pagesIcons/Xd.svg",
            alt: "Xd",
            backgroundColor: "#FF2BC2"
        },
        {
            link: "/Dw",
            src: "/assets/pagesIcons/Dw.svg",
            alt: "Dw",
            backgroundColor: "#EE6FF0"
        },
        {
            link: "/Id",
            src: "/assets/pagesIcons/Id.svg",
            alt: "Id",
            backgroundColor: "#EC4E68"
        },
        {
            link: "/Ai",
            src: "/assets/pagesIcons/Ai.svg",
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
        <div className={styles.wrapper}>
            <div className={styles.items}>
                {items.map((item, index) => (
                    <Link
                        href={item.link}
                        key={index}
                        className={`${styles.item} ${styles['item-' + (index + 1)]} ${index === activeIndex ? styles['item-' + (index + 1) + '-active'] : ''}`}
                        onClick={() => handleClick(index)}
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
    );
};

export default Pages;


// import React, {useState, useEffect} from 'react';
// import Link from "next/link";
// import Image from "next/image";
// import styles from "./Pages.module.css";
//
// const Pages = () => {
//     const [activeIndex, setActiveIndex] = useState(null);
//
//     useEffect(() => {
//         // بارگذاری وضعیت فعال بودن باکس از localStorage
//         const savedActiveIndex = localStorage.getItem('activeIndex');
//         if (savedActiveIndex !== null) {
//             setActiveIndex(parseInt(savedActiveIndex, 10));
//         }
//     }, []);
//
//     const handleClick = (index) => {
//         setActiveIndex(index);  // ذخیره وضعیت فعال بودن در state
//         localStorage.setItem('activeIndex', index);  // ذخیره وضعیت فعال بودن در localStorage
//     };
//
//     const items = [
//         {
//             link: "/Ae",
//             src: "/assets/pagesIcons/Ae.svg",
//             alt: "Ae",
//             backgroundColor: "#9999F9"
//         },
//         {
//             link: "/An",
//             src: "/assets/pagesIcons/An.svg",
//             alt: "An",
//             backgroundColor: "#9999F9"
//         },
//         {
//             link: "/Pr",
//             src: "/assets/pagesIcons/Pr.svg",
//             alt: "Pr",
//             backgroundColor: "#9999F9"
//         },
//         {
//             link: "/Lr",
//             src: "/assets/pagesIcons/Lr.svg",
//             alt: "Lr",
//             backgroundColor: "#55A5F9"
//         },
//         {
//             link: "/Ps",
//             src: "/assets/pagesIcons/Ps.svg",
//             alt: "Ps",
//             backgroundColor: "#31A8FE"
//         },
//         {
//             link: "/Fr",
//             src: "/assets/pagesIcons/Fr.svg",
//             alt: "Fr",
//             backgroundColor: "#55A5F9"
//         },
//         {
//             link: "/Sa",
//             src: "/assets/pagesIcons/Sa.svg",
//             alt: "Sa",
//             backgroundColor: "#AAE559"
//         },
//         {
//             link: "/Dn",
//             src: "/assets/pagesIcons/Dn.svg",
//             alt: "Dn",
//             backgroundColor: "#AAE559"
//         },
//         {
//             link: "/Xd",
//             src: "/assets/pagesIcons/Xd.svg",
//             alt: "Xd",
//             backgroundColor: "#FF2BC2"
//         },
//         {
//             link: "/Dw",
//             src: "/assets/pagesIcons/Dw.svg",
//             alt: "Dw",
//             backgroundColor: "#EE6FF0"
//         },
//         {
//             link: "/Id",
//             src: "/assets/pagesIcons/Id.svg",
//             alt: "Id",
//             backgroundColor: "#EC4E68"
//         },
//         {
//             link: "/Ai",
//             src: "/assets/pagesIcons/Ai.svg",
//             alt: "Ai",
//             backgroundColor: "#F2A032"
//         },
//     ]
//
//     return (
//         <div className={styles.wrapper}>
//             <div className={styles.items}>
//                 {
//                     items.map((item, index) => (
//                         <Link
//                             href={item.link}
//                             key={index}
//                             className={`${styles.item} ${styles['item-' + (index + 1)]} ${index === activeIndex ? styles['item-' + (index + 1) + '-active'] : ''}`}
//                             onClick={() => handleClick(index)}
//                         >
//                             <Image
//                                 src={item.src}
//                                 alt={item.alt}
//                                 width={35}
//                                 height={35}
//                             />
//                         </Link>
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };
//
// export default Pages;
