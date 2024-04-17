import React from 'react';
import Typography from "@mui/material/Typography";
// import {usePublicData} from "publicData";
import styles from "./AboutUs.module.css"

const AboutUs = ({data = {}}) => {
    // const publicData = usePublicData();

    return (
        <div className={"container"} style={{margin:"1.5rem 0"}}>
            {/*{*/}
            {/*    data.descriptions &&*/}
            <div className={styles.textBox}>
                <Typography
                    className={styles.content}
                    // dangerouslySetInnerHTML={{__html: data.descriptions}}
                >
                    این برنامه یکی از برنامه های تصویر سازی شرکت ادوبی است. این برنامه یک نرم افزار برداری است که گرافیک
                    بسیار منحصر به فردی دارد و می توان از آن برای ترسیم آثار هنری گرافیکی منحصر به فرد استفاده کرد. در
                    این نرم افزار از یک سری خطوط و منحنی های به خصوص برای ترسیم اشکال و طرح های مختلف استفاده می شود. در
                    واقع اساس کار نرم افزار Adobe Illustrator استفاده از مشخصات هندسی یک تصویر یا یک شی برای ترسیم طرح
                    گرافیکی آن است. طراحی های گرافیکی، تصویرگری حرفه ای، طراحی وب سایت، طراحی برنامه های کامپیوتری و
                    برنامه های موبایل از مهم ترین کاربرد های این نرم افزار است.علاوه بر این طراحی کتاب، پوستر، بیلبورد و
                    … هم به کمک ایلوستریتور انجام می شود. ایلوستریتور از جمله نرم افزار های ادوبی است که توسعه دهندگان
                    بازی های ویدئویی نیز از آن استفاده می کنند. برای طراحی رابط های کاربری جذاب، طراحی بسته بندی محصولات
                    مختلف و انواع طراحی های چاپ سه بعدی، نرم افزار Adobe Illustrator کاربرد دارد.
                </Typography>
            </div>
            {/*}*/}
        </div>
    );
};

export default AboutUs;