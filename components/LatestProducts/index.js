import React from 'react';
import TitleBoxes from "@/components/TitleBoxes";
import ViewMoreButton from "@/components/Buttons/ViewMoreButton";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styles from "./LatestProducts.module.css";

const LatestProducts = ({data}) => {
    return (
        <div className={styles.wrapper}>
            <div className={"container"}>
                <TitleBoxes title={data.title}/>

                <ImageList className={styles.imageList} cols={4} gap={15}>
                    {data.items.map((i) => (
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

                <ViewMoreButton link={"/Portfolio"}/>
            </div>
        </div>
    )
        ;
};

export default LatestProducts;