import React from 'react';
import dynamic from "next/dynamic";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";

const AccountCircleIcon = dynamic(() => import('@mui/icons-material/AccountCircle'), {ssr: false})

const UserButton = () => {
    return (
        <Link href="/search" style={{maxWidth:"fit-content"}}>
            <IconButton
                size="large"
                color="inherit"
            >
                <AccountCircleIcon className="fillPathBlack"/>
            </IconButton>
        </Link>
    );
};

export default UserButton;