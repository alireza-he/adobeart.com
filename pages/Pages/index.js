import React, {useState} from 'react';
import PagesBox from "@/components/Pages";
import BannerTop from "@/components/BannerTop";
import TitleAndDescription from "@/components/TitleAndDescription";
import LandingPages from "@/components/Pages/Landing";

const Pages = () => {
    const [page, setPage] = useState(true);

    return (
        <div>
            <BannerTop src={"/assets/banners/main.jpg"}/>

            <PagesBox/>
        </div>
    );
};

export default Pages;