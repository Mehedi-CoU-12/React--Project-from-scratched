import React, { useState } from "react";
import { sum } from "../sum";
import AdminData from "./AdminData";

function Home() {
    const [isAdmin, setIsAdmin] = useState(false);

    const handleClick = () => {
        alert(`${sum()}`);
    };

    return (
        <div className="flex flex-col items-center justify-center m-10">
            <h1 className="bg-gray-400 m-3 rounded text-white">Home</h1>
            <button
                onClick={handleClick}
                className="bg-green-400 rounded text-white m-3"
            >
                Add 2+2
            </button>
            <button
                onClick={() => setIsAdmin(!isAdmin)}
                className="bg-green-400 rounded text-white m-3"
            >
                Toggle Admin
            </button>
            {isAdmin ? <AdminData /> : <h2>Not Admin</h2>}
        </div>
    );
}

export default Home;
