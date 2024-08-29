import React, {useState} from 'react';
import Image from "next/image";
import Link from "@/components/Link";
import Pagination from "@/components/Pagination";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import styles from "./BlogPage.module.css";

const BlogPage = () => {
    const data = [
        {
            src: "/assets/Blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            writer: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
        {
            src: "/assets/Blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            writer: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
        {
            src: "/assets/Blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            writer: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
        {
            src: "/assets/Blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            writer: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
        {
            src: "/assets/Blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            writer: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
        {
            src: "/assets/Blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            writer: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
        {
            src: "/assets/Blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            writer: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
        {
            src: "/assets/Blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            writer: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
        {
            src: "/assets/Blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            writer: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
        {
            src: "/assets/Blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            writer: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
        {
            src: "/assets/Blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            writer: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
        {
            src: "/assets/Blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            writer: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
        {
            src: "/assets/Blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            writer: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
    ]
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const currentData = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <>
            <Grid container spacing={{xs: 2, md: 5}}>
                {currentData.map((_, i) => (
                    <Grid key={i} item xs={12} md={6} lg={4}>
                        <Link href={""} className={styles.containerBox}>
                            <Image
                                src={_.src}
                                alt={_.title}
                                width={1000}
                                height={400}
                            />
                            <div className={styles.bottomContainerBox}>
                                <Typography component={"h4"} variant={"subtitle1"} className={styles.title_BCB}>
                                    {_.title}
                                </Typography>
                                <div className={styles.footerBox}>
                                    <div className={styles.avatarAndName}>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="/static/images/avatar/1.jpg"
                                            className={styles.avatarBox}
                                        />
                                        <Typography component={"caption"}
                                                    variant={"caption"}>{_.writer}</Typography>
                                    </div>
                                    <div className={styles.dateBox}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_2476_222)">
                                                <path
                                                    d="M7.99967 3.99998V7.99998L10.6663 9.33331M14.6663 7.99998C14.6663 11.6819 11.6816 14.6666 7.99967 14.6666C4.31778 14.6666 1.33301 11.6819 1.33301 7.99998C1.33301 4.31808 4.31778 1.33331 7.99967 1.33331C11.6816 1.33331 14.6663 4.31808 14.6663 7.99998Z"
                                                    stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2476_222">
                                                    <rect width="16" height="16" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <Typography component={"caption"} variant={"caption"}>{_.date}</Typography>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Grid>
                ))
                }
            </Grid>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </>

    );
};

export default BlogPage;