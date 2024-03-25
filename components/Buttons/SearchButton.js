import React from 'react';
import dynamic from "next/dynamic";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

const DynamicSearchIcon = dynamic(() => import('@mui/icons-material/Search'), {ssr: false})

const SearchButton = () => {
    return (
        <Link href="/search" style={{maxWidth:"fit-content"}}>
            <IconButton
                size="large"
                color="inherit"
            >
                <DynamicSearchIcon className="fillPathBlack"/>
            </IconButton>
        </Link>
    );
};

export default SearchButton;