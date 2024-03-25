import React from 'react';
import dynamic from "next/dynamic";
import classNames from "classnames";
import Css from './Scrollbar.module.css';

const ScrollbarsModule = dynamic(()=> import('react-custom-scrollbars-2').then(res => res.Scrollbars), {ssr: false});

const Scrollbars = ({className, children, ...props}) => {
    return (
        <ScrollbarsModule className={classNames(Css.scrollbar, className)} {...props}>
            {children}
        </ScrollbarsModule>
    );
}

export default Scrollbars;