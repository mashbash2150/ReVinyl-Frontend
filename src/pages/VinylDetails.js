import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useNavigate } from 'react-router-dom'

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
      <div className="details-container"></div>
      <div className="vinyl-details-card" key={vinylDetails.id}>
        <div className="vinyl-text">
        <div className="album-title-list">{vinylDetails.title}</div>
        <div>Artist: {vinylDetails.artist}</div>
        <div>Genre: {vinylDetails.genre}</div>
        <div>Looking to: {vinylDetails.status}</div>
        <div>Price: ${vinylDetails.price}</div>
        <div>Rarity: {vinylDetails.rarity}</div>
        </div>
        <div>
          <div className="vinyl-img" key={vinylDetails.id}>
            <img src={vinylDetails.image} alt="vinyl" />
            <div>Description: {vinylDetails.description}</div>
          </div>
        </div>
        <button className="zoom card-button" onClick={AddToCart}>Add to Wish List</button>
        <button className="zoom card-button">Contact Seller</button>
      </div>
    </>
  )
}

export default VinylDetails
