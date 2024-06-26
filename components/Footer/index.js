import React from "react";
import LogoSite from "/components/Header/LogoSite";
import Typography from "@mui/material/Typography";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import styles from "./Footer.module.css";

const Footer = () => {
    const socialMediaIconsData = [
        {
            link: "http://web.Rubika.com",
            src: "/assets/socialMediaIcons/Rubika.svg",
            alt: "Rubika"
        },
        {
            link: "http://web.Telegram.org",
            src: "/assets/socialMediaIcons/Telegram.svg",
            alt: "Telegram"
        },
        {
            link: "http://Gmail.com",
            src: "/assets/socialMediaIcons/Gmail.svg",
            alt: "Gmail"
        },
        {
            link: "http://Youtube.com",
            src: "/assets/socialMediaIcons/Youtube.svg",
            alt: "Youtube"
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

                <SocialMediaIcons socialMediaIconsData={socialMediaIconsData}/>

                <Typography className={styles.siteRightsText}>
                    کلیه حقوق وب سایت برای AdobeARTS محفوظ است - طراحی سایت و توسعه توسط
                    <span className={styles.siteAddress}>AdobeARTS.com</span>
                </Typography>
            </div>
        </footer>
    )
}

export default Footer;
