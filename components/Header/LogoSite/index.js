import React from 'react';
import Link from "next/link";
import Image from "next/image";

const LogoSite = () => {
    return (
        <Link href="/" style={{width:"fit-content"}}>
            <Image src={"/assets/AdobeArtsLogo.png"}
                   alt={"AdobeArts"}
                   width={175}
                   height={175}
            />
        </Link>
    );
};

export default LogoSite;