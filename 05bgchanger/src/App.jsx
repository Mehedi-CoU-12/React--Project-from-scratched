import React from "react";

function App() {
    const colors = ["red", "green", "blue", "white", "black", "yellow"];

    function changeBgColor(index) {
        const div = document.getElementById("bg");
        div.style.backgroundColor = colors[index];
    }

    return (
        <div style={{ height: "1000px" }} id="bg">
            <div>
                <h1>sumon bro</h1>
            </div>
            <div>
                {colors.map((color, index) => (
                    <button key={index} onClick={() => changeBgColor(index)}>
                        {color}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default App;
