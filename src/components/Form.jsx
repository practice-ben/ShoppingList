import React from "react";

export default function Form({setBuy}) {
    const [name, setName] = React.useState("")
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
        }}>
            <input 
                required
                type="text"
                placeholder="Add a new item"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyUp={(e) => {
                    if(e.key === "Enter" && name) {
                        setBuy(name);
                        setName("")
                    }
                } }
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