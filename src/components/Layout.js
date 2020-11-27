import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Scroll from "../components/Scroll"

const Layout = ({ children }) => {
    return (
        <>
            <Scroll showBelow={250} />
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout
