import React from 'react';
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import styles from "./BlogPage.module.css";
import Link from "@/components/Link";

const BlogPage = () => {
    const data = [
        {
            src: "/assets/blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            writer: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
        {
            src: "/assets/blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            writer: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
        {
            src: "/assets/blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            writer: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
        {
            src: "/assets/blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            writer: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
        {
            src: "/assets/blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            writer: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
        {
            src: "/assets/blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            writer: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
        {
            src: "/assets/blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            writer: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
        {
            src: "/assets/blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            writer: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
        {
            src: "/assets/blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            writer: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
    ]

    return (
        <Grid container spacing={{xs: 2, md: 5}}>
            {data.map((_, i) => (
                <Grid key={i} item xs={12} md={6} lg={4}>
                    <Link href={""} className={styles.containerBox}>
                        <Image
                            src={_.src}
                            alt={_.title}
                            width={1000}
                            height={400}
                        />
                        <div className={styles.bottomContainerBox}>
                            <Typography component={"h4"} variant={"subtitle1"}>{_.title}</Typography>
                            <div className={styles.footerBox}>
                                <div className={styles.avatarAndName}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                                    <Typography component={"caption"} span>{_.writer}</Typography>
                                </div>
                                <div className={styles.date}>{_.date}</div>
                            </div>
                        </div>
                    </Link>
                </Grid>
            ))
            }
        </Grid>
    );
};

export default BlogPage;