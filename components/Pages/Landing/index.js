import React from 'react';
import TitleAndDescription from "@/components/TitleAndDescription";
import {experimentalStyled as styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "./Landing.module.css";

const LandingPages = () => {
    const itemsBox = [
        {
            src: "/favicon.svg",
            alt: "ادوبی آرتس",
            link: "",
            name: "Adobe InDesign"
        },
        {
            src: "/favicon.svg",
            alt: "ادوبی آرتس",
            link: "",
            name: "Adobe InDesign"
        },
        {
            src: "/favicon.svg",
            alt: "ادوبی آرتس",
            link: "",
            name: "Adobe InDesign"
        },
        {
            src: "/favicon.svg",
            alt: "ادوبی آرتس",
            link: "",
            name: "Adobe InDesign"
        },
        {
            src: "/favicon.svg",
            alt: "ادوبی آرتس",
            link: "",
            name: "Adobe InDesign"
        },
        {
            src: "/favicon.svg",
            alt: "ادوبی آرتس",
            link: "",
            name: "Adobe InDesign"
        },
        {
            src: "/favicon.svg",
            alt: "ادوبی آرتس",
            link: "",
            name: "Adobe InDesign"
        },
        {
            src: "/favicon.svg",
            alt: "ادوبی آرتس",
            link: "",
            name: "Adobe InDesign"
        },
        {
            src: "/favicon.svg",
            alt: "ادوبی آرتس",
            link: "",
            name: "Adobe InDesign"
        },
        {
            src: "/favicon.svg",
            alt: "ادوبی آرتس",
            link: "",
            name: "Adobe InDesign"
        },
        {
            src: "/favicon.svg",
            alt: "ادوبی آرتس",
            link: "",
            name: "Adobe InDesign"
        },
        {
            src: "/favicon.svg",
            alt: "ادوبی آرتس",
            link: "",
            name: "Adobe InDesign"
        },
    ]

    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        color: theme.palette.text.secondary,
    }));

    return (
        <>
            <TitleAndDescription
                title={"معرفی و آموزش جامع نرم افزارهای ادوبی"}
                text={`از دانـش آمـوزان و افـراد مبتـدی گرفتــه تـا کاربـران حرفـه ای و طراحـان و کاربـران کامپیـوتری همـگی می تواننـــد از انـواع نـرم افزارهــای ادوبــی استفـــاده کننــد. در ادامـــه به معــرفی جامــع و کامــل ایــن 
                    نرم افزارهــای مهــم و کاربــردی می پردازیـم. شرکــت توسعـــه دهنـــده ادوبـــی یکی از بـزرگ تریـن و شناخته شده ترین توسعـه دهنـدگان نرم افزاری در سراســر دنیاست. این شرکت بسیار بزرگ و مشهور، 
                    در حــال حاضــر بالــغ بــر 50 نرم افــزار کاربــردی در زمینــه های مختــلف دارد کــه هــر یک از این برنــامه ها به نوبــه خود دارای ورژن هــای متعــدد و آپدیـت هــای مختلــف اند. ایــن برنامـــه های متــعدد 
                    و متنــوع ادوبــی کاربــرد هــای بسیــار گستــرده ای هــم دارنــد. برای بسیــاری از افــراد تمــام نرم افــزار های ادوبـی شناختـه شده نیستــند و نمی داننـد هر یک از این برنامـه های کامپیوتری دقیقا چه کاری 
                    انجام می دهند و در چه زمینه ای مورد استفاده قرار می گیرند. در این جا ما می خواهیم به صورت کامل و جامع به بررسی و معرفی نرم افزارهای ادوبی بپردازیم و از ویژگی ها و قابلیت های آن ها پرده برداریم. آشنـایی با کاربـرد ها و مشخصات نرم افزار های ادوبـی به کاربـران مشتــاق کمــک می کنــد تا با توجــه به زمینــه استفـاده ای که در نظر دارند، بهترین نرم افزارهای ادوبی را انتخاب و استفاده کنند.`}
            />

            <Grid container spacing={{xs: 2, md: 2}} columns={{xs: 4, sm: 8, md: 12}} className={styles.wrapperItems}>
                {itemsBox.map((_, index) => (
                    <Grid item xs={12} sm={6} md={6} key={index} className={styles.parentItems}>
                        <Item className={styles.itemDiv}>
                            <Typography className={styles.nameTraining}>
                                {_.name}
                            </Typography>
                            <img src={_.src} alt={_.alt}/>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default LandingPages;