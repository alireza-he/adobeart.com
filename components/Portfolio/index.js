import React from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Carousel from "@/components/Carousel";
import Link from "@/components/Link";
import styles from "./Portfolio.module.css";

const PortfolioBoxes = () => {
    const items = [{
        src: "/assets/PortfolioPictures/portfolio_0.png", alt: "Portfolio example"
    }, {
        src: "/assets/PortfolioPictures/portfolio_1.png", alt: "Portfolio example"
    }, {
        src: "/assets/PortfolioPictures/portfolio_2.png", alt: "Portfolio example"
    }, {
        src: "/assets/PortfolioPictures/portfolio_3.png", alt: "Portfolio example"
    }, {
        src: "/assets/PortfolioPictures/portfolio_4.png", alt: "Portfolio example"
    }, {
        src: "/assets/PortfolioPictures/portfolio_5.png", alt: "Portfolio example"
    }]

    return (<div>
        <div className={"container"}>
            <Typography variant={"h6"} component={"h3"} className={styles.title}>
                نمونه کارها
            </Typography>
        </div>

        <Grid container className={styles.wrapper}>
            <Carousel className={styles.carouselDiv}>
                {items.map((item, index) => (
                    <Grid item key={index} className={styles.parentImg}>
                        <img
                            src={item.src}
                            alt={item.alt}
                            className={styles.img}
                        />
                    </Grid>
                ))}
            </Carousel>
        </Grid>


        <div className={"container"}>
            <Link to={"/Portfolio"} className={styles.parentMorBtn}>
                <button className={styles.moreBtn}>
                    مشاهده بیشتر
                </button>
            </Link>
        </div>
    </div>);
};

export default PortfolioBoxes;