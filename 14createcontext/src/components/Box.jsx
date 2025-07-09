import React from "react";
import { themeContext } from "../App";
import { useContext } from "react";

function Box() {
    
    const darkTheme=useContext(themeContext);

    const styleCss={
        width:'300px',
        height:'200px',
        backgroundColor:`${darkTheme?'black':'gray'}`,
        color:`${darkTheme?'white':'black'}`,
        textAlign:'center'
    }   

    return (
        <div style={styleCss}>
            <h1>Theme</h1>
        </div>
    );
}

export default Box;
