import React from 'react';
import {useRouter} from "next/router";
import Typography from "@mui/material/Typography";
import styles from "./BlogPage.module.css";
import Avatar from "@mui/material/Avatar";

const BlogPage = () => {
    const router = useRouter();
    const {id, author, date} = router.query;

    return (
        <div className={"container my_3rem"}>
            <h1> مقاله شماره: {id}</h1>
            <div className={styles.articleInfo}>
                <div className={styles.partRight_articleInfo}>
                    <div className={styles.avatarName_partRight_articleInfo}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                        <Typography component={"caption"} variant={"h2"} color={"#000"}>
                            {author}
                        </Typography>
                    </div>
                    <div className={styles.date_partRight_articleInfo}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.99967 3.99992V7.99992L10.6663 9.33325M14.6663 7.99992C14.6663 11.6818 11.6816 14.6666 7.99967 14.6666C4.31778 14.6666 1.33301 11.6818 1.33301 7.99992C1.33301 4.31802 4.31778 1.33325 7.99967 1.33325C11.6816 1.33325 14.6663 4.31802 14.6663 7.99992Z"
                                stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        {date}
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div>
                <div>step 3</div>
                <div>step 4</div>
            </div>
            <Typography component={"caption"} variant={"subtitle1"}>
                text
            </Typography>
        </div>
    );
};

export default BlogPage;