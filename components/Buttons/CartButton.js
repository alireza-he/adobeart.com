import React from 'react';
import Badge from '@mui/material/Badge';
import {styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import styles from "./Buttons.module.css";

const CartButton = () => {
    const StyledBadge = styled(Badge)(({theme}) => ({
        '& .MuiBadge-badge': {
            right: 11,
            top: 21,
            minWidth: "auto",
            width: "15px",
            height: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#000",
            fontSize: "8px",
            fontFamily: "Peyda, sans-serif !important"
        },
    }));

    return (
        <IconButton aria-label="cart" className={styles.cartButton}>
            <StyledBadge badgeContent={4} color="secondary">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.9287 6V5C14.9287 3.114 14.9287 2.172 14.3511 1.586C13.7734 1 12.8449 1 10.9858 1H9.01441C7.15535 1 6.22681 1 5.64918 1.586C5.07155 2.172 5.07155 3.114 5.07155 5V6M1.24697 10.54C0.961115 8.427 0.820158 7.37 1.40962 6.685C1.99809 6 3.04985 6 5.15238 6H14.8469C16.9504 6 18.0012 6 18.5906 6.685C19.1801 7.37 19.0381 8.427 18.7543 10.54L18.3501 13.54C18.1293 15.19 18.0179 16.014 17.461 16.507C16.9041 17 16.084 17 14.4447 17H5.55553C3.9153 17 3.09519 17 2.53826 16.507C1.98034 16.013 1.86994 15.189 1.64816 13.541L1.245 10.541L1.24697 10.54Z"
                        stroke="#979797"/>
                </svg>
            </StyledBadge>
        </IconButton>
    );
};

export default CartButton;