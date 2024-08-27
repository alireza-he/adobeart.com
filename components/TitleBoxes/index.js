import React from 'react';
import Typography from "@mui/material/Typography";
import styles from "./TitleBoxes.module.css";

const TitleBoxes = ({title}) => {
    return (
        <Typography variant={"h6"} component={"h3"} className={styles.title}>
            {title}
        </Typography>
    );
};

export default TitleBoxes;