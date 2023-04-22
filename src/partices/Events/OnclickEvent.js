import React, { useState } from "react";

function OnClickEvent(){
    const redColor = "#8e44ad";
    let [bg,bgColor] = useState(redColor);
    const[btnName,setBtnName] = useState("Click Me")
    const changeColor=()=>{
        // var bgColor = document.getElementById("backgroundColor");
        // bgColor.style.color= "gary";
        // console.log("Selected")
        const yellowColor = "#FFFF00";
        bgColor(yellowColor)
        setBtnName("suresh")
    }
    const dbClick = ()=>{
        bgColor(redColor)
        setBtnName("kaviya")
    }
    return(
        <>
            <div  id="backgroundColor" style={{backgroundColor: bg}}>
               <button className="btn btn-success" onClick={changeColor} onDoubleClick={dbClick}>
               {btnName}
               </button>
            </div>
        </>
    )
}
export default OnClickEvent;