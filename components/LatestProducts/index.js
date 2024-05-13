import React from 'react';
import Typography from "@mui/material/Typography";
import Link from "@/components/Link";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styles from "./LatestProducts.module.css";

const LatestProducts = () => {
    const itemData = [
        {
            img: '/assets/none/none-00.jpg',
            title: 'Bed',
        },
        {
            img: '/assets/none/none-01.jpg',
            title: 'Books',
        },
        {
            img: '/assets/none/none-02.jpg',
            title: 'Sink',
        },
        {
            img: '/assets/none/none-03.jpg',
            title: 'Kitchen',
        },
        {
            img: '/assets/none/none-06.jpg',
            title: 'Blinds',
        },
        {
            img: '/assets/none/none-05.jpg',
            title: 'Chairs',
        },
        {
            img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
            title: 'Laptop',
        },
        {
            img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
            title: 'Doors',
        },
        {
            img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
            title: 'Storage',
        },
        {
            img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
            title: 'Candle',
        },
        {
            img: '/assets/none/none-06.jpg',
            title: 'Coffee table',
        },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={"container"}>
                <Typography variant={"h6"} component={"h3"} className={styles.title}>
                    اخرین تولیدات
                </Typography>

                <div>
                    <Box sx={{width: "100%", height: 600, overflowY: 'scroll'}}>
                        <ImageList variant="masonry" cols={3} gap={8}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                </div>

                <Link to={"/Portfolio"} className={styles.parentMorBtn}>
                    <button className={styles.moreBtn}>
                        مشاهده بیشتر
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default LatestProducts;