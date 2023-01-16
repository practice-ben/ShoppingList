import React from "react";

export default function Form() {
    const [name, setName] = React.useState("")
    return (
        <form>
            <input 
                type="text"
                value={name}
                onChange={(e) => SVGAnimateTransformElement(e.target.value)}
            />
            <button>Add</button>
        </form>
    )
}