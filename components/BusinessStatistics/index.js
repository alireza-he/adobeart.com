import React from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "./BusinessStatistics.module.css";

const BusinessStatistics = () => {
    const items = [
        {
            icon: "/assets/BusinessStatistics/BusinessStatisticsIcon-0.svg",
            alt: "icon",
            count: 3200,
            title: "نفر مشتری"
        },
        {
            icon: "/assets/BusinessStatistics/BusinessStatisticsIcon-1.svg",
            alt: "icon",
            count: 3700,
            title: "پروژ موفق"
        },
        {
            icon: "/assets/BusinessStatistics/BusinessStatisticsIcon-2.svg",
            alt: "icon",
            count: 185,
            title: "پروژه در حال انجام"
        },
        {
            icon: "/assets/BusinessStatistics/BusinessStatisticsIcon-3.svg",
            alt: "icon",
            count: 25,
            title: "متخصص در مجموعه"
        },
        {
            icon: "/assets/BusinessStatistics/BusinessStatisticsIcon-4.svg",
            alt: "icon",
            count: 14,
            title: "دوره انلاین برگزار شده"
        },
        {
            icon: "/assets/BusinessStatistics/BusinessStatisticsIcon-5.svg",
            alt: "icon",
            count: 2,
            title: "سال فعالیت"
        },
    ]

    return (
        <div className={"container"}>
            <Grid container className={styles.wrapper}>
                {items.map((item, index) => (
                    <Grid item key={index} className={styles.parentItem}>
                        <img src={item.icon} alt={item.alt}/>
                        <span className={styles.count}>{item.count}</span>
                        <Typography className={styles.title}>{item.title}</Typography>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default BusinessStatistics;