import React from "react"
import Page from "./Page"

function Terms() {
  return (
    <Page title="Portfolio" Wide="true">
      <h2>My Portfolio</h2>
      <p style={{ "text-align": "right" }}>
        <a href="https://inr1137m.github.io/portfolio/" target="_blank">
          view in new tab
        </a>
      </p>
      <iframe
        className="portframe"
        src="https://inr1137m.github.io/portfolio/"
        width="100%"
        height="100%"
        frameBorder="0"
      ></iframe>
      {/* <p className="lead text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        dolorum labore quisquam vel id dicta fuga! Ducimus, quo. Dolore commodi
        aliquid error veritatis consequuntur, excepturi cumque fuga eum incidunt
        doloremque?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At qui enim
        rem totam voluptatum. Aut saepe temporibus, facilis ex a iste expedita
        minima dolorum dicta doloribus libero aliquid, quae maxime? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Fugiat suscipit beatae eum,
        est soluta ducimus ratione et impedit sapiente, nihil, atque dignissimos
        adipisci? Totam atque officia quis voluptates sed veniam?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
        voluptates quisquam possimus tenetur, dicta enim rerum quis, quaerat id
        nobis provident quo dolorum sapiente temporibus facere non repellendus
        consequatur cupiditate!
      </p>
      <h3>Details</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laboriosam
        distinctio atque sint earum? Temporibus, voluptas aspernatur aliquam
        nisi sed harum laborum, nemo odio animi officia quisquam. Veniam, natus
        reprehenderit.
      </p> */}
    </Page>
  )
}

export default Terms
