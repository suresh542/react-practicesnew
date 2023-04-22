import React, { useState } from 'react'


export default function DateAndTime() {
    const newData = new Date().toLocaleTimeString()
    const [inc, setInc] = useState(newData)
    const timeChange = () => {
        const newData1 = new Date().toLocaleTimeString()
        setInc(newData1);
    }
    setInterval(timeChange,1000)
    return (
        <div>
            <h1>{inc}</h1>
            {/* <div className="btn btn-success" onClick={timeChange}>Get Time</div> */}
        </div>
    )
}
