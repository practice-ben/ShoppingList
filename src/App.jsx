import React from "react";
import Form from "./components/Form";

export default function App() {
  const [items, setItems] = React.useState([]);

  function setBuy(item) {
    setItems(prev => [...prev, item])
  }

  function remove(index) {
    setItems(prev => {
      return prev.filter((item, i) => {
        if(index != i) {
          return true;
        }
      })
    })
  }

  const elements = items.map((item, index) => {
    return (
      <div key={index+1} className="listing">
        <p>{item}</p>
        <span className="delete" onClick={() => remove(index)}>X</span>
      </div>
    )
  })

  return (
    <div className="container">
      <h1 className="title">Items To Buy</h1>
      <div className="items-to-buy">
        <Form setBuy={setBuy} />
      </div>
      <div className="listings">
        {elements}
      </div>
    </div>
  )
}