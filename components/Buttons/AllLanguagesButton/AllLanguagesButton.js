import React from 'react';
import dynamic from "next/dynamic";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

const LanguageIcon = dynamic(() => import('@mui/icons-material/Language'), {ssr: false})

const AllLanguagesButton = () => {
    return (
        <Link href="https://google.com">
            <IconButton
                size="large"
                color="inherit"
            >
                <LanguageIcon className="fillPathBlack"/>
            </IconButton>
        </Link>
    );
}

export default AllLanguagesButton
