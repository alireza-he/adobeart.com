import React from "react";
import {useRouter} from "next/router";
import classNames from "classnames";
import Button from "@mui/material/Button";
import styles from "./headerMenu.module.css"
import Link from "next/link";

const HeaderMenu = () => {
    const router = useRouter();
    const data = [
        {
            "title": "خانه",
            "route":"/"
        },
        {
            "title": "آموزش",
            "route":"training"
        },
        {
            "title": "نمونه کار",
            "route":"portfolio"
        },
        {
            "title": "سفارش",
            "route":"order"
        },
        {
            "title": "تعرفه قیمت",
            "route":"price"
        },
        {
            "title": "پشتیبانی",
            "route":"support"
        },
        {
            "title": "درباره ما",
            "route":"about"
        },
    ]

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