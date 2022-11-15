import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { BASE_URL } from '../globals'



export const VinylDetails =  () => {
  const[vinylDetails,setVinylDetails]=useState([])
  let {vinyl_id} = useParams()

const GetVinylDetails=async()=>{
  const res=await axios.get(`${BASE_URL}/feed/${vinyl_id}`)
  console.log("VinylDetails:",res.data)
  setVinylDetails(res.data)
}


useEffect(()=>{
GetVinylDetails()
},[])

  return (

    <><div>VinylDetails</div><div className="vinyls" key={vinylDetails.id}>
          <h2>Title: {vinylDetails.title}</h2>
          <h3>Artist: {vinylDetails.artist}</h3>
          <p>Genre: {vinylDetails.genre}</p>
          <div>
              <div className='vinyl-card' key={vinylDetails.id}>
                      <img src={vinylDetails.image} alt="vinyl" />
                  </div>
              </div>
            <button>Add to Cart placeholder button</button>
          </div>
      </>
  )
}

export default VinylDetails