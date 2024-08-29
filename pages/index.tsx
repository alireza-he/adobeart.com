import React from "react"
import PortfolioBoxes from "@/components/Portfolio";
import LatestProducts from "@/components/LatestProducts";
import BusinessStatistics from "@/components/BusinessStatistics";
import IconMenu from "@/components/IconMenu";

const Home = () => {
    const itemsPortfolio = {
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
                    src: '/assets/LatestProducts/LatestProducts-01.jpg',
                    title: 'Latest products',
                },
                {
                    src: '/assets/LatestProducts/LatestProducts-02.jpg',
                    title:
                        'Latest products',
                }
                ,
                {
                    src: '/assets/LatestProducts/LatestProducts-03.jpg',
                    title: 'Latest products',
                }
                ,
                {
                    src: '/assets/LatestProducts/LatestProducts-04.jpg',
                    title: 'Latest products',
                }
                ,
                {
                    src: '/assets/LatestProducts/LatestProducts-05.jpg',
                    title: 'Latest products',
                }
                ,
                {
                    src: '/assets/LatestProducts/LatestProducts-01.jpg',
                    title: 'Latest products',
                }
                ,
                {
                    src: '/assets/LatestProducts/LatestProducts-02.jpg',
                    title: 'Latest products',
                }
                ,
                {
                    src: '/assets/LatestProducts/LatestProducts-04.jpg',
                    title: 'Latest products',
                }
                ,
                {
                    src: '/assets/LatestProducts/LatestProducts-03.jpg',
                    title: 'Latest products',
                }
                ,
                {
                    src: '/assets/LatestProducts/LatestProducts-03.jpg',
                    title: 'Latest products',
                }
                ,
                {
                    src: '/assets/LatestProducts/LatestProducts-03.jpg',
                    title: 'Latest products',
                }
                ,
                {
                    src: '/assets/LatestProducts/LatestProducts-03.jpg',
                    title: 'Latest products',
                }
                ,
            ]
        };

    const itemsOurCustomers = {
        title: "مشتریان ما",
        items: [
            {
                src: "/assets/OurCustomers/OurCustomers_01.svg", alt: "Our Customers"
            },
            {
                src: "/assets/OurCustomers/OurCustomers_02.svg", alt: "Our Customers"
            },
            {
                src: "/assets/OurCustomers/OurCustomers_03.svg", alt: "Our Customers"
            },
            {
                src: "/assets/OurCustomers/OurCustomers_04.svg", alt: "Our Customers"
            },
            {
                src: "/assets/OurCustomers/OurCustomers_05.svg", alt: "Our Customers"
            },
            {
                src: "/assets/OurCustomers/OurCustomers_06.svg", alt: "Our Customers"
            },
            {
                src: "/assets/OurCustomers/OurCustomers_07.svg", alt: "Our Customers"
            },
            {
                src: "/assets/OurCustomers/OurCustomers_08.svg", alt: "Our Customers"
            },
            {
                src: "/assets/OurCustomers/OurCustomers_09.svg", alt: "Our Customers"
            },
            {
                src: "/assets/OurCustomers/OurCustomers_10.svg", alt: "Our Customers"
            },
            {
                src: "/assets/OurCustomers/OurCustomers_11.svg", alt: "Our Customers"
            },
            {
                src: "/assets/OurCustomers/OurCustomers_12.svg", alt: "Our Customers"
            },
            {
                src: "/assets/OurCustomers/OurCustomers_13.svg", alt: "Our Customers"
            }
        ]
    }

    const itemsTeamMembers = {
        title: "اعضای تیم",
        items: [
            {
                src: "/assets/TeamMembers/valizade.png",
                alt: "Designer",
                fullName: "مجتبی ولی زاده",
                profession: "طراح و گرافیست"
            },
            {
                src: "/assets/TeamMembers/ghoreishi.png",
                alt: "Content production",
                fullName: "سید مجتبی قریشی",
                profession: "تولید محتوا"
            },
            {
                src: "/assets/TeamMembers/heidari.png",
                alt: "site designer",
                fullName: "رضا حیدری",
                profession: "طراح سایت"
            },
            {
                src: "/assets/TeamMembers/naeej.png",
                alt: "Designer",
                fullName: "مهدی نائیج",
                profession: "طراح و گرافیست"
            },
            {
                src: "/assets/TeamMembers/rabbani.png",
                alt: "Motion graphics",
                fullName: "آرین ربانی",
                profession: "انیماتور"
            },
            {
                src: "/assets/TeamMembers/ashkrize.png",
                alt: "Motion graphics",
                fullName: "اسهیل اشک ریز",
                profession: "تدوینگر"
            },
            {
                src: "/assets/TeamMembers/mozafari.png",
                alt: "Motion graphics",
                fullName: "علی مظفری",
                profession: "تدوینگر"
            },
            {
                src: "/assets/TeamMembers/azizi.png",
                alt: "Motion graphics",
                fullName: "مجید عزیزی",
                profession: "تولید محتوا"
            }
        ]
    }

    return (
        <>
            <IconMenu/>

            <PortfolioBoxes data={itemsPortfolio}/>

            <LatestProducts data={itemsLatestProducts}/>

            <PortfolioBoxes data={itemsOurCustomers}/>

            <PortfolioBoxes data={itemsTeamMembers}/>

            <BusinessStatistics/>
        </>
    )
}

export default Home;

