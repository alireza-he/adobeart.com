import React from "react";
import Image from "next/image";
import Grid from '@mui/material/Grid';
// import {useNotification} from "notify";
import dynamic from "next/dynamic";
import styles from "./Footer.module.css"
import Typography from "@mui/material/Typography";

const DoneIcon = dynamic(() => import("@mui/icons-material/Done"), {ssr: false})

const Footer = () => {
    // const data = usePublicData()?.footer;

    return (
        <footer className={styles.FooterDiv}>
            <div className="container">
                <Grid container spacing={2} className={styles.bodyFooterDiv}>
                    <div className={styles.logoSiteFooter}>
                        <Image src={""} alt={""}/>
                    </div>
                    <div>
                    </div>
                    <div>
                        <Typography>
                            AdobeARTS.com کلیه حقوق وب سایت برای AdobeARTS محفوظ است - طراحی سایت و توسعه توسط
                        </Typography>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer;
