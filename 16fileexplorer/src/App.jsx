import React, { useEffect } from "react";
import { useState } from "react";
import explorer from "./Data/Data";
import Folder from "./Components/Folder";
import useTraverseTree from "./Hooks/useTraverseTree";

function App() {
    const [explorerData, setExplorerData] = useState(() => {
        const savedData = localStorage.getItem("explorerData");
        return savedData ? JSON.parse(savedData) : explorer;
    });
    const { insertNode } = useTraverseTree();

    const handleInsertNode = (folderId, item, isFolder) => {
        const finalTree = insertNode(explorerData, folderId, item, isFolder);
        setExplorerData(finalTree);
    };

    useEffect(() => {
        localStorage.setItem("explorerData", JSON.stringify(explorerData));
    }, [explorerData]);

    return (
        <div>
            <Folder
                handleInsertNode={handleInsertNode}
                explorer={explorerData}
            />
            <button
                className="bg-red-900 text-white rounded-md m-10 p-2 font-bold"
                onClick={() => {
                    localStorage.removeItem("explorerData");
                    window.location.reload();
                }}
            >
                Clear Tree
            </button>
        </div>
    );
}

export default App;
