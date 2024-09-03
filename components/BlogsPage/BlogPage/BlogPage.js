import React from 'react';
import {useRouter} from "next/router";
import Typography from "@mui/material/Typography";

const BlogPage = () => {
    const router = useRouter();
    const {id} = router.query;

    return (
        <div className={"container"}>
            <h1>مقاله شماره: {id}</h1>
            <div>
                <div>step 1</div>
                <div>step 2</div>
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