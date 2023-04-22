import React from 'react'

export default function Foem() {
    const InputHere=(event)=>{
        
       return console.log(event.target.value)
    }
  return (
    <div>
        <form action="">
            <input type="text" onChange={InputHere} /> <br />
            <button type='button'>submit</button>
        </form>



        <form action=""></form>


    </div>
  )
}
