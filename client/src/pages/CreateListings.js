import axios from 'axios'
import { useState } from 'react'
import { BASE_URL } from '../globals'
import { useNavigate } from 'react-router-dom'

const CreateListings = ({ user }) => {
  let navigate = useNavigate()
  const initialFormState = {
    title: '',
    artist: '',
    genre: '',
    price: '',
    description: '',
    status: '',
    image: '',
    rarity: ''
  }
  const [formState, setFormState] = useState(initialFormState)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${BASE_URL}/feed/create/${user.id}`, formState)
    setFormState(initialFormState)
    navigate(`/listings`)
  }

  return (
    <div className="ListFormContainer">
      <div></div>
      <form onSubmit={handleSubmit}>
        <label className="label" htmlFor="title">
          Album Title:
        </label>
        <input
          className="input"
          type="text"
          id="title"
          value={formState.title}
          onChange={handleChange}
          required
        />
        <label className="label" htmlFor="artist">
          Artist:
        </label>
        <input
          id="artist"
          className="input"
          type="text"
          value={formState.artist}
          onChange={handleChange}
          required
        />
        <br></br>
        <label className="label" htmlFor="genre">
          Genre:
        </label>
        <input
          id="genre"
          className="input"
          type="text"
          value={formState.genre}
          onChange={handleChange}
          required
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
          value={formState.price}
          onChange={handleChange}
          required
        />
        <br></br>
        <label className="label" htmlFor="description">
          Description:
        </label>
        <input
          id="description"
          className="input"
          type="text"
          value={formState.description}
          onChange={handleChange}
          required
        />
        <br></br>
        <label className="label" htmlFor="status">
          Status:
        </label>
        <select
          id="status"
          className="input"
          type="text"
          value={formState.status}
          onChange={handleChange}
          required
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
          value={formState.image}
          onChange={handleChange}
          required
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
          value={formState.rarity}
          onChange={handleChange}
          required
        />
        <br></br>
        <button className="zoom addListingButton" type="submit">
          Add Listing
        </button>
      </form>
    </div>
  )
}

export default CreateListings
