import React from 'react'
import './App.jsx'

function App() {


  return (
    <>
      <div className="flex flex-col items-center justify-center h-[100px] bg-black">
        <h1 className="text-4xl font-bold text-blue-600 mb-4 tr">Welcome to My App</h1>
       
      </div>
       <div className='h-[300px] bg-amber-500'>
          <div className='h-[100px] w-[200px] bg-amber-800  animate-bounce translate-x-50 bg-[url(boy1.jpg)] ok bg-contain '></div>
       </div>
       
     
    </>
  )
}

export default App
