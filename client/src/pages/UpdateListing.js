import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../globals'

const UpdateListing = ({ user }) => {
  const UpdateVinylDetails = async () => {
    const res = await axios.update(`${BASE_URL}/feed/${vinyl_id}`)
    console.log('VinylDetails:', res.data)
    setVinylDetails(res.data)
    const initialFormState = {
      title: res.data.title,
      artist: res.data.artist,
      genre: res.data.genre,
      price: res.data.title,
      description: res.data.description,
      status: res.data.status,
      image: res.data.image,
      rarity: res.data.rarity
    }
  }
  useEffect(() => {
    UpdateVinylDetails()
  }, [])
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`${BASE_URL}/feed/${user.id}`, formState)
    setFormState(initialFormState)
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
          value={formState.title}
          onChange={handleChange}
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
        />
        <br></br>
        <button className="addListingButton" type="submit">
          Update Listing
        </button>
      </form>
    </div>
  )
}

export default UpdateListing
