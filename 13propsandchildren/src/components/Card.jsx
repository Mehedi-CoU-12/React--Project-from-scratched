import React from "react";

const Card = React.memo(function Card(props) {
    console.log("sumon bro");
    return (
        <div>
            <h1>Sumon bro</h1>
            <h3>Name is: {props.name} </h3>
            {props.children}
        </div>
    );
});

// function Card() {
//     console.log("sumon bro");
//     return (
//         <div>
//             {/* <h3>Name is: {props.name} </h3>
//             {props.children} */}
//             <h1>Sumon bro</h1>
//         </div>
//     );
// }

export default Card;
