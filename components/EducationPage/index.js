import React from 'react';
import TitleAndDescription from "@/components/TitleAndDescription";
import {experimentalStyled as styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "./EducationPage.module.css";
import Link from "@/components/Link";

const EducationPages = () => {
    const itemsBox = [
        {
            src: "/favicon.svg",
            link: "/Ai",
            name: "Adobe InDesign"
        },
        {
            src: "/favicon.svg",
            link: "/Id",
            name: "Adobe Illustrator"
        },
        {
            src: "/favicon.svg",
            link: "/Xd",
            name: "Adobe XD"
        },
        {
            src: "/favicon.svg",
            link: "/Dw",
            name: "Adobe Dreamweaver"
        },
        {
            src: "/favicon.svg",
            link: "/Sa",
            name: "Adobe Substance"
        },
        {
            src: "/favicon.svg",
            link: "/Dn",
            name: "Adobe Dimension"
        },
        {
            src: "/favicon.svg",
            link: "/Ps",
            name: "Adobe Photoshop"
        },
        {
            src: "/favicon.svg",
            link: "/Fr",
            name: "Adobe Fresco"
        },
        {
            src: "/favicon.svg",
            link: "/Pr",
            name: "Adobe Premiere"
        },
        {
            src: "/favicon.svg",
            link: "/Lr",
            name: "Adobe Lightroom"
        },
        {
            src: "/favicon.svg",
            link: "/Ae",
            name: "Adobe After Effects"
        },
        {
            src: "/favicon.svg",
            link: "/An",
            name: "Adobe Premiere"
        },
    ]

    const text = `از دانـش آمـوزان و افـراد مبتـدی گرفتــه تـا کاربـران حرفـه ای و طراحـان و کاربـران کامپیـوتری همـگی می تواننـــد از انـواع نـرم افزارهــای ادوبــی استفـــاده کننــد. در ادامـــه به معــرفی جامــع و کامــل ایــن
نرم افزارهــای مهــم و کاربــردی می پردازیـم. شرکــت توسعـــه دهنـــده ادوبـــی یکی از بـزرگ تریـن و شناخته شده ترین توسعـه دهنـدگان نرم افزاری در سراســر دنیاست. این شرکت بسیار بزرگ و مشهور، 
در حــال حاضــر بالــغ بــر 50 نرم افــزار کاربــردی در زمینــه های مختــلف دارد کــه هــر یک از این برنــامه ها به نوبــه خود دارای ورژن هــای متعــدد و آپدیـت هــای مختلــف اند. ایــن برنامـــه های متــعدد 
و متنــوع ادوبــی کاربــرد هــای بسیــار گستــرده ای هــم دارنــد. برای بسیــاری از افــراد تمــام نرم افــزار های ادوبـی شناختـه شده نیستــند و نمی داننـد هر یک از این برنامـه های کامپیوتری دقیقا چه کاری 
انجام می دهند و در چه زمینه ای مورد استفاده قرار می گیرند. در این جا ما می خواهیم به صورت کامل و جامع به بررسی و معرفی نرم افزارهای ادوبی بپردازیم و از ویژگی ها و قابلیت های آن ها پرده برداریم. آشنـایی با کاربـرد ها و مشخصات نرم افزار های ادوبـی به کاربـران مشتــاق کمــک می کنــد تا با توجــه به زمینــه استفـاده ای که در نظر دارند، بهترین نرم افزارهای ادوبی را انتخاب و استفاده کنند.`

    return (
        <div className={"container"}>
            <TitleAndDescription
                title={"معرفی و آموزش جامع نرم افزارهای ادوبی"}
                text={text}
            />

            <Grid container spacing={{xs: 2, md: 2}} columns={{xs: 4, sm: 8, md: 12}} className={styles.wrapperItems}>
                {itemsBox.map((_, index) => (
                    <Grid item xs={12} sm={6} md={6} key={index} className={styles.parentItems}>
                        <Link href={_.link} className={styles.itemDiv}>
                            <Typography className={styles.nameTraining}>
                                {_.name}
                            </Typography>
                            <img src={_.src} alt={_.name}/>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default EducationPages;