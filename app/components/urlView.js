import React, { useState } from "react"
import fetch from "node-fetch"
// import { saveAs } from "file-saver"

function UrlView(props) {
  const baseurl = process.env.URLIZE_BASE_URL
  const [butVal, setbutval] = useState("Snip")
  const [snipbutton, setsnipbutton] = useState(false)

  //----------------------------------------

  async function download(url) {
    console.log("Urlize : " + baseurl + "snip?url=" + url)
    setbutval("processing")
    setsnipbutton(true)
    fetch(baseurl + "snip?url=" + url, {
      method: "GET",
      headers: {}
    })
      .then(response => {
        response
          .arrayBuffer()
          .then(function (buffer) {
            const url = window.URL.createObjectURL(new Blob([buffer]))
            const link = document.createElement("a")
            link.href = url
            link.setAttribute("download", "Snip-" + String(Date.now()) + ".png") //or any other extension
            document.body.appendChild(link)
            link.click()
          })
          .then(setsnipbutton(false))
          .then(setbutval("Snip"))
      })

      .catch(err => {
        console.log(err)
      })
  }

  //----------------------------------------

  return (
    <>
      <p>Total {props.ulist.length} urls found...</p>
      <table
        id="urlTable"
        className="table-responsive table-striped table-bordered table-hover table"
        border={2}
        cellPadding={5}
      >
        <thead>
          <tr>
            <td>Url</td>
            <td>Title</td>
            <td>Snip</td>
          </tr>
        </thead>
        <tbody>
          {props.ulist.map(m => {
            return (
              <tr key={m.id}>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => download(m.url)}
                    disabled={snipbutton}
                  >
                    {butVal}
                  </button>
                </td>
                <td>
                  <a href={m.url} target="_blank">
                    {m.url}
                  </a>
                </td>
                <td>{m.title}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default UrlView
