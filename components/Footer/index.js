import React from "react";
import Image from "next/image";
import Grid from '@mui/material/Grid';
// import {useNotification} from "notify";
import dynamic from "next/dynamic";
import styles from "./Footer.module.css"
import Typography from "@mui/material/Typography";
import Link from "next/link";

const DoneIcon = dynamic(() => import("@mui/icons-material/Done"), {ssr: false})

const Footer = () => {
    // const data = usePublicData()?.footer;
    const socialMediaIcons = [
        {
            link: "/",
            src: "/assets/Pinterest.svg",
            alt: "Pinterest"
        },
        {
            link: "/",
            src: "/assets/Linkdin.svg",
            alt: "Linkdin"
        },
        {
            link: "/",
            src: "/assets/Instagram.svg",
            alt: "Instagram"
        },
        {
            link: "/",
            src: "/assets/Telegram.svg",
            alt: "Telegram"
        },
        {
            link: "/",
            src: "/assets/Eitaa.svg",
            alt: "Eitaa"
        },
    ]

    return (
        <footer className={styles.FooterDiv}>
            <div className="container">
                <Grid container spacing={2} className={styles.bodyFooterDiv}>
                    <div className={styles.logoSiteFooter}>
                        <Link href={"/"}>
                            <Image src={"/assets/AdobeArtsLogo.png"}
                                   alt={"AdobeArts"}
                                   width={175}
                                   height={175}
                            />
                        </Link>
                    </div>
                    <div className={styles.socialMediaBoxRow}>
                        {
                            socialMediaIcons.map((s, index) => (
                                <Link href={s.link} key={index}>
                                    <Image src={s.src}
                                           alt={s.alt}
                                           width={25}
                                           height={25}
                                    />
                                </Link>
                            ))
                        }
                    </div>
                    <Typography className={styles.siteRightsText}>
                        کلیه حقوق وب سایت برای AdobeARTS محفوظ است - طراحی سایت و توسعه توسط
                        <span className={styles.siteAddress}>AdobeARTS.com</span>
                    </Typography>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer;
