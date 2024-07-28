import * as React from 'react'
import "./layout.scss"
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <Navbar siteTitle={'MiniClub' || `Title`} />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout