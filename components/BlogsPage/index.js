import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "@/components/Link";
import Pagination from "@/components/Pagination";
import UserAvatar from "@/components/UserAvatar";
import DateBlog from "@/components/BlogsPage/DateBlog";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "./BlogsPage.module.css";

const BlogsPage = () => {
    const data = [
        {
            id: 1,
            src: "/assets/Blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            author: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
        {
            id: 2,
            src: "/assets/Blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            author: "رضا حیدری",
            date: "1403/12/12"
        },
        {
            id: 3,
            src: "/assets/Blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            author: "مجتبی ولی",
            date: "1403/12/12"
        },
        {
            id: 4,
            src: "/assets/Blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            author: "رضا ولی زاده",
            date: "1403/12/12"
        },
        {
            id: 5,
            src: "/assets/Blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            author: "علی ولی زاده",
            date: "1403/12/12"
        },
        {
            id: 6,
            src: "/assets/Blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            author: "محمد ولی زاده",
            date: "1403/12/12"
        },
        {
            id: 7,
            src: "/assets/Blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            author: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
        {
            id: 8,
            src: "/assets/Blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            author: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
        {
            id: 9,
            src: "/assets/Blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            author: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
        {
            id: 10,
            src: "/assets/Blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            author: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
        {
            id: 11,
            src: "/assets/Blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            author: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
        {
            id: 12,
            src: "/assets/Blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            author: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
        {
            id: 13,
            src: "/assets/Blog/blog_Photo01.jpg",
            title: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی متن و عنوان ساختگی ایپسوم",
            author: "مجتبی ولی زاده",
            date: "1403/12/12"
        },
    ]
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    const currentData = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    if (!hydrated) {
        return null;
    }

    return (
        <>
            <Grid container spacing={{xs: 2, md: 5}}>
                {currentData.map((item) => (
                    <Grid key={item.id} item xs={12} md={6} lg={4}>
                        <Link href={`/Blogs/${item.id}`} className={styles.containerBox}>
                            <Image
                                src={item.src}
                                alt={item.title}
                                width={1000}
                                height={400}
                            />
                            <div className={styles.bottomContainerBox}>
                                <Typography component={"h4"} variant={"subtitle1"} className={styles.title_BCB}>
                                    {item.title}
                                </Typography>
                                <div className={styles.footerBox}>
                                    <UserAvatar
                                        classNameWrapper={styles.avatarAndName}
                                        stylesAvatar={{
                                            width: "2rem",
                                            height: "2rem",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                        name={item.author}
                                    />

                                    <DateBlog date={item.date}/>
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

export default BlogsPage;