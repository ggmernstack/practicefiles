import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
      <div className='h-full bg-blue-200'>
         
        

        <div className='flex gap-25 items-center justify-center underline font-bold '>
           <Link className='mt-4 text-decoration-underline' to='/product/men' >Mens items</Link>
            <Link className=' mt-4 text-decoration-underline' to='/product/women' >Womens items</Link>
        
        </div>
          
         <Outlet className='bg-green-300' />
        
      </div>
      
      
  )
}

export default Product