import React, {ReactElement, ReactNode} from 'react';
import NextLink from 'next/link';

type Link = (
    props: {
        to: string;
        className?: string;
        children: ReactNode;
    }
) => ReactElement;

const Link: Link = ({to = "/", children, ...props}) => {
    return (
        <NextLink href={to} {...props}>
            {children}
        </NextLink>
    );
};

export default Link;