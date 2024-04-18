import React from "react"
import {Inter} from "next/font/google";
import BannerTop from "/components/BannerTop"
import Pages from "/components/Pages"

// const inter = Inter({ subsets: ["latin"] });
//
// export default function Home() {
//   return (
//     <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
//     </main>
//   );
// }
const Home = () => {
    return (
        <>
            <BannerTop src={"/assets/banners/main.jpg"}/>

            <Pages/>
        </>
    )
}

export default Home;

