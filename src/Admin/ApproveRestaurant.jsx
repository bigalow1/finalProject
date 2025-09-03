import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom';
import { RiDeleteBack2Fill } from "react-icons/ri";

function ApproveRestaurant() {

    let [holdDelivery, setHoldDelivery] = useState([]);
      let [loading, setLoading] = useState(false);
    
    
      useEffect(()=>{
        const fetchresturants = async () => {
          setLoading(true);
          try {
            const response = await fetch("http://localhost:3002/restaurant");
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setHoldDelivery(data);
          } catch (error) {
            console.error("Error fetching restaurants:", error);
          } finally { 
            setLoading(false);
          }
        };
    
        fetchresturants();
      },[]);

      const handleDelete = async (restaurantId) => {
        try {
            const response = await fetch(`http://localhost:3002/restaurant/${restaurantId}`, {
                method: 'DELETE',   
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });
            const data = await response.json();
            console.log( data);
        } catch (error) {
            console.error('Error deleting restaurant:', error);
        }
    };                      

  return (
       <div className=''>
      <table className="  border-collapse border border-gray-200 bg-yellow h-[400px] w-full">
        <thead className=" bg-gray-100 ">
          <tr className=" border-b border-gray-200">
            <th className=" p-2 text-left">Restaurantname</th>
            <th className=" p-2 text-left">address</th>
            <th className=" p-2 text-left">opentime</th>
            <th className=" p-2 text-left">closetime</th>
            
             <th className=" p-2 text-left">Delete</th>
             <th className=" p-2 text-left">Accept</th>
          </tr> 
        </thead>
        <tbody className=" divide-y divide-gray-200">
          {loading ? (
            <tr>
              <td colSpan="4" className="p-2 text-center">Loading...</td>
            </tr>
          ) : (
            holdDelivery.map((restaurants) => (
              <tr key={users._id} className="hover:bg-gray-50">
                <td className="p-2">{restaurants.picture}</td>
                <td className="p-2">{restaurants.name}</td>
                <td className="p-2">{restaurants.address}</td>
                <td className="p-2">{restaurants.opentime}</td>
                <td className="p-2">{restaurants.closetime}</td>
                
                <td className="p-2"><button onClick={()=> handleDelete(restaurants._id)} className='bg-amber-300 h-[20px] w-[30px] '><RiDeleteBack2Fill /></button></td>
                <td className="p-2"><button onClick={()=> handleAccept(restaurants._id)} className='bg-amber-300 h-[20px] w-[30px] '><RiDeleteBack2Fill /></button></td>
            
              </tr>
            ))
          )}
        </tbody>
      </table>
       {data.length === 0 && !loading &&(
         <div className='text-center p-4'>No restaurant found.</div>
       )}
    </div>
       
    
    

  )
}

export default ApproveRestaurant;