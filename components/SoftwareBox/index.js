import React from 'react';
import styles from "./Software.module.css"
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const SoftwareBox = () => {
    const itemsBox = [
        {
            src: "/favicon.svg",
            alt: "ادوبی آرتس",
            link: "",
            name: "Adobe InDesign"
        },
        {
            src: "/favicon.svg",
            alt: "ادوبی آرتس",
            link: "",
            name: "Adobe InDesign"
        },
        {
            src: "/favicon.svg",
            alt: "ادوبی آرتس",
            link: "",
            name: "Adobe InDesign"
        },
        {
            src: "/favicon.svg",
            alt: "ادوبی آرتس",
            link: "",
            name: "Adobe InDesign"
        },
        {
            src: "/favicon.svg",
            alt: "ادوبی آرتس",
            link: "",
            name: "Adobe InDesign"
        },
        {
            src: "/favicon.svg",
            alt: "ادوبی آرتس",
            link: "",
            name: "Adobe InDesign"
        },
        {
            src: "/favicon.svg",
            alt: "ادوبی آرتس",
            link: "",
            name: "Adobe InDesign"
        },
        {
            src: "/favicon.svg",
            alt: "ادوبی آرتس",
            link: "",
            name: "Adobe InDesign"
        },
        {
            src: "/favicon.svg",
            alt: "ادوبی آرتس",
            link: "",
            name: "Adobe InDesign"
        },
        {
            src: "/favicon.svg",
            alt: "ادوبی آرتس",
            link: "",
            name: "Adobe InDesign"
        },
        {
            src: "/favicon.svg",
            alt: "ادوبی آرتس",
            link: "",
            name: "Adobe InDesign"
        },
        {
            src: "/favicon.svg",
            alt: "ادوبی آرتس",
            link: "",
            name: "Adobe InDesign"
        },
    ]

    return (
        <Grid container className={styles.wrapperBox}>
            {
                itemsBox.map((item, index) => (
                    <div key={index} className={styles.parentItems}>
                        <Grid item xs={10}>
                            <Typography className={styles.nameTraining}>
                                {item.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <img src={item.src} alt={item.alt}/>
                        </Grid>
                    </div>
                ))
            }
        </Grid>
    );
};

export default SoftwareBox;