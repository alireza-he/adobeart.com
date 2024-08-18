import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from "./SocialMediaIcons.module.css";

const SocialMediaIcons = ({socialMediaIconsData, action, iconContainerStyles, bgIconStyles, iconStyles}) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(action)
    }, [action]);

    return (
        <div className={styles.socialMediaWrapper}>
            {
                socialMediaIconsData.map((s, index) => (
                    <div key={index} className={styles.iconContainer} style={iconContainerStyles}>
                        <Link href={s.link} className={styles.parentIcon}>
                            <div className={styles.bgIcon} style={bgIconStyles}>
                                <Image
                                    src={s.src}
                                    alt={s.alt}
                                    width={20}
                                    height={20}
                                    style={iconStyles}
                                />
                            </div>
                            {
                                show &&
                                <span className={styles.name}>{s.alt}</span>
                            }
                        </Link>
                        {
                            !show &&
                            index === 2 &&
                            <div className={styles.lineBetween}></div>
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default SocialMediaIcons;