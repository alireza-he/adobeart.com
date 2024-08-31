import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Link from "@/components/Link";
import Tooltip, {tooltipClasses} from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {styled} from '@mui/material/styles';
import styles from "./Buttons.module.css";

const HtmlTooltip = styled(({className, ...props}) => (
    <Tooltip {...props} classes={{popper: className}}/>
))(({theme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        borderRadius: "2.5rem 2.5rem 0 0"
    },
}));

const AllLanguagesButton = () => {
    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    return (
        <ClickAwayListener onClickAway={handleTooltipClose}>
            <HtmlTooltip
                className={styles.tooltipBox}
                PopperProps={{
                    disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                title={
                    <div className={styles.wrapperBoxAllLanguages}>
                        <Link href={"/"} className={styles.itemWrapperBox}>FA</Link>
                        <Link href={"/"} className={styles.itemWrapperBox}>AR</Link>
                        <Link href={"/"} className={styles.itemWrapperBox}>EN</Link>
                    </div>
                }
            >
                <Button onClick={handleTooltipOpen} className={styles.btnAllLang}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M1.15327 6.44118C1.0396 6.94254 0.979592 7.46426 0.979592 8C0.979592 8.53574 1.0396 9.05746 1.15327 9.55881C1.15966 9.55857 1.16609 9.55844 1.17254 9.55844H4.8549C4.80437 9.05634 4.77922 8.53677 4.77922 8C4.77922 7.46323 4.80437 6.94366 4.8549 6.44156H1.17254C1.16609 6.44156 1.15966 6.44143 1.15327 6.44118ZM1.4524 5.46197H4.98965C5.28682 3.77685 5.90027 2.31052 6.83974 1.07502C4.36927 1.48588 2.33497 3.18673 1.4524 5.46197ZM8 1.20436C6.98739 2.34973 6.31149 3.76351 5.98543 5.46197H10.0146C9.68851 3.76351 9.01261 2.34973 8 1.20436ZM10.1604 6.44156H5.83964C5.78585 6.93907 5.75881 7.45844 5.75881 8C5.75881 8.54156 5.78585 9.06093 5.83964 9.55844H10.1604C10.2142 9.06093 10.2412 8.54156 10.2412 8C10.2412 7.45844 10.2142 6.93907 10.1604 6.44156ZM11.1451 9.55844C11.1956 9.05634 11.2208 8.53677 11.2208 8C11.2208 7.46323 11.1956 6.94366 11.1451 6.44156H14.8275C14.8339 6.44156 14.8403 6.44143 14.8467 6.44118C14.9604 6.94254 15.0204 7.46426 15.0204 8C15.0204 8.53574 14.9604 9.05746 14.8467 9.55882C14.8403 9.55857 14.8339 9.55844 14.8275 9.55844H11.1451ZM10.0146 10.538H5.98543C6.31149 12.2365 6.98739 13.6503 8 14.7956C9.01261 13.6503 9.68851 12.2365 10.0146 10.538ZM6.83974 14.925C5.90027 13.6895 5.28682 12.2232 4.98965 10.538H1.4524C2.33496 12.8133 4.36927 14.5141 6.83974 14.925ZM9.16027 14.925C10.0997 13.6895 10.7132 12.2232 11.0104 10.538H14.5476C13.665 12.8133 11.6307 14.5141 9.16027 14.925ZM14.5476 5.46197H11.0104C10.7132 3.77685 10.0997 2.31052 9.16026 1.07502C11.6307 1.48588 13.665 3.18673 14.5476 5.46197ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z"
                              fill="#979797"/>
                    </svg>
                </Button>
            </HtmlTooltip>
        </ClickAwayListener>
    );
}

export default AllLanguagesButton
