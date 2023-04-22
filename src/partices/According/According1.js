import React, { useState } from 'react'


 const According1=({questions,answer})=> {
  const [show,setshow] = useState(false)
  const showUpHere = ()=>{
    setshow(!show)
  }
  return (
    <div>
        <div className="main-heading d-flex ms-5 ps-3">
        <div><button style={{border :"none",background:"none"}} onClick={showUpHere}>{show?<i class="fa-solid fa-circle-minus"></i>:<i class="fa-solid fa-circle-plus"/>}</button></div>
        <h1 className='ps-3'>{questions}</h1>
        </div>
        {show && <h3 className='answers' style={{background:"#F5DEB3"}}>{answer}</h3>}

    </div>
  )
}
export default According1;