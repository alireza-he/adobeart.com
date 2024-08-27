import React from "react"
import PortfolioBoxes from "@/components/Portfolio";
import LatestProducts from "@/components/LatestProducts";
import BusinessStatistics from "@/components/BusinessStatistics";
import IconMenu from "@/components/IconMenu";

const Home = () => {
    const dataPortfolioBoxes = {
        title: "نمونه کارها",
        items: [
            {
                src: "/assets/PortfolioPictures/portfolio_10.png", alt: "Portfolio example"
            },
            {
                src: "/assets/PortfolioPictures/portfolio_12.png", alt: "Portfolio example"
            },
            {
                src: "/assets/PortfolioPictures/portfolio_21.png", alt: "Portfolio example"
            },
            {
                src: "/assets/PortfolioPictures/portfolio_22.png", alt: "Portfolio example"
            },
            {
                src: "/assets/PortfolioPictures/portfolio_23.png", alt: "Portfolio example"
            },
            {
                src: "/assets/PortfolioPictures/portfolio_24.png", alt: "Portfolio example"
            }
        ],
        moreBtnText: "مشاهده بیشتر"
    }

    const itemsLatestProducts = {
            title: "اخرین تولیدات",
            items: [
                {
                    src: '/assets/latestProducts/latestProducts-01.jpg',
                    title: 'Latest products',
                },
                {
                    src: '/assets/latestProducts/latestProducts-02.jpg',
                    title:
                        'Latest products',
                }
                ,
                {
                    src: '/assets/latestProducts/latestProducts-03.jpg',
                    title: 'Latest products',
                }
                ,
                {
                    src: '/assets/latestProducts/latestProducts-04.jpg',
                    title: 'Latest products',
                }
                ,
                {
                    src: '/assets/latestProducts/latestProducts-05.jpg',
                    title: 'Latest products',
                }
                ,
                {
                    src: '/assets/latestProducts/latestProducts-01.jpg',
                    title: 'Latest products',
                }
                ,
                {
                    src: '/assets/latestProducts/latestProducts-02.jpg',
                    title: 'Latest products',
                }
                ,
                {
                    src: '/assets/latestProducts/latestProducts-04.jpg',
                    title: 'Latest products',
                }
                ,
                {
                    src: '/assets/latestProducts/latestProducts-03.jpg',
                    title: 'Latest products',
                }
                ,
                {
                    src: '/assets/latestProducts/latestProducts-03.jpg',
                    title: 'Latest products',
                }
                ,
                {
                    src: '/assets/latestProducts/latestProducts-03.jpg',
                    title: 'Latest products',
                }
                ,
                {
                    src: '/assets/latestProducts/latestProducts-03.jpg',
                    title: 'Latest products',
                }
                ,
            ]
        };

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
                src: "/assets/teamMembers/mojtabaPhoto.png",
                alt: "Designer",
                fullName: "مجتبی ولی زاده",
                profession: "طراح و گرافیست"
            },
            {
                src: "/assets/teamMembers/sedMojtabaPhoto.png",
                alt: "Content production",
                fullName: "سید مجتبی قریشی",
                profession: "تولید محتوا"
            },
            {
                src: "/assets/teamMembers/heidariPhoto.png",
                alt: "site designer",
                fullName: "رضا حیدری",
                profession: "طراح سایت"
            },
            {
                src: "/assets/teamMembers/naijPhoto.png",
                alt: "Designer",
                fullName: "مهدی نائیج",
                profession: "طراح و گرافیست"
            },
            {
                src: "/assets/teamMembers/soheilPhoto.png",
                alt: "Motion graphics",
                fullName: "سهیل اشکریز",
                profession: "موشن گرافیک"
            }
        ]
    }

    return (
        <>
            <IconMenu/>

            <PortfolioBoxes data={dataPortfolioBoxes}/>

            <LatestProducts data={itemsLatestProducts}/>

            <PortfolioBoxes data={itemsProducts}/>

            <PortfolioBoxes data={itemsTeamMembers}/>

            <BusinessStatistics/>
        </>
    )
}

export default Home;

