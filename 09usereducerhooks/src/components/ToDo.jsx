import React from "react";
import { ACTIONS } from "../App";

function ToDo({ todo, dispatch }) {
    return (
        <div>
            <button style={{ color: todo.complete ? "green" : "red" }} disabled>
                {todo.todo}
            </button>
            <button
                onClick={() =>
                    dispatch({
                        type: ACTIONS.TOGGLE_TODO,
                        payload: { id: todo.id },
                    })
                }
            >
                Toggle
            </button>
            <button
                onClick={() =>
                    dispatch({
                        type: ACTIONS.DELETE_TODO,
                        payload: { id: todo.id },
                    })
                }
            >
                Delete
            </button>
        </div>
    );
}

export default ToDo;
