import React, { useState } from "react";
import Input from "./components/Input";


function App() {
    const [name, setName] = useState("");

    return (
        <div>
            <h1>Receive info from child</h1>
            <h2>Name:{name} </h2>
            <Input onChangeName={(e)=>setName(e)}  />
        </div>
    );
}

export default App;
