import React from "react"
import Page from "./Page"

function About() {
  return (
    <Page title="About" Wide="true">
      <h2>About this Project</h2>
      <h4 className="lead text-muted">Hi there 🖐,</h4>
      <p className=" text-muted">
        This is a Single-Page-Application (📄SPA) developed using component
        based 🌐React Js framework and the ⚓Rest API's was developed using
        🐍Python frameworks for URL 🕸Web Scraper and URL 📸Screenshot features.
        This was completely designed and developed for 👨‍🔬my self-learning and
        practical hands-on👨‍💻 in this frameworks.
      </p>
      <ul>
        <li>
          <strong>Front-End </strong>💻 : React Js + Bootstrap + Css + Html5
        </li>
        <li>
          <strong>Back-End </strong>🛠 : Python + Flask + Waitress
        </li>
        <li>
          <strong>Javascript Libraries </strong>📙 :
          <i> React, Node-fetch, Form-data, Webpack & Babel</i>
        </li>
        <li>
          <strong>Python Libraries </strong>📗 :
          <i> Flask, Flask-cors, Waitress, Selenium & Simplified-scrapy</i>
        </li>
      </ul>
      <p>
        <strong>Github Repo's :</strong>
        <ul>
          <li>
            <a href="https://github.com/inr1137m/SNAPAPP.git" target="_blank">
              {" "}
              Source Code-UI 🌐
            </a>
          </li>
          <li>
            <a href="https://github.com/inr1137m/URLIZE.git" target="_blank">
              {" "}
              Source Code-Backend 🐍
            </a>
          </li>
        </ul>
      </p>
      <p className="text-muted">
        <a
          href="https://www.linkedin.com/in/iyyanar-m/"
          target="_blank"
          style={{ color: "red", "font-weight": "bold" }}
        >
          📬 Hit-me up for colloboration.
        </a>
      </p>
      {/* <em>Thanks for visiting my site </em>😊 */}
    </Page>
  )
}

export default About
