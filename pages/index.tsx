import React from "react"
import BannerTop from "/components/BannerTop";
import PagesBox from "/components/Pages";
import PortfolioBoxes from "/components/Portfolio";
import LatestProducts from "/components/LatestProducts";

const Home = () => {
    return (
        <>
            <BannerTop src={"/assets/banners/main.jpg"}/>

            <PagesBox/>

            <PortfolioBoxes/>

            <LatestProducts/>
        </>
    )
}

export default Home;

