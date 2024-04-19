import React, {useState} from 'react';
import FormInput from "@/components/FormInput";
import Link from "@/components/Link";
import Button from "@mui/material/Button";
import {useNotification} from "@/components/Functions/notification";
import Typography from "@mui/material/Typography";
import styles from "./ForgetPassword.module.css"

let refs = {};
const ForgotPass = ({handleClickShowRegister}) => {
    const {notify, errorNotify} = useNotification();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [formData, setForm] = useState({});

    const handleInput = ({name, value}) => {
        formData[name] = value;
    }

    const submitRegisterInformation = (e) => {
        e.preventDefault();
        setLoading(true);

        if (!email) {
            errorNotify('لطفا ایمیل خود را وارد کنید')
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

            <div className={styles.footerLoginModal}>
                <Button
                    type="submit"
                    disabled={loading}
                    variant="contained"
                    className={styles.submitBtn}
                >
                    بازیابی رمز عبور
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
    );
};

export default ForgotPass;