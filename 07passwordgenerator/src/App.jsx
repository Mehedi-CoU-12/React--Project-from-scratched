import { useRef } from "react";
import { useCallback, useEffect, useState } from "react";

function App() {
    const [password, setPassword] = useState("");
    const [Length, setLenth] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [characterAllowed, setCharacterAllowed] = useState(false);

    //useRef
    const passwordRef=useRef();

    const copyPasswordToClipBoard=()=>{
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);
    }

    const passwordGenerator = useCallback((len, str) => {
        let password = "";

        for (let i = 0; i < len; i++) {
            let index = Math.floor(Math.random() * str.length);
            password += str[index];
        }

        return password;
    },[Length,numberAllowed,characterAllowed]);

    useEffect(() => {
        //making password string
        const makePasswordString = () => {
            let passwordString =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            let specialChar = "!@#$%^&*()-_+";
            let numberStr = "0123456789";

            if (numberAllowed) passwordString += numberStr;

            if (characterAllowed) passwordString += specialChar;

            return passwordString;
        };

        let str = makePasswordString();
        let madedPassword = passwordGenerator(Length, str);

        setPassword(madedPassword);
    }, [Length, numberAllowed, characterAllowed]);

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
                            ref={passwordRef}
                        />
                        <button onClick={copyPasswordToClipBoard} className="p-2 rounded-r bg-teal-500 text-white">
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
                                onChange={() => setNumberAllowed(!numberAllowed)}
                            />
                            <label htmlFor="">Numbers</label>
                        </div>
                        <div className="gap-1 flex flex-row">
                            <input
                                type="checkbox"
                                onChange={() => setCharacterAllowed(!characterAllowed)}
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
