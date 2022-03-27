import React from "react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="border-top text-left small text-muted py-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <span>
              <a href="/" className="text-muted">
                SNAPAPP &copy; 2022
              </a>
            </span>
          </div>
          <div className="col-sm-6" id="devtag">
            <span>Designed & Developed by Iyyanar</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
