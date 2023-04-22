import React from "react";

const Emojis = ()=>{
    let x = "😄";
    let y = "😄";
    let z = "👎";

    if((x===y)&&(y===z)){
        return (
            <>
                <h1>
                    {" "}
                    {x},{y},{z}
                    {" "}
                </h1>
                <h1>
                    This is Matched
                </h1>
            </>
        );
    }
    else{
        return (
            <>
                <h1>
                    {""}{x}{y}{z} {""}
                </h1>
                <h1>
                    This is not Matched
                </h1>
            </>
        )
    }
}

function MatchGame(){
return(
    <>
       <Emojis/>
    </>
)
    

}
export default MatchGame;