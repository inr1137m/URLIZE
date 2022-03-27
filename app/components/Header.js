import React from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="header-bar bg-primary mb-3">
      <div className="container-fluid d-flex flex-column flex-sm-row align-items-center p-2">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <Link to="/" className="text-white">
            <i className="fa fa-crop" aria-hidden="true">
              {" "}
            </i>
            SNAPAPP
          </Link>
        </h4>
        <Link to="/">
          <button id="navtag" className="btn bg-transparent">
            Home
          </button>
        </Link>
        <Link to="/about-us">
          <button id="navtag" className="btn bg-transparent">
            About
          </button>
        </Link>
        <Link to="/terms">
          <button id="navtag" className="btn bg-transparent">
            Portfolio
          </button>
        </Link>
      </div>
    </header>
  )
}

export default Header
