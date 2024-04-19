import React, {useState} from "react";
import dynamic from "next/dynamic";
import {useNotification} from "@/components/Functions/notification";
import FormInput from "@/components/FormInput";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Button from "@mui/material/Button";
import Checkbox from '@mui/material/Checkbox';
import {FilledInput, FormControlLabel} from "@mui/material";
import Typography from "@mui/material/Typography";
import styles from "./Login.module.css";

const IconButton = dynamic(() => import("@mui/material/IconButton", {ssr: false}))
const Visibility = dynamic(() => import("@mui/icons-material/Visibility", {ssr: false}))
const VisibilityOff = dynamic(() => import("@mui/icons-material/VisibilityOff", {ssr: false}))

let refs = {};
const LoginForm = ({handleClickShowForgotPassword, handleClickShowRegister}) => {
    const {notify, errorNotify} = useNotification();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formData, setForm] = useState({});
    const label = {inputProps: {'aria-label': 'Checkbox demo'}};

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };

    const handleInput = ({name, value}) => {
        formData[name] = value;
    }

    const submitRegisterInformation = (e) => {
        e.preventDefault();
        setLoading(true);

        if (!email) {
            errorNotify('لطفا ایمیل خود را وارد کنید')
        } else if (!password) {
            errorNotify('لطفا رمز عبور خود را وارد کنید')
        }
    };

    return (
        <form onSubmit={submitRegisterInformation} className={styles.wrapper}>
            <FormInput
                ref={ref => {
                    refs.email = ref;
                }}
                label="ایمیل"
                name="email"
                onChange={handleInput}
            />
            <FormControl className={styles.formControlPassword} variant="filled">
                <InputLabel htmlFor="outlined-adornment-password">رمز عبور</InputLabel>
                <FilledInput
                    id="Filled-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment
                            position="end"
                            className={styles.inputAdornment}
                        >
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ?
                                    <VisibilityOff style={{fill: "#000"}}/> :
                                    <Visibility style={{fill: "#000"}}/>
                                }
                            </IconButton>
                        </InputAdornment>
                    }
                    value={password}
                    name="password"
                    label={"رمز عبور"}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormControl>

            <div className={styles.checkBoxAndForgetPass}>
                <FormControlLabel
                    control={<Checkbox {...label} defaultChecked color="success"/>}
                    label="مرا به خاطر بسپار"
                />

                <button onClick={handleClickShowForgotPassword} className={styles.ForgotPassword}>
                    فراموشی رمز عبور
                </button>
            </div>

            <div className={styles.footerLoginModal}>
                <Button
                    type="submit"
                    disabled={loading}
                    variant="contained"
                    className={styles.submitBtn}
                >
                    ورود
                </Button>
            </div>

            <Typography className={styles.unRegisterText}>
                اگر در AdobeArts حساب کاربری ندارید
                <button onClick={handleClickShowRegister} className={styles.RegisterText}>
                    ثبت نام
                </button>
                کنید
            </Typography>
        </form>
    )
}

export default LoginForm