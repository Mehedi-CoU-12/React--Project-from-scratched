import React from "react";
import { useState } from "react";

function App() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        cPasswrod: "",
    });

    const handleSubmit = () => {
        const { name, email, password, cPasswrod } = user;

        if (!name || !email || !password || !cPasswrod) {
            alert(`fill all the information`);
            return;
        }

        if (password !== cPasswrod) {
            alert(`password does not matched!`);
            return;
        }

        try {
            const users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(user);

            localStorage.setItem("users", JSON.stringify(users));

            setUser({
                name: "",
                email: "",
                password: "",
                cPasswrod: "",
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <h1>User Information Form</h1>
            <div>
                <label htmlFor="">Name</label>
                <input
                    type="text"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input
                    type="email"
                    value={user.email}
                    onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                    }
                />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input
                    type="password"
                    value={user.password}
                    onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                    }
                />
            </div>
            <div>
                <label htmlFor="">Confrim Password</label>
                <input
                    type="password"
                    value={user.cPasswrod}
                    onChange={(e) =>
                        setUser({ ...user, cPasswrod: e.target.value })
                    }
                />
            </div>
            <button onClick={handleSubmit}>submit</button>
        </>
    );
}

export default App;
