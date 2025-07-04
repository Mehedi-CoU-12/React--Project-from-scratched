import { useEffect, useState } from "react";

function App() {
    const [password, setPassword] = useState("");
    const [Length, setLenth] = useState(8);
    const [number, setNumber] = useState(false);
    const [character, setCharacter] = useState(false);

    const passwordGenerator = (len, str) => {
        let password = "";

        for (let i = 0; i < len; i++) {
            let index = Math.floor(Math.random() * str.length);
            password += str[index];
        }

        return password;
    };

    useEffect(() => {
        //making password string
        const makePasswordString = () => {
            let passwordString =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            let specialChar = "!@#$%^&*()-_+";
            let numberStr = "0123456789";

            if (number) passwordString += numberStr;

            if (character) passwordString += specialChar;

            return passwordString;
        };

        let str = makePasswordString();
        let madedPassword = passwordGenerator(Length, str);

        setPassword(madedPassword);
    }, [Length, number, character]);

    return (
        <>
            <div className="bg-slate-900 w-full h-screen flex items-center flex-col justify-center text-orange-600">
                <h1 className="text-white text-5xl mb-5">Password Generator</h1>
                <div className="bg-blue-950 p-5 rounded-md flex flex-col gap-3">
                    <div>
                        <input
                            className="p-2 rounded-l font-sans outline-none font-semibold text-md"
                            type="text"
                            value={password}
                            readOnly
                        />
                        <button className="p-2 rounded-r bg-teal-500 text-white">
                            copy
                        </button>
                    </div>

                    <div className="flex gap-3">
                        <div className="flex flex-row">
                            <input
                                type="range"
                                min={8}
                                max={20}
                                value={Length}
                                onChange={(e) =>
                                    setLenth(Number(e.target.value))
                                }
                            />
                            <p>Length({Length})</p>
                        </div>
                        <div className="gap-1 flex flex-row">
                            <input
                                type="checkbox"
                                onChange={() => setNumber(!number)}
                            />
                            <label htmlFor="">Numbers</label>
                        </div>
                        <div className="gap-1 flex flex-row">
                            <input
                                type="checkbox"
                                onChange={() => setCharacter(!character)}
                            />
                            <label>Chararters</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
