import React from "react"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Trending from "./components/Trending"
import Tokenomics from "./components/Tokenomics"
import Team from "./components/Team"

export default function App() {
    return (
        <div className="px-14 bg-[#EFF2F5] h-screen">
            <Navbar/>

            {/* <Banner/> */}

            {/* <Trending/> */}

             {/* <Tokenomics/> */}
             <Team/>

        </div>
    )
  }