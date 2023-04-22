import React, { useState } from 'react'

export default function NameChange() {
    const [cName,setName] = useState("")
    const [lName,setLName] = useState()
    const [fName,setFName] = useState("")
    const uploadTheName = (event)=>{
        setName(event.target.value)
    }
    const onSubmit=()=>{
        setFName(cName)
        setLName(lName)
    }


  return (
    <div>
        <h2> Hello, {fName}</h2>
        <input type="text" placeholder='Enter the First Name' onChange={uploadTheName} value={cName}/> <br /><br />
        <input type="text" placeholder='Enter the Last Name' onChange={uploadTheName} value={lName}/> <br /><br />
        <button onClick={onSubmit} >Click me</button>
    </div>
  )
}
