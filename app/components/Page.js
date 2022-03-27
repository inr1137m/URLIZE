import React, { useEffect } from "react"
import Container from "./container"

function Page(props) {
  useEffect(() => {
    document.title = `${props.title} | SNAPAPP`
    window.scrollTo(0, 0)
  }, [])
  return <Container Wide={props.Wide}>{props.children}</Container>
}

export default Page
