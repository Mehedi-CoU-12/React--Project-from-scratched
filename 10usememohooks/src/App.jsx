import { useMemo, useState } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
    const [number, setNumber] = useState(10);

    const [dark, setDark] = useState(false);

    const pref = useRef();
    const handleClick = () => {
        setDark(!dark);
        pref.current.style.backgroundColor = `${dark ? "red" : "green"}`;
    };

    const doubleTheNumber = useMemo(() => slowFuntion(number), [number]);

    function slowFuntion(num) {
        console.log("calling slow function");

        for (let i = 0; i < 1000000000; i++) {}

        return num * 2;
    }

    return (
        <>
            <input
                onChange={(e) => setNumber(Number(e.target.value))}
                value={number}
                type="number"
            />
            <button onClick={handleClick}>change theme</button>
            <p ref={pref} style={{ backgroundColor: "red", height: "100px" }}>
                {doubleTheNumber}
            </p>
        </>
    );
}

export default App;
