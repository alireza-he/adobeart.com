import React from 'react';

const BannerTop = () => {
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
        <div style={{width: "100%", height: "auto"}}>
            <img
                src={"/assets/slide_1.jpg"}
                alt={"this is Banner"}
            />
        </div>
    );
};

export default BannerTop;