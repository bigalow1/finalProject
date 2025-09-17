// import React from 'react'

//    function MenusPage() {
//        let [PostData, setPostData] = React.useState({
//            menupicture: "", 
//            menuname: "",
//            menudescription: "",
//            menuprice:""
           
//        });
   
//        let pandlchange = (joo) => {
//            setPostData({ ...PostData, [joo.target.name]:  joo.target.value });
//        }
   
//        let kandleSubmit =  (e) => {
//            e.preventDefault();
//            const response = async () => {
//                try {
//                 //    const res = await fetch("https://blogbackend-cgj8.onrender.com/post", {
//                      const res = await fetch("http://localhost:3002/menus", {
//                        method: "POST",
//                        headers: {
//                            "Content-Type": "application/json"
//                        },
//                        credentials:'include',
//                        body: JSON.stringify(PostData)
//                    });
                   
//                    const data = await res.json();
   
//                    console.log('Sucess:', data);
//                } catch (error) {
//                    console.error('Error:', error);
//                }
//            }    
//            response();                                              
           
//        }
   
//      return (
//        <>
//    <div className='h-screen flex items-center justify-center bg-black flex-col text-white'> 
//        <h1 className='text-4xl font-bold'> Menus </h1>
//        <form onSubmit={kandleSubmit} className='flex flex-col space-y-4 w-80'>
           
//            <label className='flex flex-col'>
//                menu picture :
//                <input onChange={pandlchange} type="file" name='menupicture' className='mt-1 p-2 bg-gray-800 border border-gray-700 rounded' />
//            </label>
//            <label className='flex flex-col'>
//                menu name :
//                <input onChange={pandlchange} type="text" name='menuname' className='mt-1 p-2 bg-gray-800 border border-gray-700 rounded' />
//            </label>
//            <label className='flex flex-col'>
//                menu description :
//                <input  onChange={pandlchange} type="text" name='menudescription' className=' mt-1 p-2 bg-gray-800 border border-gray-700 rounded' />
//            </label>
//             <label className='flex flex-col'>
//                menu price :
//                <input  onChange={pandlchange} type="number" name='menuprice' className=' mt-1 p-2 bg-gray-800 border border-gray-700 rounded' />
//            </label>
//            <button type='submit' className=' w-[100px] mt-4 p-2 bg-blue-600 rounded'>post</button>
           
   
   
//        </form>
   
//     </div>
           
//        </>
//      )
//    }
   

// export default MenusPage    