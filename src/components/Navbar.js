import React from "react"

// Images
import logo from "../images/website_logo_transparent_background.png"

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="logo" width="215" height="88" className="logo" />{" "}
      </Link>
      <ul>
        <li>
          <Link to="/" activeClassName="active">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/about/" activeClassName="active">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/contact/" activeClassName="active">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
