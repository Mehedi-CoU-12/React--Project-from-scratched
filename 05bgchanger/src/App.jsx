import React, { useState } from "react";

const colors = ["Red", "Green", "Blue", "Maroon", "Yellow", "Azure", "Black"];
const textColor = [
    "white",
    "white",
    "white",
    "white",
    "black",
    "black",
    "white",
];

function App() {
    const [color, setColor] = useState("olive");

    function changeBgColor(colour) {
        setColor(colour);
    }

    return (
        <div className="w-full h-screen" style={{ backgroundColor: color }}>
            <div className="flex fixed justify-center bottom-12 inset-x-2 px-2">
                <div className="flex flex-wrap justify-center gap-3 bg-white px-2 py-1 rounded-3xl">
                    {colors.map((colour, index) => (
                        <button
                            key={index}
                            onClick={() => changeBgColor(colour)}
                            className={`"outline-none px-2 py-1 rounded-full text-${textColor[index]} shadow-lg"`}
                            style={{ backgroundColor: colour }}
                        >
                            {colour}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
