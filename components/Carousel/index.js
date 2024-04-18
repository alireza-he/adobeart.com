import React from 'react';
import Slider from "react-slick";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true
    };

    const data = [
        {
            src: "/assets/main.jpg",
            alt: "picture 1"
        },
        {
            src: "/assets/Ai.jpg",
            alt: "picture 2"
        },
        {
            src: "/assets/Id.jpg",
            alt: "picture 3"
        },
        {
            src: "/assets/Dw.jpg",
            alt: "picture 4"
        },
        {
            src: "/assets/Ps.jpg",
            alt: "picture 5"
        },
        {
            src: "/assets/Lr.jpg",
            alt: "picture 6"
        },
        {
            src: "/assets/Pr.jpg",
            alt: "picture 7"
        },
        {
            src: "/assets/An.jpg",
            alt: "picture 8"
        },
        {
            src: "/assets/Ae.jpg",
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
    );
};

export default Carousel;