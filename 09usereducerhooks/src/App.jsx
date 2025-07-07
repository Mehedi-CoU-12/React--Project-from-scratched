import { useReducer, useState } from "react";
import "./App.css";
import ToDo from "./components/ToDo";

let id = 0;
export const ACTIONS = {
    ADD_TODO: "add_todo",
    TOGGLE_TODO: "toggle_todo",
    DELETE_TODO: "delete_todo",
};

function reducer(state, action) {
    if (action.type === ACTIONS.ADD_TODO) {
        return [...state, newTodo(action.payload)];
    } else if (action.type === ACTIONS.TOGGLE_TODO) {
        return state.map((todo) => {
            if (todo.id === action.payload.id)
                return { ...todo, complete: !todo.complete };
            return todo;
        });
    } else if(action.type===ACTIONS.DELETE_TODO){
        return state.filter((todo)=>todo.id!=action.payload.id);
    }
}

function newTodo(todo) {
    id++;
    return { id: id, todo: todo, complete: false };
}

function App() {
    const [state, dispatch] = useReducer(reducer, []);
    const [todo, setTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({ type: ACTIONS.ADD_TODO, payload: todo });
        setTodo("");
    };

    return (
        <>
            <h1>To Do Apps</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
            </form>
            {state.map((todo) => {
                return <ToDo dispatch={dispatch} key={todo.id} todo={todo} />;
            })}
        </>
    );
}

export default App;
