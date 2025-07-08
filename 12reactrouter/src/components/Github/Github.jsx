import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Github() {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("https://api.github.com/users/Mehedi-CoU-12")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github followers: {data?.followers}
            <img
                className="rounded-3xl"
                width={300}
                src={data?.avatar_url}
                alt="profile picture"
            />
        </div>
    );
}

export default Github;
