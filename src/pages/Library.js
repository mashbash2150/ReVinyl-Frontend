import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

export const Library = () => {
  const [libraryDetails, setLibraryDetails] = useState([])
  const [selectedVinyl, setSelectedVinyl] = useState([])
  let { user_id } = useParams()
  let navigate = useNavigate()

  const GetLibraryDetails = async () => {
    const res = await axios.get(`${BASE_URL}/library/${user_id}`)
    console.log('LibraryDetails:', res.data.cart)
    setLibraryDetails(res.data.cart)
  }

  useEffect(() => {
    GetLibraryDetails()
  }, [])

  const chooseVinlyToDelete = async (selected) => {
    await setSelectedVinyl(selected.id)
    await axios.delete(`${BASE_URL}/library/${user_id}/${selected.id}`)
    window.location.reload()
  }

  return (
    <div>
    <h1 className="wish-list">Wish List</h1>
    <div className="list-container">
     
      {libraryDetails.map((record) => (
        <div className="list-card" key={record.id}>
          <div className="vinyl-text">
          <h2>{record.title}</h2>
          <h3>Artist: {record.artist}</h3>
          <h3>Genre: {record.genre}</h3>
          <h3>Price: ${record.price}</h3>
          </div>
          <div>
            <div className="vinyl-img" key={record.id}>
              <img src={record.image} alt="vinyl" />
            </div>
          </div>
          <button className="zoom" onClick={() => chooseVinlyToDelete(record)}>
            Remove From Wish List
          </button>
        </div>
         
      ))}
    </div>
    </div>
   
  )
}
export default Library
