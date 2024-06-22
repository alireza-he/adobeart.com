import React from 'react';

const BannerTop = ({src}) => {
    return (
        <div style={{width: "100%", height: "auto", marginTop:"4.25rem"}}>
            <img
                src={src}
                alt={"this is Banner"}
            />
        </div>
    );
};

export default BannerTop;