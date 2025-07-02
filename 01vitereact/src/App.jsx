import { useState } from "react";
import "./App.css";

function App() {
    let obj = {
        name: "mehedi",
        age: 24,
    };
    const [user, setUser] = useState(obj);

    function changeName() {
      setUser({...user,name:'sumon'})
    }

    function changeAge() {
      setUser({...user,age:24});
    }

    return (
        <>
            <h1>name: {user.name}</h1>
            <h2>age:{user.age}</h2>
            <button onClick={changeName}>change name</button>
            <button onClick={changeAge}>change age</button>
        </>
    );
}

export default App;
