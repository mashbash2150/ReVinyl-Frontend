import React from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import {Navigate,useNavigate} from "react-router-dom"
import { BASE_URL } from '../globals'



export const VinylDetails = async ({ record }) => {
  const[vinylDetails,setVinylDetails]=useState([])
  let navigate=useNavigate()
  let {id} = useParams()
const res=await axios.get(`${BASE_URL}/feed/${id}`)

  return (
    <><div>VinylDetails</div><div className="vinyls" key={record.id}>
          <h2>Title: {record.title}</h2>
          <h3>Artist: {record.artist}</h3>
          <p>Genre: {record.genre}</p>
          <div>
              <div className='vinyl-card' key={record.id}>
                      <img src={record.image} alt="vinyl" />
                  </div>
              </div>
          </div>
      </>
  )
}

export default VinylDetails