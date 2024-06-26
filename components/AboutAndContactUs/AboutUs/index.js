import React from 'react';
// import {usePublicData} from "publicData";
import ContactUs from "@/components/AboutAndContactUs/ContactUs";
import TitleAndDescription from "@/components/TitleAndDescription";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import styles from "./AboutUs.module.css";

const AboutUs = ({data = {}}) => {
    const socialMediaIconsData = [
        {
            link: "http://web.Rubika.com",
            src: "/assets/socialMediaIcons/Rubika.svg",
            alt: "Rubika"
        },
        {
            link: "http://web.Telegram.org",
            src: "/assets/socialMediaIcons/Telegram.svg",
            alt: "Telegram"
        },
        {
            link: "http://Gmail.com",
            src: "/assets/socialMediaIcons/Gmail.svg",
            alt: "Gmail"
        },
        {
            link: "http://Youtube.com",
            src: "/assets/socialMediaIcons/Youtube.svg",
            alt: "Youtube"
        },
        {
            link: "http://instagram.com",
            src: "/assets/socialMediaIcons/Instagram.svg",
            alt: "Instagram"
        },
        {
            link: "http://linkedin.com",
            src: "/assets/socialMediaIcons/linkedin.svg",
            alt: "Linkdin"
        },
        {
            link: "http://Pinterest.com",
            src: "/assets/socialMediaIcons/Pinterest.svg",
            alt: "Pinterest"
        },
    ]
    // const publicData = usePublicData();
    const textAboutUs = `شرکت Adobe در ۲۸ فوریه ۱۹۸۲ میلادی در مانتین ویو کالیفرنیا توسط چارلز گسچه و جان وارناک که هر دو کارمندان زیراکس پارک بودند، تأسیس شد. مؤسسین ادوبی در روزهای آغاز به کار شرکت مدل‌های مختلفی از کسب و کار در حوزه چاپ و نشر رایانه‌ای را مورد بررسی قرار دادند. آنها سرویس‌هایی نظیر خدمات کپی و همین‌طور سیستم‌های اختصاصی دفاتر انتشاراتی را نیز امتحان کرده بودند. بعد از مدتی فعالیت در حوزه‌های اشاره شده بر روی نرم‌افزارهایی مخصوص چاپ تمرکز کردند. در این راستا Adobe PostScript اولین دستاوردشان بود. همچنین باید اشاره کنیم که پست اسکریپت به عنوان اولین استاندارد چاپ در رایانه بود که الگوریتم‌هایی را برای توضیح شکل حروف برای زبان‌های مختلف را شامل می‌شد. در این میان در سال ۱۹۸۸ ادوبی زبان مخصوص چاپ کانجی را نیز معرفی کرد. جان وارناک در لوس آلتوس زندگی می‌کرد و در پشت خانه وی رودخانه‌ای به نام Adobe Creek وجود داشت که باعث شد تا جان وارناک اسم شرکت خود را برگرفته از اسم رودخانه محل زندگیش یعنی ادوبی نامگذاری کند. از طرفی لوگوی این شرکت نیز در همان سال‌ها توسط ماروا وارناک همسر جان وارناک طراحی شد.
موسسه Adobe ARTS یک مجموعه هنری با رویکرد آموزشی و تولیدی هست  که در سال 2020 میلادی راه اندازی گردید. فعالیت این مجموعه بر  اساس سفارش اینترنتی محصولات دیجیتال و آموزش آنلاین  برنامه های کمپانی Adobe  می باشد. تمامی تولیدات و حقوق مادی این مجموعه هیچ ارتباطی با کمپانی Adobe نداشته و یک سایت خصوصی در این راستا است. در مجموعه Adobe ARTS به راحتی میتوانید به صورت آنلاین محتواهای آموزشی خود را تماشا کرده یا سفارش خود را برای محصول مورد نظر ثبت و دریافت نمایید و همچنین میتوانید آثار هنرمندان را بررسی و خریداری کرده و مورد استفاده قرار دهید. در ادامه با کانال های ارتباطی مجموعه آشنا خواهید شد.
`

    return (
        <div className={"container"} style={{margin: "1.5rem auto"}}>
            <TitleAndDescription
                title={"درباره ما"}
                text={textAboutUs}
            />

            <div style={{margin: "3rem"}} className={styles.parentSocialMediaIcons}>
                <SocialMediaIcons socialMediaIconsData={socialMediaIconsData}/>
            </div>

            {/*<ContactUs/>*/}
        </div>
    );
};

export default AboutUs;