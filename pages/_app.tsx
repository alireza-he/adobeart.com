import React from "react";
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import Head from "next/head";
import Layout from "../layout"
import rtlPlugin from 'stylis-plugin-rtl';
import {prefixer} from 'stylis';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import '/public/assets/fonts/iransans/style.css';
import '/styles/globals.css';
import {SnackbarProvider} from 'notistack'

function MyApp({Component, pageProps, publicData}) {
    const title = "AdobeARTS"
    const description = "A comprehensive website for your full training for the job market as well as your projects in the areas of website design, motion graphics, poster design, business card, banner, etc.";

    const theme = (outerTheme) =>
        createTheme({
            direction: 'rtl',
            palette: {
                // mode: outerTheme.palette.mode,
            },
        });

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta property="og:title" content={title}/>
                <meta name="twitter:title" content={title}/>
                <meta name="description" content={description}/>
                <meta property="og:description" content={description}/>
                <meta name="twitter:description" content={description}/>
                <link rel="icon" type="image/x-icon" href={"/favicon.svg"}/>
            </Head>

            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    <div dir="rtl">
                        <SnackbarProvider>
                            <Layout>
                                <Component publicData={publicData} {...pageProps} />
                            </Layout>
                        </SnackbarProvider>
                    </div>
                </ThemeProvider>
            </CacheProvider>
        </>
    )
}


// MyApp.getInitialProps = wrapper.getInitialAppProps(store => async ({Component, ctx}) => {
//     let pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
//
//     ctx.publicData = await getRequest('public')
//         .then(res => res.data.status === 200 ? res.data.data : {});
//
//     const cookie = ctx.req?.headers?.cookie;
//     if (cookie) {
//         const token = getToken(cookie);
//         const userDetails = token ?
//             await getRequest('users', token)
//                 .then(res => res.data.status === 200 ? res.data.data : null)
//             : null
//
//         if (userDetails) store.dispatch(setUser(userDetails));
//     }
//
//     return {pageProps, publicData: ctx.publicData};
// });

export default MyApp;