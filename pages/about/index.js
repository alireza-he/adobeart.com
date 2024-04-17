import React from 'react';
import AboutUs from "../../components/AboutAndContactUs/AboutUs";
import ContactUs from "../../components/AboutAndContactUs/ContactUs";
import BannerTop from "/components/BannerTop";
// import {getRequest} from "functions/api";

const About = ({data}) => {
    return (
        <>
            <BannerTop/>

            <AboutUs/>

            <ContactUs/>
        </>
    );
};

// export const getServerSideProps = async () => {
//     const data = await getRequest('about')
//         .then(res => res.data.status === 200 ? res.data.data : {});
//
//     return {
//         props: {data}
//     }
// }

export default About;