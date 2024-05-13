import React, {useState} from "react";
import dynamic from "next/dynamic";
import {useNotification} from "@/components/Functions/notification";
import FormInput from "@/components/FormInput";
import {FilledInput} from "@mui/material";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import styles from "./Register.module.css"

const IconButton = dynamic(() => import("@mui/material/IconButton", {ssr: false}))
const Visibility = dynamic(() => import("@mui/icons-material/Visibility", {ssr: false}))
const VisibilityOff = dynamic(() => import("@mui/icons-material/VisibilityOff", {ssr: false}))

let refs = {};
const RegisterForm = ({handleClickShowLogin}) => {
    const {errorNotify} = useNotification();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [formData, setForm] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };
    const handleMouseDownConfirmPassword = (e) => {
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
                    refs.firstName = ref;
                }}
                label="نام"
                name="firstName"
                onChange={handleInput}
            />
            <FormInput
                ref={ref => {
                    refs.lastName = ref;
                }}
                label="نام خانوادگی"
                name="lastName"
                onChange={handleInput}
            />
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

            <FormControl className={styles.formControlPassword} variant="filled">
                <InputLabel htmlFor="outlined-adornment-password">تکرار رمز عبور</InputLabel>
                <FilledInput
                    id="Filled-adornment-password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment
                            position="end"
                            className={styles.inputAdornment}
                        >
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowConfirmPassword}
                                onMouseDown={handleMouseDownConfirmPassword}
                                edge="end"
                            >
                                {showConfirmPassword ?
                                    <VisibilityOff style={{fill: "#000"}}/> :
                                    <Visibility style={{fill: "#000"}}/>
                                }
                            </IconButton>
                        </InputAdornment>
                    }
                    value={confirmPassword}
                    name="confirmPassword"
                    label={"تکرار رمز عبور"}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </FormControl>

            <div className={styles.footerLoginModal}>
                <Button
                    type="submit"
                    disabled={loading}
                    variant="contained"
                    className={styles.submitBtn}
                >
                    ثبت نام
                </Button>
            </div>

            <Typography className={styles.unRegisterText}>
                عضو AdobeArts هستید.
                <button onClick={handleClickShowLogin} className={styles.RegisterText}>
                    ورود
                </button>
            </Typography>
        </form>
    )
}

export default RegisterForm