import React, { useState } from "react";



// let count = 1
// function AddCount(){
//     return(
//         count ++,
//         console.log("Clicked")
//     )
// }

function CountBtn(){
const [state,SetSta1] = useState(0)
const increament1 = ()=>{
    SetSta1(state + 1)
}
const decrement1=()=>{
    SetSta1(state-1)
}
    return(
        <>
        <div className="count">
            <h1 > {state} </h1>
        </div>
            <div className="btn btn-warning" onClick={increament1}>
                up
            </div>
            <div className="btn btn-warning" onClick={decrement1}>
                down
            </div>
        </>
    )
}
export default CountBtn;