import React, { useState } from 'react'
import './Quiz.css'

function QuestionList({question,options,HandleClick}) {
    const [isHover,setIshover] = useState()
  return (
    <div className='App'>
        <h2>{question}</h2>
        
        <ul>
            {
                
                options.map((option,index)=>{
                    return(
                        <>
                        <li key={index} onClick={()=>HandleClick(option)}>{option}</li>
                        </>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default QuestionList