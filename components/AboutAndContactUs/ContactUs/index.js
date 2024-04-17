import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import CircularProgress from "@mui/material/CircularProgress";
import FormInput from "/components/FormInput";
import styles from "./ContactUs.module.css";
import Button from "@mui/material/Button";

let refs = {};
const ContactUs = () => {
    // const {notify, errorNotify} = useNotification();
    const [formData, setForm] = useState({});
    const [loading, setLoading] = useState(false);

    const handleInput = ({name, value}) => {
        formData[name] = value;
    }

    const submitForm = event => {
    //     event?.preventDefault();
    //     formData.type = "opinion";
    //     formData.title = formData.firstName + " " + formData.lastName;
    //     if(!formData.firstName)
    //         return errorNotify("First Name is required");
    //     if(!formData.lastName)
    //         return errorNotify("Last Name is required");
    //     if(!formData.content)
    //         return errorNotify("Your message is empty");
    //     setLoading(true);
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
        <form onSubmit={submitForm} className={"container"} style={{margin:"1.5rem 0"}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <FormInput
                        ref={ref => {
                            refs.firstName = ref;
                        }}
                        label="First Name"
                        name="firstName"
                        onChange={handleInput}
                    />

                    <FormInput
                        ref={ref => {
                            refs.lastName = ref;
                        }}
                        label="Last Name"
                        name="lastName"
                        onChange={handleInput}
                    />

                    <FormInput
                        ref={ref => {
                            refs.writer = ref;
                        }}
                        label="Email Or Phone"
                        name="writer"
                        onChange={handleInput}
                    />

                    <div className={styles.flexBox}>
                        <FormInput
                            ref={ref => {
                                refs.subject = ref;
                            }}
                            label="Country"
                            name="subject"
                            onChange={handleInput}
                        />

                        <Button type="submit" className={styles.sendButton} size="large">
                            {/*{*/}
                            {/*    loading ?*/}
                            {/*         <CircularProgress color="inherit" size={30}/>*/}
                            {/*         :*/}
                                    Send
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
                        label="Your message"
                        name="content"
                        onChange={handleInput}
                    />
                </Grid>
            </Grid>
        </form>
    );
};

export default ContactUs;