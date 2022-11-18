import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../globals'
import { useNavigate } from 'react-router-dom'

const MyListings = ({ user }) => {
  let navigate = useNavigate()
  const [userList, setUserList] = useState(null)
  const [selectedListing, setSelectedListing] = useState([])

  const getUserListings = async () => {
    const res = await axios.get(`${BASE_URL}/feed/listings/${user.id}`)
    setUserList(res.data)
  }

  const chooseListing = (selected) => {
    setSelectedListing(selected)
    navigate(`/${selected.id}`)
  }

  const deleteListing = async (selected) => {
    await setSelectedListing(selected.id)
    await axios.delete(`${BASE_URL}/feed/${selected.id}`)
    getUserListings()
  }

  useEffect(() => {
    getUserListings()
  }, [user])

  return (
    <div>
      <Link to={`/listings/create`}>
        <button>Create Listing</button>
      </Link>
      <div className="list-container">
      {userList?.map((record) => (
        <div className="list-card" key={record.id}>
        <div className="vinyl-text">
          <div><span className="album-title-list">{record.title}</span></div>
          <div className="list-text">
          <div>Artist: {record.artist}</div>
          <div>Genre: {record.genre}</div>
          <div>Price: ${record.price}</div>
          <div>Looking to: {record.status}</div>
          </div>
          <div>
            <div className="vinyl-img" key={record.id}>
              <div onClick={() => chooseListing(record)}>
                <img src={record.image} alt="vinyl" />
              </div>
              <Link to={`/listings/update/${record.id}`}>
                <button className="zoom card-button">Update Listing</button>
              </Link>
              <button className="zoom card-button" onClick={() => deleteListing(record)}>
                Delete Listing
              </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default MyListings
