import React from 'react';
import Image from "next/image";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import styles from "./NewContent.module.css";
import DateBlog from "@/components/BlogsPage/DateBlog";

const NewContent = ({NewContentItem}) => {
    return (
        <>
            <Typography component={"h3"} variant={"subtitle1"} className={styles.latestContentTitle}>
                جدیدترین مطالب
            </Typography>

            <div className={styles.latestContentItems}>
                {
                    NewContentItem.map(item => (
                        <Grid key={item.id} container spacing={2} className={styles.latestContentItem}>
                            <Grid item md={3}>
                                <div className={styles.imgLatestContentItemWrapper}>
                                    <Image
                                        src={item.src}
                                        alt={""}
                                        width={100}
                                        height={100}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography component={"text"} variant={"subtitle2"} className={styles.text}>
                                    {item.description}
                                </Typography>

                                <DateBlog date={item.publicationDate}/>
                            </Grid>
                        </Grid>
                    ))
                }
            </div>
        </>
    );
};

export default NewContent;