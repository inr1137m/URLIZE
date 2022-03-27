import React, { useState } from "react"
import fetch from "node-fetch"

import Page from "./Page"
import UrlView from "./urlView"

function Home() {
  const baseurl = process.env.URLIZE_BASE_URL
  const [urlValue, seturlValue] = useState()
  const [urlList, seturlList] = useState()
  const [errorMsg, seterrorMsg] = useState()
  const [snapBut, setsnapBut] = useState(true)
  const [hasValue, sethasValue] = useState(false)

  async function analyzeUrl(e) {
    e.preventDefault()
    try {
      seterrorMsg("Analyzing the Url... please wait !!!")
      var formdata = new FormData()
      formdata.append("urlVal", urlValue)
      console.log("Urlize : " + baseurl + "url")
      var response = await fetch(baseurl + "url", {
        method: "POST",
        body: formdata
      })
      if (response.status == 401) {
        seterrorMsg("Enter correct url...!!!")
      } else {
        seterrorMsg("Internal Error... Try again later...!!!")
      }
      var data = await response.json()

      // for (var i in data) {
      //   console.log(data[i].url)
      // }
      seturlList(data)
      // seturlList(JSON.stringify(data))
      console.log("Url Api success")
      seterrorMsg("")
      sethasValue(true)
    } catch (error) {
      seterrorMsg("Internal Error.. try again later !!!")
      console.log("Error : " + error)
    }
  }

  return (
    // <Page title="Home">
    <Page title="Home" Wide="true">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h3>🔗 Paste your website url below...</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-9">
            <input
              type="url"
              placeholder="https://www.google.com"
              onChange={e => {
                seturlValue(e.target.value)
                if (e.target.value.length > 0) {
                  setsnapBut(false)
                } else {
                  seterrorMsg("")
                  setsnapBut(true)
                }
              }}
              autoFocus
              name="urlField"
              id="input_urlField"
            />
          </div>
          <div className="col-sm-3">
            <button
              type="button"
              id="snapButton"
              className="btn btn-success btn-sm btn-block"
              disabled={snapBut}
              onClick={analyzeUrl}
            >
              SNAP
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {hasValue ? (
              <div>
                <br />
                <UrlView ulist={urlList} />
              </div>
            ) : (
              <div className="lead text-muted">
                <h5 id="ierror">{errorMsg}</h5>
                <h4>Hi there 🖐,</h4>
                <p>
                  This application will 🔍analyze the given Website and
                  🧲retrieves all the sub-urls available in that site. Also, you
                  can 💾download the full-page screenshot 🎴image of each
                  sub-URLs without even visiting the 🐱‍👤site in very high
                  quality📸.
                </p>
                <em>Thanks for visiting my site </em>😊
              </div>
            )}
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Home
