import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import CircularProgress from "@mui/material/CircularProgress";
import FormInput from "/components/FormInput";
import styles from "./ContactUs.module.css";
import Button from "@mui/material/Button";
import {useNotification} from "@/components/Functions/notification";

let refs = {};
const ContactUs = () => {
    const {notify, errorNotify} = useNotification();
    const [formData, setForm] = useState({});
    const [loading, setLoading] = useState(false);

    const handleInput = ({name, value}) => {
        formData[name] = value;
    }

    const submitForm = event => {
        event?.preventDefault();
        formData.type = "opinion";
        formData.title = formData.firstName + " " + formData.lastName;
        if(!formData.firstName)
            return errorNotify("نام خود را وارد کنید");
        if(!formData.lastName)
            return errorNotify("نام خانوادگی خود را وارد کنید");
        if(!formData.content)
            return errorNotify("پیام خود را وارد کنید");
        setLoading(true);
    //     postRequest('posts/submission', formData)
    //         .then(res => {
    //             if (res.data.status === 200) {
    //                 notify(__("Your journal submitted successfully"))
    //                 setForm({});
    //                 Object.values(refs).forEach(ref => ref.setValue(''))
    //             }
    //             else if (res.data.message)
    //                 errorNotify(res.data.message)
    //             setLoading(false);
    //         })
    }

    return (
        <form onSubmit={submitForm} className={styles.formDiv}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
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
                            refs.writer = ref;
                        }}
                        label="ایمیل یا شماره موبایل"
                        name="writer"
                        onChange={handleInput}
                    />

                    <div className={styles.wrapperSendBtn}>
                        <Button type="submit" className={styles.sendButton} size="large">
                            {/*{*/}
                            {/*    loading ?*/}
                            {/*         <CircularProgress color="inherit" size={30}/>*/}
                            {/*         :*/}
                                    ارسال
                            {/*}*/}
                        </Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <FormInput
                        multiline
                        minRows={10.3}
                        ref={ref => {
                            refs.content = ref;
                        }}
                        label="پیام شما"
                        name="content"
                        onChange={handleInput}
                    />
                </Grid>
            </Grid>
        </form>
    );
};

export default ContactUs;