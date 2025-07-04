import React, { useEffect, useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    function increment(e) {
        console.log(e);
        console.log(e.nativeEvent)
        setCount(count + 1);
    }

    useEffect(() => {
        console.log("updating stage");

        return () => {
            console.log("unmounting stage");
        };
    }, []);

    return (
        <div>
            <h1>Counter:{count} </h1>
            <button onClick={(e) => increment(e)}>Click Me!</button>
        </div>
    );
}

export default App;
