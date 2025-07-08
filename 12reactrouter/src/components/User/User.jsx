import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const { id } = useParams();

    return (
        <>
            <div className=" w-full h-10 bg-gray-700 text-white flex items-center justify-center">
                <h1 className="text-3xl">
                    Your Params is : <span className="text-red-500">{id}</span>{" "}
                </h1>
            </div>
        </>
    );
}

export default User;
