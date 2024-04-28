import React from "react"
import BannerTop from "/components/BannerTop";
import Pages from "/components/Pages";
import PortfolioBoxes from "/components/Portfolio";

const Home = () => {
    return (
        <>
            <BannerTop src={"/assets/banners/main.jpg"}/>

            <Pages/>

            <PortfolioBoxes/>
        </>
    )
}

export default Home;

