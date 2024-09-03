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
                setBannerImage('/assets/Banners/Education.jpg');
                break;
            case '/Orders':
                setBannerImage('/assets/Banners/Orders.jpg');
                break;
            case '/Blogs':
                setBannerImage('/assets/Banners/Blog.jpg');
                break;
            case `/Blogs/[id]`:
                setBannerImage('/assets/Banners/Blog.jpg');
                break;
            case '/About':
                setBannerImage('/assets/Banners/About.jpg');
                break;
            case '/Ae':
                setBannerImage('/assets/Banners/Ae.jpg');
                break;
            case '/An':
                setBannerImage('/assets/Banners/An.jpg');
                break;
            case '/Pr':
                setBannerImage('/assets/Banners/Pr.jpg');
                break;
            case '/Lr':
                setBannerImage('/assets/Banners/Lr.jpg');
                break;
            case '/Ps':
                setBannerImage('/assets/Banners/Ps.jpg');
                break;
            case '/Fr':
                setBannerImage('/assets/Banners/Fr.jpg');
                break;
            case '/Sa':
                setBannerImage('/assets/Banners/Sa.jpg');
                break;
            case '/Dn':
                setBannerImage('/assets/Banners/Dn.jpg');
                break;
            case '/Xd':
                setBannerImage('/assets/Banners/Xd.jpg');
                break;
            case '/Dw':
                setBannerImage('/assets/Banners/Dw.jpg');
                break;
            case '/Id':
                setBannerImage('/assets/Banners/Id.jpg');
                break;
            case '/Ai':
                setBannerImage('/assets/Banners/Ai.jpg');
                break;
            default:
                setBannerImage('/assets/Banners/main.jpg');
        }
    }, [router.pathname]);

    return (
        <>
            {
                router.pathname !== "/Login" &&
                <>
                    <Header/>

                    {
                        router.pathname !== "/Portfolio" &&
                        <BannerTop src={bannerImage}/>
                    }
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
