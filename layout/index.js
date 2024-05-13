import React from "react";
import {useRouter} from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./layout.module.css";

const Layout = ({children}) => {
    const router = useRouter();

    return (
        <>
            {
                router.pathname !== "/Login" &&
                <Header/>
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
