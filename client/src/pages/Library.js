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

  // const chooseVinyl = (selected) => {
  //   setSelectedVinyl(selected)
  // }

  const chooseVinlyToDelete = async (selected) => {
    await setSelectedVinyl(selected.id)
    await axios.delete(`${BASE_URL}/library/${user_id}/${selected.id}`)
    window.location.reload()
  }

  return (
    <div className="container">
      {libraryDetails.map((record) => (
        <div className="vinyl-card" key={record.id}>
          <div className="vinyl-text">
          <h2>Title: {record.title}</h2>
          <h3>Artist: {record.artist}</h3>
          <h3>Genre: {record.genre}</h3>
          </div>
          <div>
            <div className="vinyl-img" key={record.id}>
              <img src={record.image} alt="vinyl" />
            </div>
          </div>
          <button onClick={() => chooseVinlyToDelete(record)}>
            Remove From Library
          </button>
        </div>
      ))}
    </div>
  )
}
export default Library
