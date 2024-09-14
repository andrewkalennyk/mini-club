import * as React from "react"
import Layout from '../components/layout/layout'
import BackgroundImage from "../components/backgroundImage/background-image";
import {StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";
import Clubs from "../components/clubs/clubs";

const IndexPage = () => {
  return (
      <Layout>
          <BackgroundImage></BackgroundImage>
          <div className="section bg-light pt-0 position-relative">
              <div className="container">
                  <div className="row ms-0 me-0">
                      <div className="col-md-12" style={{marginTop: -250}}>
                          <div className="row ms-0 me-0 justify-content-center">
                              <div className="col-md-6">
                                  <div className="p-3 bg-white shadow w-100">
                                      <h3 className="mb-4 text-center">Наші соціальні мережі</h3>
                                      <div className="row">
                                          <div className="col-md-6 col-sm-12 mb-sm-3 d-flex align-items-center justify-content-center">
                                              <Link to="https://www.instagram.com/miniclubukraine/" className="navbar-brand" target={"_blank"}>
                                                <StaticImage src="../images/miniclubinst.svg" width={200} height={200}  alt={'MiniCLub'}/>
                                              </Link>
                                          </div>
                                          <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
                                              <Link to="https://t.me/miniclubua" className="navbar-brand" target={"_blank"}>
                                                <StaticImage src="../images/miniclubtg.svg" width={200} height={200}  alt={'MiniCLub'}/>
                                              </Link>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <section className="position-relative p-5">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-7 text-center heading-section">
                        <span className="font-weight-bold subheading">not normal</span>
                        <h2 className="mb-3">Локальні клуби</h2>
                    </div>
                </div>
                <div className="row">
                    <Clubs></Clubs>
                </div>
            </div>
          </section>
      </Layout>
  )
}

export const Head = () => <title>MINI CLUB UKRAINE </title>

export default IndexPage
