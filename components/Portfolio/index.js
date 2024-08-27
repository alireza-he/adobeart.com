import React from 'react';
import Grid from "@mui/material/Grid";
import Carousel from "@/components/Carousel";
import styles from "./Portfolio.module.css";
import ViewMoreButton from "@/components/Buttons/ViewMoreButton";
import TitleBoxes from "@/components/TitleBoxes";

const PortfolioBoxes = ({data}) => {
    return (
        <>
            <div className={"container"}>
                <TitleBoxes title={data.title}/>

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
                    <ViewMoreButton link={"/Portfolio"}/>
                }

                <input/>
            </div>
        </>
    );
};

export default PortfolioBoxes;