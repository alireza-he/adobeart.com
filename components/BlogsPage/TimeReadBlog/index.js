import React from 'react';
import Typography from "@mui/material/Typography";

const TimeReadBlog = ({classNameWrapper, text}) => {
    return (
        <div className={classNameWrapper}>
            <Typography component={"span"} variant={"caption"}>
                {text}
            </Typography>

            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.99967 6.33325V8.99992L8.66634 9.99992M6.99967 3.33325C3.87006 3.33325 1.33301 5.87031 1.33301 8.99992C1.33301 12.1295 3.87006 14.6666 6.99967 14.6666C10.1293 14.6666 12.6663 12.1295 12.6663 8.99992C12.6663 5.87031 10.1293 3.33325 6.99967 3.33325ZM6.99967 3.33325V1.33325M5.66634 1.33325H8.33301M12.5523 3.72795L11.5523 2.72795L12.0523 3.22795M1.44702 3.72795L2.44702 2.72795L1.94702 3.22795"
                    stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    );
};

export default TimeReadBlog;