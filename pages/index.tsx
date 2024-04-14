import React from "react"
import {Inter} from "next/font/google";
import BannerTop from "/components/BannerTop"

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
            <BannerTop/>
        </>
    )
}

export default Home;

