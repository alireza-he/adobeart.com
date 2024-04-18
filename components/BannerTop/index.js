import React from 'react';

const BannerTop = ({src}) => {
    return (
        <div style={{width: "100%", height: "auto"}}>
            <img
                src={src}
                alt={"this is Banner"}
            />
        </div>
    );
};

export default BannerTop;