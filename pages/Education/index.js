import React from 'react';
import Pages from "/components/IconMenu";
import EducationPages from "@/components/EducationPage";

const Education = () => {
    return (
        <>
            <Pages/>

            <div style={{marginTop: "3rem"}}>
                <EducationPages/>
            </div>
        </>
    );
};

export default Education;