import React from 'react';
import Link from "../../components/Link";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import styles from "./404.module.css";

const Page404 = () => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.picture} src="/assets/404.svg" alt="404 svg"/>
            <Typography variant="h2" mt={3}>{"No Data"}</Typography>
            <Fab component={Link} to="/" className={styles.button}>{"Home"}</Fab>
        </div>
    );
};

export default Page404;