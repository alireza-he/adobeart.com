import * as React from 'react';
import LogoSiteHeader from "./LogoSiteHeader";
import {useDesktop, useMobile} from "../Demensions";
import HeaderMenu from "./HeaderMenu";
import UserButton from "../Buttons/UserButton";
import CartButton from "../Buttons/CartButton";
import AllLanguagesButton from "../Buttons/AllLanguagesButton/AllLanguagesButton";
import SearchButton from "../Buttons/SearchButton";
import HeaderResponsiveMenu from "../Header/HeaderResponsiveMenu";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import styles from "./Header.module.css";

const Header = () => {
    const mobile = useMobile();
    const desktop = useDesktop();

    return (
        <AppBar className={styles.HeaderBox}>
            <div className="container">
                <Toolbar className={styles.toolbar}>
                    <div className={styles.buttonsPart}>
                        <UserButton/>
                        <CartButton/>
                        <AllLanguagesButton/>
                        <SearchButton/>
                    </div>

                    {mobile &&
                        <HeaderResponsiveMenu/>
                    }
                    <div className={styles.menuSide}>
                        {desktop &&
                            <HeaderMenu/>
                        }
                    </div>

                    <LogoSiteHeader/>
                </Toolbar>
            </div>
        </AppBar>
    );
}

export default Header
