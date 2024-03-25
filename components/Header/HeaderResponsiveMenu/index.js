import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import styles from "./headerResponsiveMenu.module.css"

const DynamicMenuIcon = dynamic(() => import('@mui/icons-material/Menu'), {ssr: false})

const HeaderResponsiveMenu = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const data = [
        {
            "title": "خانه",
            "route":"/"
        },
        {
            "title": "آموزش",
            "route":"training"
        },
        {
            "title": "نمونه کار",
            "route":"portfolio"
        },
        {
            "title": "سفارش",
            "route":"order"
        },
        {
            "title": "تعرفه قیمت",
            "route":"price"
        },
        {
            "title": "پشتیبانی",
            "route":"support"
        },
        {
            "title": "درباره ما",
            "route":"aboutUs"
        },
    ]

    return (
        <>
            <IconButton
                className={styles.menuIcon}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <DynamicMenuIcon className="fillPathWhite"/>
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                className={styles.menu}
            >
                {data.map((page, index) => (
                    <MenuItem key={index} onClick={handleCloseNavMenu}>
                        <Link href={page.route}>
                            <Typography textAlign="center">
                                {page.title}
                            </Typography>
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}

export default HeaderResponsiveMenu;