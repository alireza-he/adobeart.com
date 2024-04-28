import React from 'react';
import Grid from "@mui/material/Grid";
import styles from "./Portfolio.module.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const PortfolioBoxes = () => {
    const items = [
        {
            src: "/assets/PortfolioPictures/portfolio_0.png",
            alt: "Portfolio example"
        },
        {
            src: "/assets/PortfolioPictures/portfolio_1.png",
            alt: "Portfolio example"
        },
        {
            src: "/assets/PortfolioPictures/portfolio_2.png",
            alt: "Portfolio example"
        },
        {
            src: "/assets/PortfolioPictures/portfolio_3.png",
            alt: "Portfolio example"
        },
        {
            src: "/assets/PortfolioPictures/portfolio_4.png",
            alt: "Portfolio example"
        },
        {
            src: "/assets/PortfolioPictures/portfolio_5.png",
            alt: "Portfolio example"
        },
    ]

    return (
        <div>
            <div className={"container"}>
                <Typography variant={"h6"} component={"h3"} className={styles.title}>
                    نمونه کارها
                </Typography>
            </div>

            <div className={styles.wrapper}>
                <Grid container spacing={2}>
                {
                    items.map((item, index) => (
                        <Grid item xs={2} key={index} className={styles.parentImg}>
                            <img
                                src={item.src}
                                alt={item.alt}
                                className={styles.img}
                            />
                        </Grid>
                    ))
                }
            </Grid>
            </div>


            <div className={"container"}>
                <Button className={styles.moreBtn}>
                    مشاهده بیشتر
                </Button>
            </div>
        </div>
    );
};

export default PortfolioBoxes;