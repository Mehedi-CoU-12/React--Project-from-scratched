import React from "react";

function Input({ onChangeName }) {
    return (
        <div>
            <label htmlFor="Name">Name</label>
            <input
                onChange={(e) => onChangeName(e.target.value)}
                style={{ color: "black" }}
                type="text"
            />
        </div>
    );
}

export default Input;
