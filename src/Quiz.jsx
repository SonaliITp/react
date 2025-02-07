import React, { useState } from 'react'
import QuestionList from './QuestionList'

function Quiz() {

    let questions =[
           {
              question:"What is React Js",
              options :["Testing Tool","Programming Laguage","Backend Language","Javascript Liabrary"],
              answer:"Javascript Liabrary"
           },
           {
              question :"What is angular",
              options:["Javscript Liabrary","Manual Testing Tool","Scripting Language","Typescript Framework"],
              answer:"Typescript Framework"
           },
           {
               question:"What is 2+2",
               options:["6","22","4","45"],
               answer:"4"
           },
           {
            question:"What is H2O",
            options:["Water Formula","Hydrogen Formula","Sulphiric acid","MAth Formula"],
            answer:"Water Formula"
           }
   ]

   const [score,setScore] = useState(0)
    const [currentans,setCurrentans] = useState(null)
    const [currentIndex,setCurrentIndex] = useState(0)
    function HandleClick(option)
    {
       setCurrentans(option)
              

    }
    function clickHandler()
    {
        setCurrentans(null)
        if(questions[currentIndex].answer==currentans)
        {
            setScore(score+1)
        }
        setCurrentIndex(currentIndex+1)
    
       
    }
  return (
    <>
    <div className='container card'>
        
        {currentIndex < questions.length ?(
        <>
         <div>
         <QuestionList question={questions[currentIndex].question} options={questions[currentIndex].options} HandleClick={HandleClick}></QuestionList>
     </div>
     <button className={currentans===null?'button_disable ':'button_enable'} disabled={currentans===null} onClick={clickHandler} >Next Question</button>  
    </>):
    (
       <h1 style={{textAlign:'center'}}>Your Score :- {score}</h1>
    )}     

    </div>
    </>
  )}

export default Quiz