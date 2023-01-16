import React from "react";

export default function Form({setBuy}) {
    const [name, setName] = React.useState("")
    return (
        <form>
            <input 
                required
                type="text"
                placeholder="Add a new item"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="button" onClick={() => {
                if(name){
                    setBuy(name);
                    setName("")
                }
                }}
            >
                Add
            </button>
        </form>
    )
}