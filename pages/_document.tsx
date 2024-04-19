import * as React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="fa" dir="rtl">
                <Head>
                    <meta name="theme-color" content="#00c0c3"/>
                    <meta name="emotion-insertion-point" content=""/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}

// MyDocument.getInitialProps = async (ctx) => {
//     const originalRenderPage = ctx.renderPage;
//
//     // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
//     // However, be aware that it can have global side effects.
//     const cache = createEmotionCache();
//     const {extractCriticalToChunks} = createEmotionServer(cache);
//
//     ctx.renderPage = () =>
//         originalRenderPage({
//             enhanceApp: (App) =>
//                 function EnhanceApp(props) {
//                     return <App emotionCache={cache} {...props} />;
//                 },
//         });
//
//     const initialProps = await Document.getInitialProps(ctx);
//     const emotionStyles = extractCriticalToChunks(initialProps.html);
//     const emotionStyleTags = emotionStyles.styles.map((style) => (
//         <style
//             data-emotion={`${style.key} ${style.ids.join(' ')}`}
//             key={style.key}
//             // eslint-disable-next-line react/no-danger
//             dangerouslySetInnerHTML={{__html: style.css}}
//         />
//     ));
//
//     return {
//         ...initialProps,
//         emotionStyleTags,
//         publicData: ctx.publicData
//     };
// };