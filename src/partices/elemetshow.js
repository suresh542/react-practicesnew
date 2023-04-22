import React from "react";

const studentData = [
    {
        Id: 0, sName: "suresh", lName: "kumar", degree : "B.E."
    },
    {
        Id: 1, sName: "murali", lName: "owner", degree : "B.E."
    },
    {
        Id: 2, sName: "Gowtham", lName: "prakesh", degree : "B.E."
    }
]
const newData = studentData.map((currentValue)=>{
    return `my name is ${currentValue.sName}, my degree is ${currentValue.degree}`;
});
// console.log(newData) 
document.getElementById('namePara').innerHTML=newData;

function ElementSelected(){

    return(
        <>
            <div className="nameHere">
                <p id="namePara">

                </p>
            </div>
        </>
    )
   
}
export default ElementSelected;