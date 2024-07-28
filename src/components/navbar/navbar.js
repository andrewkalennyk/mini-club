import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {StaticImage} from "gatsby-plugin-image";

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const Navbar = () => {
  return (
    <nav className="navbar d-flex navbar-expand-lg navbar-dark bg-dark bg-transparent position-absolute z-3"
      style={{left: 0, right: 0}}>
      <div className="container">
        <div className="d-flex align-items-center">
          <Link to="/" className="navbar-brand" href="#">
            <StaticImage src="../../images/logo.png" width={90} height={90}  alt={'MiniCLub'}/>
          </Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar"
                aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span> Меню
        </button>
        <div className="collapse navbar-collapse d-flex ">
          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <ExactNavLink
                    to="/"
                >
                  Події
                </ExactNavLink>
              </li>
              <li className="nav-item">
                <ExactNavLink
                    to="/services"
                >
                  Сервіси
                </ExactNavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
