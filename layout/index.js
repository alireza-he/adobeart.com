import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./layout.module.css";

const Layout = ({children}) => {
    return (
        <>
            <Header/>

            <main className={styles.mainWrapper}>
                <div style={{width:"100%", margin:"auto",padding:"0 !important"}}>
                    {children}
                </div>
            </main>

            <Footer/>
        </>
    )
}

export default Layout;
