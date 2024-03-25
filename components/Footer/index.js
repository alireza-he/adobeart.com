import React, {useState} from "react";
import Image from "next/image";
import Fab from "@mui/material/Fab";
import Grid from '@mui/material/Grid';
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
// import {useNotification} from "notify";
import dynamic from "next/dynamic";
import styles from "./Footer.module.css"
import Link from "../Link";
import {TextField} from "@mui/material";

const DoneIcon = dynamic(() => import("@mui/icons-material/Done"), {ssr: false})

const Footer = () => {
    // const data = usePublicData()?.footer;
    // const {notify, errorNotify} = useNotification();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    // const onSubmit = event => {
    //     event.preventDefault();
    //
    //     if (!email) {
    //         errorNotify("Email is required")
    //     }

    //     setLoading(true);
    //     postRequest(
    //         'posts/submission',
    //         {
    //             title: email,
    //             type: "newsletters"
    //         }
    //     )
    //         .then(res => {
    //             if (res.data.status === 200) {
    //                 setEmail('');
    //                 notify(__("Your Email address added successfully"))
    //             } else if (res.data.message)
    //                 errorNotify(res.data.message)
    //             setLoading(false);
    //         })
    // };

    return (
        <footer className={styles.FooterDiv}>
            <div className="container">
                This is Footer page
                {/*<Grid container spacing={2} className={styles.bodyFooterDiv}>*/}
                {/*    <Grid item xs={12} md={4}>*/}
                {/*        <div className={styles.parent_LogoIslamicSourcesFooter}>*/}
                {/*            <Image*/}
                {/*                src="/assets/islamicSources.png"*/}
                {/*                alt="islamic sources"*/}
                {/*                layout="fill"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*        <Link to="/about">*/}
                {/*            <Typography*/}
                {/*                variant="caption"*/}
                {/*                component="div"*/}
                {/*                className={styles.captionFooterLogo}*/}
                {/*            >*/}
                {/*                {"About & Contact"}*/}
                {/*            </Typography>*/}
                {/*        </Link>*/}

                {/*        <Typography*/}
                {/*            variant="h4"*/}
                {/*            gutterBottom*/}
                {/*            component="div"*/}
                {/*            className={styles.TemplateOwnershipText}*/}
                {/*        >*/}
                {/*            {"All rights reserved for islamic source"}*/}
                {/*        </Typography>*/}
                {/*    </Grid>*/}
                {/*    <Grid*/}
                {/*        item*/}
                {/*        xs={12}*/}
                {/*        md={2}*/}
                {/*    >*/}
                {/*        {*/}
                {/*            data.section?.apps && (*/}
                {/*                <>*/}
                {/*                    <Typography*/}
                {/*                        variant="h4"*/}
                {/*                        component="h4"*/}
                {/*                        className={styles.titleSocialMediaBox}*/}
                {/*                    >*/}
                {/*                        {"Android Apps"}*/}
                {/*                    </Typography>*/}
                {/*                </>*/}
                {/*            )*/}
                {/*        }*/}
                {/*    </Grid>*/}

                {/*    <Grid item xs={12} md={5} className={styles.lastCellBody}>*/}
                {/*        {*/}
                {/*            // data.section?.seo_box && data.seo_box && (*/}
                {/*            //     <Scrollbars className={styles.scrollbarsFooter}>*/}
                {/*                    /!*<div dangerouslySetInnerHTML={{__html: data.seo_box}}/>*!/*/}
                {/*                    {"Android Apps"}*/}
                {/*                // </Scrollbars>*/}
                {/*            // )*/}
                {/*        }*/}
                {/*        {*/}
                {/*            // data.section?.newsletter && (*/}
                {/*                <form*/}
                {/*                    onSubmit={"onSubmit"}*/}
                {/*                    className={styles.formBox}*/}
                {/*                >*/}
                {/*                    <TextField*/}
                {/*                        fullWidth*/}
                {/*                        value={email}*/}
                {/*                        id="YourEmail"*/}
                {/*                        variant="filled"*/}
                {/*                        placeholder={__("Your Email")}*/}
                {/*                        label={__("Join Our Newsletter")}*/}
                {/*                        onChange={(e) => setEmail(e.target.value)}*/}
                {/*                        className={styles.emailInput}*/}
                {/*                    />*/}
                {/*                    <div>*/}
                {/*                        <Fab type="submit" variant="circular" disabled={loading}>*/}
                {/*                            {*/}
                {/*                                loading ?*/}
                {/*                                    <CircularProgress size={25}/>*/}
                {/*                                    :*/}
                {/*                                    <DoneIcon color="inherit"/>*/}
                {/*                            }*/}
                {/*                        </Fab>*/}
                {/*                    </div>*/}
                {/*                </form>*/}
                {/*            // )*/}
                {/*        }*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}
            </div>
        </footer>
    )
}

export default Footer;
