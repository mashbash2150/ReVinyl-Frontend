import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { BASE_URL } from '../globals'


export const Library =  () => {
  const[libraryDetails,setLibraryDetails]=useState([])
  let {user_id} = useParams()

const GetLibraryDetails=async()=>{
  const res=await axios.get(`${BASE_URL}/library/${user_id}`)
  console.log("LibraryDetails:",res.data.cart)
  setLibraryDetails(res.data.cart)
}


useEffect(()=>{
GetLibraryDetails()
},[])

 return(
  <div className="Library-Details">
{libraryDetails.map((record) => (
      
      <div className="card" key={record.id}>
        <h2>Title: {record.title}</h2>
        <h3>Artist: {record.artist}</h3>
        <p>Genre: {record.genre}</p>
        <div>
          <div className='vinyl-card' key={record.id}>
       
          <img src={record.image} alt="vinyl" />
          </div>
        </div>
   
      </div>
    ))}


  </div>
  
   )
}
export default Library
