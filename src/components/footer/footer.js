import * as React from "react"

const Footer = () => {
    return (
        <footer className="bg-dark pt-5 pb-5 position-relative text-white" style={{ fontSize: 16 }}>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md">
                        <div className="mb-4">
                            <h2>
                                <a href='/' className="text-uppercase fw-bold text-decoration-none text-white">
                                    Not <span style={{ color: '#01d28e'}}> Normal</span>
                                </a>
                            </h2>
                            <p className="opacity-75"> MINI owners &amp; fan club in Ukraine 🇺🇦
                                Club events and meetings 🏁
                                Official hashtag #miniclubua</p>
                            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                <li className="ftco-animate fadeInUp ftco-animated">
                                    <a href="https://t.me/miniclubua">
                                        <span className="icon-telegram"></span>
                                    </a>
                                </li>

                                <li className="ftco-animate fadeInUp ftco-animated">
                                    <a href="https://www.instagram.com/miniclubukraine/">
                                        <span className="icon-instagram"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="opacity-75">
                            Copyright © 2024 All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer