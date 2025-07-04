import { useState } from "react";
import com from "./assets/complete.png";
import del from "./assets/delete.png";
import "./App.css";

function App() {
    const [task, setTask] = useState("");
    const [allTask, setAllTask] = useState([]);

    const addTask = () => {
        if (task) setAllTask([...allTask, { task, complete: false }]);
        setTask("");
    };

    const handleClick = (action, index) => {
        let arr = [...allTask];
        if (action === "complete") {
            arr[index].complete = !arr[index].complete;
        } else {
            arr = arr.filter((value, i) => i != index);
        }
        setAllTask(arr);
    };

    return (
        <div className="bg-gray-900 w-full h-screen text-white flex flex-col justify-center items-center">
            <div className="m-20">
                <input
                    onChange={(e) => setTask(e.target.value)}
                    className="text-black p-1 rounded m-2"
                    value={task}
                    type="text"
                />
                <button className="rounded bg-green-600 p-1" onClick={addTask}>
                    Add Task
                </button>
            </div>
            {allTask.length >= 1 ? (
                <div className="m-30 bg-cyan-900 rounded min-w-96 h-auto">
                    <ul className="m-1">
                        {allTask.map((item, key) => (
                            <li
                                className="bg-amber-950 m-1.5 p-1 rounded flex flex-row justify-between"
                                key={key}
                            >
                                <p
                                    className={
                                        item.complete ? "line-through" : ""
                                    }
                                >
                                    {key + 1 + ". " + item.task}
                                </p>
                                <div className="flex flex-row gap-3">
                                    <img
                                        onClick={() =>
                                            handleClick("complete", key)
                                        }
                                        className="bg-green-600 rounded h-5 w-5 cursor-pointer"
                                        src={com}
                                    />
                                    <img
                                        onClick={() =>
                                            handleClick("delete", key)
                                        }
                                        className="bg-red-700 rounded-md h-5 w-5 cursor-pointer"
                                        src={del}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

export default App;
