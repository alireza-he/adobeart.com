import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import Image from "next/image";
import UserAvatar from "@/components/UserAvatar";
import TimeReadBlog from "@/components/BlogsPage/TimeReadBlog";
import DateBlog from "@/components/BlogsPage/DateBlog";
import NewContent from "@/components/BlogsPage/NewContent";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import styles from "./BlogPage.module.css";

const BlogPage = () => {
    const router = useRouter();
    const {id} = router.query;
    const [hydrated, setHydrated] = useState(false);
    const NewContentItem = [
        {
            id: "1",
            src: "/assets/latestProducts/latestProducts-01.jpg",
            description: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی ایپسوم متن و عنوان",
            publicationDate: "1 روز قبل"
        },
        {
            id: "2",
            src: "/assets/latestProducts/latestProducts-02.jpg",
            description: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی ایپسوم متن و عنوان",
            publicationDate: "2 روز قبل"
        },
        {
            id: "3",
            src: "/assets/latestProducts/latestProducts-03.jpg",
            description: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی ایپسوم متن و عنوان",
            publicationDate: "3 روز قبل"
        },
        {
            id: "4",
            src: "/assets/latestProducts/latestProducts-04.jpg",
            description: "متن و عنوان ساختگی ایپسوم متن و عنوان ساختگی ایپسوم متن و عنوان",
            publicationDate: "4 روز قبل"
        },
    ]

    useEffect(() => {
        setHydrated(true);
    }, []);

    if (!hydrated) {
        return null;
    }

    const BlogText = `
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آیند دستاوردهای اسوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آیند دستاوردهای اسوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آیند دستاوردهای اسوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آیند دستاوردهای اسوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آیند دستاوردهای اسوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آیند دستاوردهای اسوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آیند دستاوردهای اسوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آیند دستاوردهای اسوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آیند دستاوردهای اسوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آیند دستاوردهای اسوالات پیوسته اهل دنیای موجود ته حال و آیند دستاوردهای اسوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
    `

    return (
        <div className={"container my_3rem"}>
            <Typography component={"h1"} variant={"h5"} className={styles.mainTitle}>
                مقاله شماره: {id}
            </Typography>

            <div className={styles.articleInfo}>
                <div className={styles.partRight_articleInfo}>
                    <UserAvatar
                        classNameWrapper={styles.avatarName_partRight_articleInfo}
                        stylesAvatar={{width: 32, height: 32}}
                        name={"مجتبی ولی زاده"}
                    />

                    <DateBlog date={"1403/6/15"}/>
                </div>

                <TimeReadBlog
                    classNameWrapper={styles.partLeft_articleInfo}
                    text={"زمان مورد نیاز برای مطالعه:20 دقیقه"}
                />
            </div>

            <Grid container spacing={0} className={styles.imageAndNewContentRow}>
                <Grid item md={8} className={styles.imageCol}>
                    <Image
                        src={"/assets/latestProducts/latestProducts-01.jpg"}
                        alt={"blog image"}
                        width={500}
                        height={300}
                        style={{width: "100%", height: "auto"}}
                    />
                </Grid>
                <Grid item className={styles.betweenLinePart}>
                    <div className={styles.betweenLine}></div>
                </Grid>
                <Grid item md={3}>
                    <NewContent NewContentItem={NewContentItem}/>
                </Grid>
            </Grid>

            <Typography component={"text"} variant={"subtitle1"} className={styles.text}>
                {BlogText}
            </Typography>
        </div>
    );
};

export default BlogPage;