import React from "react";
import { useState } from "react";

function Folder({ explorer }) {
    const [expand, setExpand] = useState(false);
    const [inputData, setInputData] = useState("");

    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: false,
    });

    const handleNewFileAndFolder = (e, isFolder) => {
        e.stopPropagation();

        setExpand(true);
        setShowInput({ ...showInput, visible: true, isFolder });
    };

    const hanleOnKeyDown = (e) => {
        if (e.which === 13 && e.target.value) {
            setInputData(e.target.value.trim(""));
        }
    };

    if (explorer.isFolder) {
        return (
            <div className="ml-5">
                <div
                    onClick={() => setExpand((prev) => !prev)}
                    className="cursor-pointer flex justify-between m-1 p-0.5 bg-slate-100 w-56 h-6"
                >
                    <span>📁 {explorer.name}</span>
                    <div>
                        <button
                            className="pr-1 rounded-sm hover:bg-slate-200"
                            onClick={(e) => handleNewFileAndFolder(e, true)}
                        >
                            🗁
                        </button>
                        <button
                            className="pl-1 rounded-sm hover:bg-slate-200"
                            onClick={(e) => handleNewFileAndFolder(e, false)}
                        >
                            🗄
                        </button>
                    </div>
                </div>

                <div style={{ display: expand ? "block" : "none" }}>
                    {showInput.visible && (
                        <div className="ml-5">
                            <span>{showInput.isFolder ? `📁` : `🗄`}</span>
                            <input
                                autoFocus
                                className="rounded text-left ml-2 p-1 h-6"
                                type="text"
                                onBlur={() =>
                                    setShowInput({
                                        ...showInput,
                                        visible: false,
                                    })
                                }
                                onKeyDown={(e) => hanleOnKeyDown(e)}
                            />
                        </div>
                    )}
                    {explorer.items.map((folder, key) => {
                        return <Folder key={key} explorer={folder} />;
                    })}
                </div>
            </div>
        );
    } else
        return <p className="ml-6 m-1 p-0.5  w-56 h-6 ">🗄 {explorer.name}</p>;
}

export default Folder;
