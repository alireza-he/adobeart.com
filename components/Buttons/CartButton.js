import React from 'react';
import dynamic from "next/dynamic";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";

const LocalMallIcon = dynamic(() => import('@mui/icons-material/LocalMall'), {ssr: false})

const CartButton = () => {
    return (
        <Link href="/search" style={{maxWidth:"fit-content"}}>
            <IconButton
                size="large"
                color="inherit"
            >
                <LocalMallIcon className="fillPathBlack"/>
            </IconButton>
        </Link>
    );
};

export default CartButton;