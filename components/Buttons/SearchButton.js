import React, {useState} from 'react';
import Tooltip, {tooltipClasses} from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {styled} from '@mui/material/styles';
import {FormControl, Grid, TextField} from "@mui/material";
import styles from "./Buttons.module.css";

const HtmlTooltip = styled(({className, ...props}) => (
    <Tooltip {...props} classes={{popper: className}}/>
))(({theme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        padding:"0",
        borderRadius: "2.5rem",
    },
}));

const SearchButton = () => {
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
                className={styles.tooltipSearchBox}
                PopperProps={{
                    disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                title={
                    <FormControl component="fieldset" className={styles.formControlSearchBox}>
                        <Grid container spacing={1}>
                            <Grid item>
                                <TextField
                                    placeholder="جستجو"
                                    variant="outlined"
                                    fullWidth
                                    className={styles.SearchBox}
                                />
                            </Grid>
                        </Grid>
                    </FormControl>
                }
            >
                <button onClick={handleTooltipOpen} className={styles.mx_btn}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16 15.1631L11.5305 10.6937C12.6045 9.4043 13.1401 7.75053 13.0258 6.07637C12.9115 4.40221 12.1562 2.83656 10.9169 1.70512C9.67769 0.573682 8.04995 -0.0364378 6.37233 0.0016847C4.69471 0.0398072 3.09636 0.723236 1.9098 1.9098C0.723236 3.09636 0.0398072 4.69471 0.0016847 6.37233C-0.0364378 8.04995 0.573682 9.67769 1.70512 10.9169C2.83656 12.1562 4.40221 12.9115 6.07637 13.0258C7.75053 13.1401 9.4043 12.6045 10.6937 11.5305L15.1631 16L16 15.1631ZM1.20458 6.53093C1.20458 5.47748 1.51696 4.44768 2.10223 3.57177C2.6875 2.69585 3.51936 2.01316 4.49262 1.61002C5.46589 1.20689 6.53684 1.10141 7.57005 1.30692C8.60326 1.51244 9.55233 2.01973 10.2972 2.76463C11.0421 3.50954 11.5494 4.4586 11.7549 5.49181C11.9605 6.52502 11.855 7.59597 11.4518 8.56924C11.0487 9.5425 10.366 10.3744 9.49009 10.9596C8.61418 11.5449 7.58438 11.8573 6.53093 11.8573C5.11878 11.8557 3.76491 11.294 2.76636 10.2955C1.76782 9.29696 1.20615 7.94309 1.20458 6.53093Z"
                            fill="#979797"/>
                    </svg>
                </button>
            </HtmlTooltip>
        </ClickAwayListener>
    );
};

export default SearchButton;