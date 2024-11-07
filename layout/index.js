import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerTop from "@/components/BannerTop";
import styles from "./layout.module.css";
import {useRouter} from "next/router";

const Layout = ({children}) => {
    const router = useRouter();

    return (
        <>
            {
                router.pathname !== "/Login" &&
                <>
                    <Header/>

                    {
                        router.pathname !== "/Portfolio" &&
                        <BannerTop/>
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
