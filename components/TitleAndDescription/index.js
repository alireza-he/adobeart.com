import React from 'react';
import Typography from "@mui/material/Typography";
import styles from "./TitleAndDescription.module.css"

const TitleAndDescription = ({styleTitle, title, styleText, text}) => {
    return (
        <>
            <Typography component={"h2"} className={styles.titleDiv} style={styleTitle}>
                {title}
            </Typography>

            {/*{*/}
            {/*    data.descriptions &&*/}
            <Typography
                variant={"subtitle1"}
                component={"p"}
                className={styles.textDiv}
                style={styleText}
                // dangerouslySetInnerHTML={{__html: data.descriptions}}
            >
                {text}
            </Typography>
            {/*}*/}
        </>
    );
}

export default TitleAndDescription;