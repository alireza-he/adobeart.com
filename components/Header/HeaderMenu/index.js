import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import classNames from "classnames";
import Button from "@mui/material/Button";
import styles from "./headerMenu.module.css"

const HeaderMenu = () => {
    const router = useRouter();
    const data = [
        {
            "title": "خانه",
            "route":"/"
        },
        {
            "title": "آموزش",
            "route":"/Education"
        },
        {
            "title": "تولیدات",
            "route":"/Portfolio"
        },
        {
            "title": "سفارشات",
            "route":"/Orders"
        },
        {
            "title": "نرخ خدمات",
            "route":"/Price"
        },
        {
            "title": "مجله",
            "route":"/Blog"
        },
        {
            "title": "درباره ما",
            "route":"/About"
        },
    ]

    console.log(router.pathname, "header")

    return (
        <>
            {
                data?.map((page, index) => (
                    <div className={styles.LinkDiv} key={index}>
                        <Link href={page.route}>
                            <Button
                                className={classNames(
                                    router.pathname === page.route ?
                                        styles.activeItemHeader
                                        :
                                        "",
                                    styles.itemHeader)}
                            >
                                {page.title}
                            </Button>
                        </Link>
                    </div>
                ))
            }
        </>
    )
}

export default HeaderMenu;