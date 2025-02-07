import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Comments() {

    let apiUrl = "https://jsonplaceholder.typicode.com/comments"

    const [comment, setComment] = useState([])

    useEffect(() => {

        axios.get(`${apiUrl}`).then((res) => {
            console.log(res)
            setComment(res.data)
        })

    }, [])
    return (
        <>
            <div className='container '>
                <h2>Api Calling Tutorial</h2>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Body </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            comment.map((e) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{e.id}</td>
                                            <td>{e.name}</td>
                                            <td>{e.email}</td>
                                            <td>{e.body}</td>
                                        </tr>
                                    </>
                               )

                            })

                        }
                    </tbody>
                </table>

            </div>

        </>

    )
}

export default Comments