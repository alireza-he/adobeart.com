import React, {useState} from 'react';
import PagesBox from "@/components/Pages";

const Pages = () => {
    const [page, setPage] = useState(true);

    return (
        <div>
            <PagesBox/>
        </div>
    );
};

export default Pages;