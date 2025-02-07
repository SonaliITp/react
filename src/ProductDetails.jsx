import React from 'react'
import { useParams } from 'react-router-dom';

function ProductDetails() {

    const {pid} = useParams()
    
    const products = [
        {
          pid: 1,
          pname: "Apple",
          description: "Fresh red apples",
          quantity: 50,
          expiryDate: "2025-06-30",
          price: 3.5
        },
        {
          pid: 2,
          pname: "Milk",
          description: "1L full cream milk",
          quantity: 30,
          expiryDate: "2024-03-10",
          price: 1.2
        },
        {
          pid: 3,
          pname: "Bread",
          description: "Whole wheat bread",
          quantity: 40,
          expiryDate: "2024-02-28",
          price: 2.0
        },
        {
          pid: 4,
          pname: "Eggs",
          description: "Organic eggs, pack of 12",
          quantity: 20,
          expiryDate: "2024-03-05",
          price: 4.5
        },
        {
          pid: 5,
          pname: "Rice",
          description: "5kg premium basmati rice",
          quantity: 25,
          expiryDate: "2026-12-31",
          price: 10.0
        },
        {
          pid: 6,
          pname: "Olive Oil",
          description: "1L extra virgin olive oil",
          quantity: 15,
          expiryDate: "2025-09-15",
          price: 12.5
        },
        {
          pid: 7,
          pname: "Coffee",
          description: "500g roasted coffee beans",
          quantity: 10,
          expiryDate: "2025-08-10",
          price: 8.0
        },
        {
          pid: 8,
          pname: "Sugar",
          description: "2kg refined white sugar",
          quantity: 35,
          expiryDate: "2026-04-20",
          price: 3.0
        },
        {
          pid: 9,
          pname: "Soap",
          description: "Pack of 4 antibacterial soaps",
          quantity: 50,
          expiryDate: "2027-01-01",
          price: 5.5
        },
        {
          pid: 10,
          pname: "Toothpaste",
          description: "100g herbal toothpaste",
          quantity: 40,
          expiryDate: "2026-06-15",
          price: 2.8
        }
      ];
     
     let product = products.find((ele)=>ele.pid==parseInt(pid))
      if(!product)
      {
        return <h4 className='text-danger m-3' >Sorry...Product Not Found</h4>
        
      }
  return (
      <div className='container mt-3 pt-3'>
        <br></br>

         <p><strong>Product Id :-</strong>{product.pid}</p> 
        <p><strong>Product Name :-</strong>{product.pname}</p>
        <p><strong>Description :-</strong>{product.description}</p>
        <p><strong>Quantity :-</strong>{product.quantity}</p>
        <p><strong>Price:-</strong>{product.price}</p>
        <p><strong>Expiry Date:-</strong>{product.expiryDate}</p>
      </div>
  )
}

export default ProductDetails




