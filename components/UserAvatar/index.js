import React from 'react';
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const UserAvatar = ({classNameWrapper, stylesAvatar, name}) => {
    return (
        <div className={classNameWrapper}>
            <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={stylesAvatar}
            />

            <Typography component={"caption"} variant={"caption"}>
                {name}
            </Typography>
        </div>
    );
};

export default UserAvatar ;