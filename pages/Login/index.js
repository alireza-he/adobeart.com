import React, {useState} from 'react';
import ForgotPass from "@/components/Auth/ForgetPassword";
import LoginForm from "@/components/Auth/Login";
import RegisterForm from "@/components/Auth/Register";
import LogoSite from "@/components/Header/LogoSite";
import Typography from "@mui/material/Typography";
import classNames from "classnames";
import styles from "./Login.module.css";

const Login = () => {
    const [Login, setLogin] = useState(true);
    const [ForgotPassword, setForgotPassword] = useState(false);
    const [Register, setRegister] = useState(false);

    const handleClickShowLogin = () => {
        setLogin(true);
        setForgotPassword(false);
        setRegister(false);
    };

    const handleClickShowForgotPassword = () => {
        setLogin(false);
        setForgotPassword(true);
    };

    const handleClickShowRegister = () => {
        setLogin(false);
        setForgotPassword(false);
        setRegister(true);
    };

    return (
        <div className={classNames(styles.wrapper, "container")}>
            <div className={styles.boxLogin}>
                <LogoSite/>

                {
                    Register &&
                    <Typography className={styles.text}>
                        برای ورود لطفا نام کاربری و رمزعبور خود را وارد نمایید
                    </Typography>
                }

                {
                    Login &&
                    <LoginForm
                        handleClickShowForgotPassword={handleClickShowForgotPassword}
                        handleClickShowRegister={handleClickShowRegister}
                    />
                }

                {
                    ForgotPassword &&
                    <ForgotPass
                        handleClickShowRegister={handleClickShowRegister}
                    />
                }

                {
                    Register &&
                    <RegisterForm
                        handleClickShowLogin={handleClickShowLogin}
                    />
                }
            </div>
        </div>
    );
};

export default Login;