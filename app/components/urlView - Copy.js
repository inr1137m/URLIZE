import React, { useState } from "react"
import fetch from "node-fetch"
import { saveAs } from "file-saver"

function UrlView(props) {
  const [butVal, setbutval] = useState("Snip")
  const [snipbutton, setsnipbutton] = useState(false)
  // props.ulist.map(m => console.log(m))
  // console.log(props.ulist.length)
  function allert(ur) {
    alert(ur)
  }
  async function snipPage(imgurl) {
    // e.preventDefault()
    try {
      setbutval("processing")
      setsnipbutton(true)
      var iurl = "http://localhost:5000/snip?url=" + imgurl
      // var el = document.createElement("div")
      // el.setAttribute(
      //   "style",
      //   "position:absolute;top:40%;left:20%;background-color:white;"
      // )
      // el.innerHTML = "Please wait..."
      // document.body.appendChild(el)
      var link = document.createElement("a")
      link.href = iurl
      link.setAttribute("target", "_target")
      link.click()
      setTimeout(() => {
        setsnipbutton(false)
        setbutval("Snip")
      }, 5000)
      // el.parentNode.removeChild(el)
    } catch (error) {
      console.log("Error : ", error)
    }
  }
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
                    onClick={() => snipPage(m.url)}
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
