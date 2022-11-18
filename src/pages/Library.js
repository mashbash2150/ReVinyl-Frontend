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
    <div className="status-banner">Wish List</div>
    <div className="list-container">
      {libraryDetails.map((record) => (
        <div className="list-card" key={record.id}>
          <div className="vinyl-text">
          <div className="album-title-list">{record.title}</div>
          <div className="list-text">
          <div>Artist: {record.artist}</div>
          <div>Genre: {record.genre}</div>
          <div>Price: ${record.price}</div>
          </div>
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
