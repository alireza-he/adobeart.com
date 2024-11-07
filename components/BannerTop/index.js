import React from 'react';
import {useRouter} from "next/router";

const backgrounds = {
    education: '/assets/Banners/Education.jpg',
    orders: '/assets/Banners/Orders.jpg',
    blogs: '/assets/Banners/Blog.jpg',
    blog: '/assets/Banners/Blog.jpg',
    about: '/assets/Banners/About.jpg',
    ae: '/assets/Banners/Ae.jpg',
    an: '/assets/Banners/An.jpg',
    pr: '/assets/Banners/Pr.jpg',
    lr: '/assets/Banners/Lr.jpg',
    ps: '/assets/Banners/Ps.jpg',
    fr: '/assets/Banners/Fr.jpg',
    sa: '/assets/Banners/Sa.jpg',
    dn: '/assets/Banners/Dn.jpg',
    xd: '/assets/Banners/Xd.jpg',
    dw: '/assets/Banners/Dw.jpg',
    id: '/assets/Banners/Id.jpg',
    ai: '/assets/Banners/Ai.jpg'
}

const BannerTop = () => {
    const router = useRouter();

    const selected = Object.keys(backgrounds).find(x => router.asPath.split('/')[1].toLowerCase().includes(x))

    return (
        <div style={{width: "100%", height: "auto", marginTop:"4.25rem"}}>
            <img
                src={backgrounds[selected]}
                alt={"this is Banner"}
            />
        </div>
    );
};

export default BannerTop;