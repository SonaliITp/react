import React from 'react'
import { useParams } from 'react-router-dom'

function StudentDetail() {

    const {sid} = useParams()

    const students =[
        { sid: 1, name: "Alice Johnson", city: "New York", marks: 85 },
        { sid: 2, name: "Bob Smith", city: "Los Angeles", marks: 78 },
        { sid: 3, name: "Charlie Brown", city: "Chicago", marks: 92 },
        { sid: 4, name: "David Lee", city: "Houston", marks: 88 },
        { sid: 5, name: "Emma Wilson", city: "Phoenix", marks: 75 },
        { sid: 6, name: "Frank Thomas", city: "Philadelphia", marks: 90 },
        { sid: 7, name: "Grace Miller", city: "San Antonio", marks: 81 },
        { sid: 8, name: "Henry White", city: "San Diego", marks: 95 },
        { sid: 9, name: "Isabella Davis", city: "Dallas", marks: 87 },
        { sid: 10, name: "Jack Wilson", city: "San Jose", marks: 80 }
    ];      
       let student = students.find((s)=>s.sid==sid)
       if(!student)
      {
        return <h4 className='text-danger'>Student Not Found....</h4>
      }
 return (
    <div className='container m-auto rounded border border-primary p-4 w-50'>

     <p><strong>Id :-</strong>{student.sid}</p>
     <p><strong>Name :-</strong>{student.name}</p>
     <p><strong>City :-</strong>{student.city}</p>
     <p><strong>Marks :-</strong>{student.marks}</p>

    </div>
    
  )
}

export default StudentDetail