import React, { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {

    const data=useCurrencyInfo('usd');
    console.log(data);


    return (
        <>
            <div className="bg-slate-500 rounded-md flex flex-col items-center justify-center h-52 w-66 m-28 " >
                {/* <InputBox name='From' />
                <button className="text-white text-xl bg-black w-full m-3 rounded-2xl " > swap</button>
                <InputBox name='To' /> */}
            </div>
        </>
    );
}

export default App;
