import React from "react"
import BannerTop from "@/components/BannerTop";
import PagesBox from "@/components/Pages";
import PortfolioBoxes from "@/components/Portfolio";
import LatestProducts from "@/components/LatestProducts";
import BusinessStatistics from "@/components/BusinessStatistics";

const Home = () => {
    const dataPortfolioBoxes = {
        title: "نمونه کارها",
        items: [
            {
                src: "/assets/PortfolioPictures/portfolio_0.png", alt: "Portfolio example"
            },
            {
                src: "/assets/PortfolioPictures/portfolio_1.png", alt: "Portfolio example"
            },
            {
                src: "/assets/PortfolioPictures/portfolio_2.png", alt: "Portfolio example"
            },
            {
                src: "/assets/PortfolioPictures/portfolio_3.png", alt: "Portfolio example"
            },
            {
                src: "/assets/PortfolioPictures/portfolio_4.png", alt: "Portfolio example"
            },
            {
                src: "/assets/PortfolioPictures/portfolio_5.png", alt: "Portfolio example"
            }
        ],
        moreBtnText: "مشاهده بیشتر"
    }

    const itemsProducts = {
        title: "مشتریان ما",
        items: [
            {
                src: "/assets/teamMembers/mojtabaPhoto.png", alt: "Portfolio example"
            },
            {
                src: "/assets/teamMembers/sedMojtabaPhoto.png", alt: "Portfolio example"
            },
            {
                src: "/assets/teamMembers/mojtabaPhoto.png", alt: "Portfolio example"
            },
            {
                src: "/assets/teamMembers/sedMojtabaPhoto.png", alt: "Portfolio example"
            },
            {
                src: "/assets/teamMembers/mojtabaPhoto.png", alt: "Portfolio example"
            },
            {
                src: "/assets/teamMembers/sedMojtabaPhoto.png", alt: "Portfolio example"
            }
        ]
    }

    const itemsTeamMembers = {
        title: "اعضای تیم",
        items: [
            {
                src: "/assets/teamMembers/mojtabaPhoto.png", alt: "Portfolio example"
            },
            {
                src: "/assets/teamMembers/sedMojtabaPhoto.png", alt: "Portfolio example"
            },
            {
                src: "/assets/teamMembers/mojtabaPhoto.png", alt: "Portfolio example"
            },
            {
                src: "/assets/teamMembers/sedMojtabaPhoto.png", alt: "Portfolio example"
            },
            {
                src: "/assets/teamMembers/mojtabaPhoto.png", alt: "Portfolio example"
            },
            {
                src: "/assets/teamMembers/sedMojtabaPhoto.png", alt: "Portfolio example"
            }
        ]
    }

    return (
        <>
            <BannerTop src={"/assets/banners/main.jpg"}/>

            <PagesBox/>

            <PortfolioBoxes data={dataPortfolioBoxes}/>

            <LatestProducts/>

            <PortfolioBoxes data={itemsProducts}/>

            <PortfolioBoxes data={itemsTeamMembers}/>

            <BusinessStatistics/>
        </>
    )
}

export default Home;

