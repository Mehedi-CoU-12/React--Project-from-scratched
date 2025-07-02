import { useEffect, useState } from "react";

function Timer() {
    let [seconds, setSeconds] = useState(0);

    useEffect(() => {
        console.log("⏱ Mounted");

        const interval = setInterval(() => {
            setSeconds(prev=>prev+1);
        }, 1000);

        return () => {
            clearInterval(interval);
            console.log("🧹 Unmounted (Timer cleaned)");
        };
    }, []);

    return <h1>{seconds}</h1>;
}

export default Timer;
