import { Component, use, useState,createContext, Suspense } from 'react'
// import Quiz from './Quiz'
// import { Link, Route, Routes,useNavigate } from 'react-router-dom'
// import About from './About'
// import Home from './Home'
// import Contact from './Contact'
// import Help from './Help'
// import PageNotFound from './PageNotFound'
// import Student from './Student'
// import StudentEnquiry from './StudentEnquiry'
// import StudentRegi from './StudentRegi'
// import Product from './Product'
// import ProductDetails from './ProductDetails'
// import StudentInfo from './StudentInfo'
// import StudentDetail from './StudentDetail'

const lazyloading = React.Lazy(()=>import('./Lazyloading'))

function App()
{
  
   return(
    <>
    <div className='App'>
      
      <h2>Lerning Lazy Loading ....</h2>
      <Suspense fallback={<h2>Please Wait...Data loading...</h2>}>
      <lazyloading></lazyloading>
      <p>new commit</p>
      </Suspense>
     
      </div>    
    </>
   )

}

export default App

   




