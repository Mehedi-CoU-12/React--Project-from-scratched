import React, { useState } from "react";

function App() {
    const [color, setColor] = useState("olive");

    function changeBgColor(colour) {
        setColor(colour);
    }

    return (
        <div className="w-full h-screen" style={{ backgroundColor: color }}>
            <div className="flex fixed justify-center bottom-12 inset-x-2 px-2">
                <div className="flex flex-wrap justify-center gap-3 bg-white px-2 py-1 rounded-3xl">
                    <button
                        onClick={() => changeBgColor("red")}
                        className="outline-none px-2 py-1 rounded-full text-white shadow-lg"
                        style={{ backgroundColor: "red" }}
                    >
                        Red
                    </button>
                    <button
                        onClick={() => changeBgColor("green")}
                        className="outline-none px-2 py-1 rounded-full text-white shadow-lg"
                        style={{ backgroundColor: "green" }}
                    >
                        green
                    </button>
                    <button
                        onClick={() => changeBgColor("blue")}
                        className="outline-none px-2 py-1 rounded-full text-white shadow-lg"
                        style={{ backgroundColor: "blue" }}
                    >
                        blue
                    </button>
                    <button
                        onClick={() => changeBgColor("maroon")}
                        className="outline-none px-2 py-1 rounded-full text-white shadow-lg"
                        style={{ backgroundColor: "maroon" }}
                    >
                        maroon
                    </button>
                    <button
                        onClick={() => changeBgColor("yellow")}
                        className="outline-none px-2 py-1 rounded-full text-black shadow-lg"
                        style={{ backgroundColor: "yellow" }}
                    >
                        yellow
                    </button>
                    <button
                        onClick={() => changeBgColor("azure")}
                        className="outline-none px-2 py-1 rounded-full text-black shadow-lg"
                        style={{ backgroundColor: "azure" }}
                    >
                        azure
                    </button>
                    <button
                        onClick={() => changeBgColor("black")}
                        className="outline-none px-2 py-1 rounded-full text-white shadow-lg"
                        style={{ backgroundColor: "black" }}
                    >
                        Dark
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
