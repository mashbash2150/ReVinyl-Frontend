import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../globals'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const UpdateListing = ({ user }) => {
  let navigate=useNavigate()
  let { vinyl_id } = useParams()
  const [formState, setFormState] = useState()
  const [vinylDetails, setVinylDetails] = useState([])

  const UpdateVinylDetails = async () => {
    const res = await axios.get(`${BASE_URL}/feed/${vinyl_id}`)
    setVinylDetails(res.data)
    setFormState({
      title: res.data.title,
      artist: res.data.artist,
      genre: res.data.genre,
      price: res.data.price,
      description: res.data.description,
      status: res.data.status,
      image: res.data.image,
      rarity: res.data.rarity
    })
  }
  useEffect(() => {
    UpdateVinylDetails()
  }, [])
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`${BASE_URL}/feed/${vinyl_id}`,formState)
    navigate(`/listings`)
  }

  return (
    <div className="ListFormContainer">
      <div>UserListings</div>
      <form onSubmit={handleSubmit}>
        <label className="label" htmlFor="title">
          Album Title:
        </label>
        <input
          className="input"
          type="text"
          id="title"
          value={formState?.title}
          onChange={handleChange}
        />
        <label className="label" htmlFor="artist">
          Artist:
        </label>
        <input
          id="artist"
          className="input"
          type="text"
          value={formState?.artist}
          onChange={handleChange}
        />
        <br></br>
        <label className="label" htmlFor="genre">
          Genre:
        </label>
        <input
          id="genre"
          className="input"
          type="text"
          value={formState?.genre}
          onChange={handleChange}
        />
        <br></br>
        <label className="label" htmlFor="price">
          Price:
        </label>
        <input
          id="price"
          className="input"
          type="number"
          min="1"
          max="1000000"
          value={formState?.price}
          onChange={handleChange}
        />
        <br></br>
        <label className="label" htmlFor="description">
          Description:
        </label>
        <input
          id="description"
          className="input"
          type="text"
          value={formState?.description}
          onChange={handleChange}
        />
        <br></br>
        <label className="label" htmlFor="status">
          Looking to:
        </label>
        <select
          id="status"
          className="input"
          type="text"
          value={formState?.status}
          onChange={handleChange}
        >
          <option className="option" value="Buy">
            Buy
          </option>
          <option className="option" value="Sell">
            Sell
          </option>
          <option className="option" value="Trade">
            Trade
          </option>
        </select>
        <br></br>
        <label className="label" htmlFor="image">
          Image:
        </label>
        <input
          id="image"
          className="input"
          type="link"
          value={formState?.image}
          onChange={handleChange}
        />
        <br></br>
        <label className="label" htmlFor="rarity">
          Rarity:
        </label>
        <input
          id="rarity"
          className="input"
          type="number"
          min="1"
          max="10"
          value={formState?.rarity}
          onChange={handleChange}
        />
        <br></br>
        <button className="card-button addListingButton" type='submit'>
          Update Listing
        </button>
      </form>
    </div>
  )
}

export default UpdateListing
