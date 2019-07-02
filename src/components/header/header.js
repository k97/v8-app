import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import menuIcon from "../../images/menu.svg"
import './header.scss'


const Header = ({ siteTitle }) => (
  <header className="site-header">
    <div className="header-wrapper">
        <Link to="/">
          <img src={menuIcon} />
        
          <h1>Karthik</h1>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
