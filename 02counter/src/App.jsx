import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";

function App() {
    let [counter, setCoutner] = useState(15);
    function addValue() {
        setCoutner(counter + 1);
    }
    function removeValue() {
        setCoutner(counter - 1);
    }

    return (
        <>
            <div>Counter: {counter}</div>
            <button onClick={addValue}>Add Value</button>
            <br />
            <button onClick={removeValue}>Remove Value</button>
            <Timer/>
        </>
    );
}

export default App;
