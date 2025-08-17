import React from 'react'
import { Link } from 'react-router-dom'

function ForLogin() {
  return (
 <>
    <div className="h-[700px] bg-gradient-to-r from-black-200  to-red-500 flex flex-col items-center justify-center cursor-pointer">  
        <div className="bg-gradient-to-r from-black-200 to-red-500 p-8 rounded-lg shadow-lg w-full max-w-md justify-center flex flex-col">
           
             <h2 className="text-2xl font-bold mb-6 text-center text-white">Welcome <br /> <h1 className='text-1xl font-light'>Continue with one of the following options</h1></h2>
            <form className='flex flex-col space-y-4 w-80 text-white'>
        
                <label className='flex flex-col'>
               Email:
               <input  type="text" name='email' className='mt-1 p-2 bg-inherit border border-b-gray-700 rounded' />
               </label>
               <label className='flex flex-col'>
               Password:
               <input  type="password" name='password' className='mt-1 p-2 bg-inherit border border-b-gray-700 rounded' />
              </label>
               <button type='submit' className='mt-4 p-2 bg-blue-600 rounded-2xl h-[50px] w-[300px]'>Login </button> 
        


            </form>

        </div> 
          
    </div>
    

    
    
    
    </>
  )
}

export default ForLogin