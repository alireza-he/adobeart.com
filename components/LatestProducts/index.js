import React from 'react';
import Typography from "@mui/material/Typography";
import Link from "@/components/Link";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styles from "./LatestProducts.module.css";


const LatestProducts = () => {
    const itemData = [
        {
            src: '/assets/latestProducts/latestProducts-01.jpg',
            title: 'Latest products',
        },
        {
            src: '/assets/latestProducts/latestProducts-02.jpg',
            title: 'Latest products',
        },
        {
            src: '/assets/latestProducts/latestProducts-03.jpg',
            title: 'Latest products',
        },
        {
            src: '/assets/latestProducts/latestProducts-04.jpg',
            title: 'Latest products',
        },
        {
            src: '/assets/latestProducts/latestProducts-05.jpg',
            title: 'Latest products',
        },
        {
            src: '/assets/latestProducts/latestProducts-01.jpg',
            title: 'Latest products',
        },
        {
            src: '/assets/latestProducts/latestProducts-02.jpg',
            title: 'Latest products',
        },
        {
            src: '/assets/latestProducts/latestProducts-04.jpg',
            title: 'Latest products',
        },
        {
            src: '/assets/latestProducts/latestProducts-03.jpg',
            title: 'Latest products',
        },
        {
            src: '/assets/latestProducts/latestProducts-03.jpg',
            title: 'Latest products',
        },
        {
            src: '/assets/latestProducts/latestProducts-03.jpg',
            title: 'Latest products',
        },
        {
            src: '/assets/latestProducts/latestProducts-03.jpg',
            title: 'Latest products',
        },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={"container"}>
                <Typography variant={"h6"} component={"h3"} className={styles.title}>
                    اخرین تولیدات
                </Typography>

                <ImageList className={styles.imageList} cols={4} gap={15}>
                    {itemData.map((i) => (
                        <ImageListItem key={i.img} className={styles.parentPhoto}>
                            <img
                                srcSet={`${i.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                src={`${i.src}?w=164&h=164&fit=crop&auto=format`}
                                alt={i.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>

                <Link to={"/Portfolio"} className={styles.parentMorBtn}>
                    <button className={styles.moreBtn}>
                        مشاهده بیشتر
                    </button>
                </Link>
            </div>
        </div>
    )
        ;
};

export default LatestProducts;