import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Student() {

    let navigate = useNavigate()

    function clickHandler()
    {
        navigate("/help")
    }
  return (
    <div className='container m-3 m-auto'>
    <h3 className='text-secondary'>Welcome to Student Component</h3>

    <button className='btn btn-primary' onClick={clickHandler}>Open Help</button>

    <nav>
        <Link to ="sr">Student Registration</Link>&nbsp;&nbsp;
        <Link to ="se">Student Enquiry</Link>
    </nav>

    <Outlet></Outlet>

</div>
  )
}
export default Student





