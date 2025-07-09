import { useMemo, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    const memoizedProps = useMemo(
        () => (
            <>
                <p>
                    city : <span>Cumilla</span>
                </p>
                <p>
                    age: <span>24</span>
                </p>
                <p>
                    varsity:<span>CoU</span>
                </p>
            </>
        ),
        []
    );

    return (
        <div>
            <h1>Props and childrens</h1>

            <Card name="Mehedi ">{memoizedProps}</Card>

            <p>{count}</p>

            <Button myFun={handleClick} text="click me btn" count={count} />
        </div>
    );
}

export default App;
