import React from 'react'

function ForSignup() {
  return (
    <>

        <div className="h-screen bg-gradient-to-r from-black-200 to-red-500 flex flex-col items-center justify-center">  
            <div className="bg-gradient-to-r from-black-200 to-red-500 p-8 rounded-lg shadow-lg w-full max-w-md">
           
             <h2 className="text-2xl font-bold mb-6 text-center text-red-500">Sign Up</h2>
            </div> 
           <form className='flex flex-col space-y-4 w-80'>
        
           <label className='flex flex-col'>
            Full Name:
            <input  type="text" name='fullname' className='mt-1 p-2 bg-gray-800 border border-gray-700 rounded' />
            </label>
           <label className='flex flex-col'>
            Email:
            <input  type="text" name='email' className='mt-1 p-2 bg-gray-800 border border-gray-700 rounded' />
           </label>
          <label className='flex flex-col'>
            Password:
            <input  type="password" name='password' className='mt-1 p-2 bg-gray-800 border border-gray-700 rounded' />
           </label>
            <button type='submit' className='mt-4 p-2 bg-blue-600 rounded'>Signup</button>
        


            </form>

        </div>
    
    
    </>
  )
}

export default ForSignup