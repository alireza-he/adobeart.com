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

                <Grid container spacing={2} className={styles.wrapper}>
                    <Carousel className={styles.carouselDiv}>
                        {data.items.map((item, index) => (
                            <Grid
                                item
                                xs={11}
                                key={index}
                                className={data.title === "اعضای تیم" ? styles.parentImgTeamMembers : styles.parentImg}
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className={styles.img}
                                />

                                {
                                    data.title === "اعضای تیم" ?
                                        <>
                                            <span className={styles.fullName}>{item.fullName}</span>
                                            <span className={styles.profession}>{item.profession}</span>
                                        </>
                                        :
                                        ""
                                }
                            </Grid>
                        ))}
                    </Carousel>
                </Grid>

                {data.moreBtnText &&
                    <Link to={"/Portfolio"} className={styles.parentMorBtn}>
                        <button className={styles.moreBtn}>
                            {data.moreBtnText}
                        </button>
                    </Link>
                }

                <input/>
            </div>
        </>
    );
};

export default PortfolioBoxes;