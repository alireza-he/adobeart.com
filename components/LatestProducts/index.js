import React from 'react';
import Typography from "@mui/material/Typography";
import Link from "@/components/Link";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from "@mui/material/Grid";
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import styles from "./LatestProducts.module.css";

// function srcset(image, size, rows = 1, cols = 1) {
//     return {
//         src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
//         srcSet: `${image}?w=${size * cols}&h=${
//             size * rows
//         }&fit=crop&auto=format&dpr=2 2x`,
//     };
// }

const Item = styled(Paper)(({theme}) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    // padding: theme.spacing(1),
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
}));

const LatestProducts = () => {
    const itemData = [
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
            img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
            title: 'Storage',
        },
        {
            img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
            title: 'Candle',
        },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={"container"}>
                <Typography variant={"h6"} component={"h3"} className={styles.title}>
                    اخرین تولیدات
                </Typography>

                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={3}>
                        <Grid container item spacing={3}>
                            <Grid item xs={3}>
                                <Item className={styles.itemDiv}>
                                    <img
                                        src={"/assets/latestProducts/latestProducts-05.jpg"}
                                        alt={"latestProducts"}
                                        loading="lazy"
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item className={styles.itemDiv}>
                                    <img
                                        src={"/assets/latestProducts/latestProducts-01.jpg"}
                                        alt={"latestProducts"}
                                        loading="lazy"
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item className={styles.itemDiv}>
                                    <img
                                        src={"/assets/latestProducts/latestProducts-02.jpg"}
                                        alt={"latestProducts"}
                                        loading="lazy"
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item className={styles.itemDiv}>
                                    <img
                                        src={"/assets/latestProducts/latestProducts-03.jpg"}
                                        alt={"latestProducts"}
                                        loading="lazy"
                                    />
                                </Item>
                            </Grid>
                        </Grid>
                        <Grid container item spacing={3}>
                            <Grid item xs={3}>
                                <Item className={styles.itemDiv}>
                                    <img
                                        src={"/assets/latestProducts/latestProducts-04.jpg"}
                                        alt={"latestProducts"}
                                        loading="lazy"
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item className={styles.itemDiv}>
                                    <img
                                        src={"/assets/latestProducts/latestProducts-04.jpg"}
                                        alt={"latestProducts"}
                                        loading="lazy"
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item className={styles.itemDiv}>
                                    <img
                                        src={"/assets/latestProducts/latestProducts-05.jpg"}
                                        alt={"latestProducts"}
                                        loading="lazy"
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item className={styles.itemDiv}>
                                    <img
                                        src={"/assets/latestProducts/latestProducts-05.jpg"}
                                        alt={"latestProducts"}
                                        loading="lazy"
                                    />
                                </Item>
                            </Grid>
                        </Grid>
                        <Grid container item spacing={3}>
                            <Grid item xs={3}>
                                <Item className={styles.itemDiv}>
                                    <img
                                        src={"/assets/latestProducts/latestProducts-03.jpg"}
                                        alt={"latestProducts"}
                                        loading="lazy"
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item className={styles.itemDiv}>
                                    <img
                                        src={"/assets/latestProducts/latestProducts-02.jpg"}
                                        alt={"latestProducts"}
                                        loading="lazy"
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item className={styles.itemDiv}>
                                    <img
                                        src={"/assets/latestProducts/latestProducts-05.jpg"}
                                        alt={"latestProducts"}
                                        loading="lazy"
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item className={styles.itemDiv}>
                                    <img
                                        src={"/assets/latestProducts/latestProducts-05.jpg"}
                                        alt={"latestProducts"}
                                        loading="lazy"
                                    />
                                </Item>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                {/*<ImageList*/}
                {/*    sx={{ width: 500, height: 450 }}*/}
                {/*    variant="quilted"*/}
                {/*    cols={4}*/}
                {/*    rowHeight={121}*/}
                {/*>*/}
                {/*    {itemData.map((item) => (*/}
                {/*        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>*/}
                {/*            <img*/}
                {/*                {...srcset(item.img, 121, item.rows, item.cols)}*/}
                {/*                // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}*/}
                {/*                // src={`${item.img}?w=248&fit=crop&auto=format`}*/}
                {/*                alt={item.title}*/}
                {/*                loading="lazy"*/}
                {/*            />*/}
                {/*        </ImageListItem>*/}
                {/*    ))}*/}
                {/*</ImageList>*/}

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