import React from 'react'
import { Link } from 'react-router-dom'

function Product() {

    const products=
    [
        { pid: 1, pname: "Apple" },
        { pid: 2, pname: "Milk" },
        { pid: 3, pname: "Bread" },
        { pid: 4, pname: "Eggs" },
        { pid: 5, pname: "Rice" },
        { pid: 6, pname: "Olive Oil" },
        { pid: 7, pname: "Coffee" },
        { pid: 8, pname: "Sugar" },
        { pid: 9, pname: "Soap" },
        { pid: 10, pname: "Toothpaste" },
        { pid: 11, pname: "Maggie" }
      ]
 return (
    <div className='container mt-4 p-4'>
        <h3 className='text-danger'>All Products </h3><br></br>
        <ol style={{fontWeight:'bold'}}>
         {
            products.map((ele)=>{
                return(
                    <>
                    <li className='text-primary'><Link to={`/product/${ele.pid}`}>{ele.pname}</Link></li><br></br>
                    </>
                )
            })
         }
        </ol>
    </div>
  )
}

export default Product