import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useNavigate } from 'react-router-dom'
// import CommentForm from '../components/CommentForm'

const VinylDetails = ({ user, authenticated }) => {
  let navigate = useNavigate()

  console.log('user', user)

  const [vinylDetails, setVinylDetails] = useState([])
  let { vinyl_id } = useParams()

  const GetVinylDetails = async () => {
    const res = await axios.get(`${BASE_URL}/feed/${vinyl_id}`)
    console.log('VinylDetails:', res.data)
    setVinylDetails(res.data)
  }

  const AddToCart = async () => {
    const res = await axios.post(`${BASE_URL}/library/${user.id}/${vinyl_id}`)
    console.log('addtocart', res)
    navigate(`/library/${user.id}`)
  }

  useEffect(() => {
    GetVinylDetails()
  }, [])

  return (
    <>
      <div className="container">VinylDetails:</div>
      <div className="vinyl-card vinyls" key={vinylDetails.id}>
        <div className="vinyl-text">
        <h2>Album Title: {vinylDetails.title}</h2>
        <div>Artist: {vinylDetails.artist}</div>
        <div>Genre: {vinylDetails.genre}</div>
        <div>Description: {vinylDetails.description}</div>
        <div>Status: {vinylDetails.status}</div>
        <div>Price: {vinylDetails.price}</div>
        </div>
        <div>
          <div className="vinyl-img" key={vinylDetails.id}>
            <img src={vinylDetails.image} alt="vinyl" />
          </div>
        </div>
        <button onClick={AddToCart}>Add to User Library</button>
      </div>
    </>
  )
}

export default VinylDetails
