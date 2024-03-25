import React, {ReactElement, ReactNode} from 'react';
import NextLink from 'next/link';
import {useRouter} from "next/router";

type Link = (
    props: {
        to: string;
        className?: string;
        convertial?: boolean;
        children: ReactNode;
    }
) => ReactElement;

const Link: Link = ({to = "/", children, convertial = true, ...props}) => {
    const {locale} = useRouter();

    // const getProcessedLink = (link: string): string => convertial ? link.charAt(0) === "/" ? `/${locale}${link}` : `/${locale}${asPath}/${link}` : link;

    return (
        <NextLink href={to} locale={locale} {...props}>
            {children}
        </NextLink>
    );
};

export default Link;