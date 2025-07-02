import "./App.css";
import Card from "./components/Card";

function App() {
    return (
        <>
            <h1 className="bg-green-400 text-black p-4 rounded-3xl  ">
                Tailwind CSS test
            </h1>
            <Card channelName="mehedi hasan" btnText="click Me!" />
            <Card channelName="sumon bro" btnText="visit me!" />
        </>
    );
}

export default App;
