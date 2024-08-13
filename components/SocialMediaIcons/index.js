import React from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from "./SocialMediaIcons.module.css";
import {useRouter} from "next/router";

const SocialMediaIcons = ({socialMediaIconsData}) => {
    const router = useRouter();

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
                                router.pathname === "/About" &&
                                <span>{s.alt}</span>
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