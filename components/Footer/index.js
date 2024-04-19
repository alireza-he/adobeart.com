import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoSite from "/components/Header/LogoSite";
import Typography from "@mui/material/Typography";
import styles from "./Footer.module.css"

const Footer = () => {
    const socialMediaIcons = [
        {
            link: "http://web.eitaa.com",
            src: "/assets/socialMediaIcons/Eitaa.svg",
            alt: "Eitaa"
        },
        {
            link: "http://web.Telegram.org",
            src: "/assets/socialMediaIcons/Telegram.svg",
            alt: "Telegram"
        },
        {
            link: "http://instagram.com",
            src: "/assets/socialMediaIcons/Instagram.svg",
            alt: "Instagram"
        },
        {
            link: "http://linkedin.com",
            src: "/assets/socialMediaIcons/linkedin.svg",
            alt: "Linkdin"
        },
        {
            link: "http://Pinterest.com",
            src: "/assets/socialMediaIcons/Pinterest.svg",
            alt: "Pinterest"
        },
    ]

    return (
        <footer className={styles.FooterDiv}>
            <div className="container">
                <div className={styles.logoSiteFooter}>
                    <LogoSite/>
                </div>
                <div className={styles.socialMediaBoxRow}>
                    {
                        socialMediaIcons.map((s, index) => (
                            <>
                                <Link href={s.link} key={index}>
                                    <Image src={s.src}
                                           alt={s.alt}
                                           width={25}
                                           height={25}
                                    />
                                </Link>
                                {
                                    index === 1 &&
                                    <div className={styles.lineBetween}></div>
                                }
                            </>
                        ))
                    }
                </div>
                <Typography className={styles.siteRightsText}>
                    کلیه حقوق وب سایت برای AdobeARTS محفوظ است - طراحی سایت و توسعه توسط
                    <span className={styles.siteAddress}>AdobeARTS.com</span>
                </Typography>
            </div>
        </footer>
    )
}

export default Footer;
