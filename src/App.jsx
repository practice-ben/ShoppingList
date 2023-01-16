import React from "react";
import Form from "./components/Form";

export default function App() {
  const [items, setItems] = React.useState([]);

  function setBuy(item) {
    setItems(prev => [...prev, item])
  }

  const elements = items.map(item => {
    return (
      <div className="listing">
        <p>{item}</p>
        <span className="delete">X</span>
      </div>
    )
  })

  return (
    <div className="container">
      <h1>Items To Buy</h1>
      <div className="items-to-buy">
        <Form setBuy={setBuy} />
      </div>
      <div className="listings">
        {elements}
      </div>
    </div>
  )
}