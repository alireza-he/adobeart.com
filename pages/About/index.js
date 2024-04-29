import React from 'react';
import AboutUs from "@/components/AboutAndContactUs/AboutUs";
import BannerTop from "@/components/BannerTop";
// import {getRequest} from "functions/api";

const About = ({data}) => {
    return (
        <>
            <BannerTop src={"/assets/banners/main.jpg"}/>

            <AboutUs/>
        </>
    );
};

// export const getServerSideProps = async () => {
//     const data = await getRequest('About')
//         .then(res => res.data.status === 200 ? res.data.data : {});
//
//     return {
//         props: {data}
//     }
// }

export default About;