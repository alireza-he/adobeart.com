import React, {useState} from 'react';
import PagesBox from "@/components/IconMenu";

const Pages = () => {
    const [page, setPage] = useState(true);

    return (
        <div>
            <PagesBox/>
        </div>
    );
};

export default Pages;