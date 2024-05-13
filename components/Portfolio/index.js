import React from 'react';
import Link from "@/components/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Carousel from "@/components/Carousel";
import styles from "./Portfolio.module.css";

const PortfolioBoxes = ({data}) => {
    return (
        <>
            <div className={"container"}>
                <Typography variant={"h6"} component={"h3"} className={styles.title}>
                    {data.title}
                </Typography>
            </div>

            <Grid container className={styles.wrapper}>
                <div className={"container"}>
                    <Carousel className={styles.carouselDiv}>
                        {data.items.map((item, index) => (
                            <Grid item key={index} className={styles.parentImg}>
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className={styles.img}
                                />
                            </Grid>
                        ))}
                    </Carousel>
                </div>
            </Grid>

            {data.moreBtnText &&
                <div className={"container"}>
                    <Link to={"/Portfolio"} className={styles.parentMorBtn}>
                        <button className={styles.moreBtn}>
                            {data.moreBtnText}
                        </button>
                    </Link>
                </div>}
        </>
    );
};

export default PortfolioBoxes;