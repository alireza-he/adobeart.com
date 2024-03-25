import React from 'react';
import Image from "next/image";
import Typography from "@mui/material/Typography";
import {usePublicData} from "publicData";
import styles from "./AboutUs.module.css"

const AboutUs = ({data = {}}) => {
    const publicData = usePublicData();

    return (
        <div>
            <div className={styles.parentImage}>
                <Image
                    src={publicData.logo??"/assets/islamicSources.png"}
                    alt="Logo Islamic sources"
                    width={80}
                    height={50}
                    layout="responsive"
                />
            </div>

            {
                data.descriptions &&
                <div className={styles.textBox}>
                    <Typography
                        className={styles.content}
                        dangerouslySetInnerHTML={{__html: data.descriptions}}
                    />
                </div>
            }
        </div>
    );
};

export default AboutUs;