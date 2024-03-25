import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import Layout from "/layout";
import '/styles/globals.css';
import '/public/assets/fonts/iransans/style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

function MyApp({Component, pageProps, publicData}) {
  const title = "Islamic sources"
  const description = "A comprehensive website that collects, organizes and presents the Islamic sources received by the Messengers of Islam as well as by the religious leaders, researchers, intellectuals, and scholars of Islamic Thought";

  return (
      <>
        <Head>
          <title>{title}</title>
          <meta property="og:title" content={title}/>
          <meta name="twitter:title" content={title}/>
          <meta name="description" content={description}/>
          <meta property="og:description" content={description}/>
          <meta name="twitter:description" content={description}/>
          {/*<link rel="icon" href={publicData?.logo ?? "/assets/islamicSources.png"}/>*/}
          {/*<link rel="stylesheet" href=""/>*/}
        </Head>
        <Layout>
          <Component publicData={publicData} {...pageProps} />
        </Layout>
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