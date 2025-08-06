import React, { useState } from 'react'

function Tooltip({text,children}) {
 
    const[isVisible,setIsVisible]=useState(false)

    const handleMouseEnter=()=>{
        setIsVisible(true);
    }

    const handleMouseLeave=()=>{
        setIsVisible(false);
    }

  return (
    <div>
        
    <div className='tooltip' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{margin:"200px 600px"}}>
        {isVisible && <div className="tooltiptext" style={{color: "white", border: "1px solid black", backgroundColor:"red", width:"100px", height:"50px", borderRadius:"5px"}}>{text}</div>}
        {children}        
    </div>
</div>
  )
}

export default Tooltip
