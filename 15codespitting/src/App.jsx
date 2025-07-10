import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Store from "./components/Store";
import Loader from "./components/Layout/Loader";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Store = lazy(() => import("./components/Store"));
// const Home = lazy(() => wait(1000).then(() => import("./components/Home")));
// const About = lazy(() => wait(1000).then(() => import("./components/About")));
// const Store = lazy(() => wait(1000).then(() => import("./components/Store")));

function App() {
    return (
        <div>
            <Navbar />
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/store" element={<Store />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;

function wait(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}
