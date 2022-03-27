import React from "react"

function Container(props) {
  return (
    <div
      className={
        "container py-sm-5" + (props.Wide ? " " : " container--narrow")
      }
    >
      {props.children}
    </div>
  )
}

export default Container
