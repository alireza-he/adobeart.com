import React from "react"
import Slider from "react-slick";
import {Inter} from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
//
// export default function Home() {
//   return (
//     <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
//     </main>
//   );
// }
const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        // appendDots: dots => (
        //     <div
        //         style={{
        //             backgroundColor: "#ddd",
        //             borderRadius: "10px",
        //             padding: "10px"
        //         }}
        //     >
        //         <ul style={{ margin: "0px" }}> {dots} </ul>
        //     </div>
        // ),
        // customPaging: i => (
        //     <div
        //         style={{
        //             width: "30px",
        //             color: "blue",
        //             border: "1px blue solid"
        //         }}
        //     >
        //         {i + 1}
        //     </div>
        // )
    };

    const data = [
        {
            src: "/assets/slide_1.jpg",
            alt: "picture 1"
        },
        {
            src: "/assets/slide_2.jpg",
            alt: "picture 2"
        },
        {
            src: "/assets/slide_3.jpg",
            alt: "picture 3"
        },
        {
            src: "/assets/slide_4.jpg",
            alt: "picture 4"
        },
        {
            src: "/assets/slide_5.jpg",
            alt: "picture 5"
        },
        {
            src: "/assets/slide_6.jpg",
            alt: "picture 6"
        },
        {
            src: "/assets/slide_7.jpg",
            alt: "picture 7"
        },
        {
            src: "/assets/slide_8.jpg",
            alt: "picture 8"
        },
        {
            src: "/assets/slide_9.jpg",
            alt: "picture 9"
        },
    ]

    return (
        <Slider {...settings}>
            {
                data.map((item, index) => (
                    <div key={index} style={{width: "100%", height: "auto"}}>
                        <img
                            src={item.src}
                            alt={item.alt}
                        />
                    </div>
                ))
            }
        </Slider>
    )
}

export default Home;

