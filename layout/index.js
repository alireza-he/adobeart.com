import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerTop from "@/components/BannerTop";
import styles from "./layout.module.css";

const Layout = ({children}) => {
    const [bannerImage, setBannerImage] = useState('');
    const router = useRouter();

    useEffect(() => {
        switch (router.pathname) {
            case '/Education':
                setBannerImage('/assets/banners/Education.jpg');
                break;
            case '/Orders':
                setBannerImage('/assets/banners/Orders.jpg');
                break;
            case '/Blog':
                setBannerImage('/assets/banners/Blog.jpg');
                break;
            case '/About':
                setBannerImage('/assets/banners/About.jpg');
                break;
            case '/Ae':
                setBannerImage('/assets/banners/Ae.jpg');
                break;
            case '/An':
                setBannerImage('/assets/banners/An.jpg');
                break;
            case '/Pr':
                setBannerImage('/assets/banners/Pr.jpg');
                break;
            case '/Lr':
                setBannerImage('/assets/banners/Lr.jpg');
                break;
            case '/Ps':
                setBannerImage('/assets/banners/Ps.jpg');
                break;
            case '/Fr':
                setBannerImage('/assets/banners/Fr.jpg');
                break;
            case '/Sa':
                setBannerImage('/assets/banners/Sa.jpg');
                break;
            case '/Dn':
                setBannerImage('/assets/banners/Dn.jpg');
                break;
            case '/Xd':
                setBannerImage('/assets/banners/Xd.jpg');
                break;
            case '/Dw':
                setBannerImage('/assets/banners/Dw.jpg');
                break;
            case '/Id':
                setBannerImage('/assets/banners/Id.jpg');
                break;
            case '/Ai':
                setBannerImage('/assets/banners/Ai.jpg');
                break;
            default:
                setBannerImage('/assets/banners/main.jpg');
        }
    }, [router.pathname]);

    return (
        <>
            {
                router.pathname !== "/Login" &&
                <>
                    <Header/>

                    <BannerTop src={bannerImage}/>
                </>
            }


            <main className={styles.mainWrapper}>
                <div style={{width: "100%", margin: "auto", padding: "0 !important"}}>
                    {children}
                </div>
            </main>

            {
                router.pathname !== "/Login" &&
                <Footer/>
            }
        </>
    )
}

export default Layout;
