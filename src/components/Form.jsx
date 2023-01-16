import React from "react";

export default function Form({setBuy}) {
    const [name, setName] = React.useState("")
    return (
        <form>
            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="button" onClick={() => setBuy(name)}>Add</button>
        </form>
    )
}