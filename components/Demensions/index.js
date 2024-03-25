import {useEffect, useState} from 'react';

export function useMobile() {
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        const changedValue = window.innerWidth <= 430;
        if(changedValue !== isMobile)
            setMobile(changedValue);
    }, [isMobile]);

    return isMobile;
}

export function useDesktop() {
    const [isDesktop, setDesktop] = useState(false);

    useEffect(() => {
        const changedValue = window.innerWidth >= 430;
        if(changedValue !== isDesktop)
            setDesktop(changedValue);
    }, [isDesktop]);

    return isDesktop;
}
