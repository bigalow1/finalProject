import React from 'react'
import { Link } from 'react-router-dom'

function ForSignup() {
    let [formData, setFormData] = React.useState({
        fullname: "", 
        email: "",
        password: ""
    });

    let handlchange = (joe) => {
        setFormData({ ...formData, [joe.target.name]:  joe.target.value });
    }

    let handleSubmit =  (e) => {
        e.preventDefault();
        const response = async () => {
            try {
                const res = await fetch("https://blogbackend-cgj8.onrender.com/user", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                     credentials:'include',
                    body: JSON.stringify(formData)
                });
                
                const data = await res.json();

                console.log('Sucess:', data);
            } catch (error) {
                console.error('Error:', error);
            }
        }    
        response();                                              
      }
  return (
    <>

        <div className="h-[700px] bg-gradient-to-r from-black-200  to-red-500 flex flex-col items-center justify-center cursor-pointer">  
          <div className="bg-gradient-to-r from-black-200 to-red-500 p-8 rounded-lg shadow-lg w-full max-w-md justify-center flex flex-col">
           
             <h1 className="text-2xl font-bold mb-6 text-center text-white">Welcome <br /> <b className='text-1xl font-light'>Continue with one of the following options</b></h1>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-4 w-80 text-white'>
        
           <label className='flex flex-col '>
            Full Name:
            <input onChange={handlchange} type="text" name='fullname' className='mt-1 p-2 bg-inherit border border-b-gray-700 rounded' />
            </label>
           <label className='flex flex-col'>
            Email:
            <input onChange={handlchange}  type="text" name='email' className='mt-1 p-2 bg-inherit border border-b-gray-700 rounded' />
           </label>
           <label className='flex flex-col'>
            Password:
            <input onChange={handlchange} type="password" name='password' className='mt-1 p-2 bg-inherit border border-b-gray-700 rounded' />
           </label>
            <button type='submit' className='mt-4 p-2 bg-blue-600 rounded-2xl h-[50px] w-[300px]'>Signup </button> <h1 className='text-center'>OR</h1>
            <button type='submity' className=' p-2 bg-blue-600 rounded-2xl'>
              <Link to="/ForLogin" className='text-white'>Login</Link>
              
               </button>
            <div className='h-[50px] w-[450px] bg-inherit'>
              <p className=' text-white'>By signing up, you agree to our  <span className='text-blue-600'>Terms of Service</span> and <br /> <span className='text-blue-600'>Privacy Policy</span>.</p>
            </div>
        


            </form>

          </div> 
          
        </div>
    
    
    </>
  )
}

export default ForSignup