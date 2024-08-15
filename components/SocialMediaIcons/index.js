import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from "./SocialMediaIcons.module.css";

const SocialMediaIcons = ({socialMediaIconsData, action}) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(action)
    })
    return (
        <div className={styles.socialMediaWrapper}>
            {
                socialMediaIconsData.map((s, index) => (
                    <>
                        <Link href={s.link} key={index} className={styles.parentIcon}>
                            <div className={styles.BgIcon}>
                                <Image
                                    src={s.src}
                                    alt={s.alt}
                                    width={20}
                                    height={20}
                                    className={styles.icon}
                                />
                            </div>
                            {
                                show &&
                                <span className={styles.name}>{s.alt}</span>
                            }
                        </Link>
                        {
                            index === 2 &&
                            <div className={styles.lineBetween}></div>
                        }
                    </>
                ))
            }
        </div>
    );
};

export default SocialMediaIcons;