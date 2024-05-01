import React from 'react';
import Slider from "react-slick";

const Carousel = ({children, className}) => {
    const settings = {
        className: "center",
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: false,
        centerMode: true,
        centerPadding: "100px",
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings} style={{width: "100%"}} className={className}>
            {children}
        </Slider>
    );
};

export default Carousel;