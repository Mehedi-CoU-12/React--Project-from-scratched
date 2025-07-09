import { useState, createContext } from "react";
import "./App.css";
import Box from "./components/Box";

export const themeContext = createContext();
const { Provider } = themeContext;

function App() {
    const [dark, setDark] = useState(false);

    const toggleTheme = () => {
        setDark(!dark);
    };

    return (
        <Provider value={dark}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Box />
        </Provider>
    );
}

export default App;
