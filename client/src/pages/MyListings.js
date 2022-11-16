import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../globals'
import { useNavigate } from 'react-router-dom'

const MyListings = ({ user }) => {
  console.log(user)
  let navigate = useNavigate()
  const [userList, setUserList] = useState([])
  const [selectedListing, setSelectedListing] = useState([])

  const getUserListings = async () => {
    const res = await axios.get(`${BASE_URL}/feed/listings/${user.id}`)
    console.log('userlisting', res.data)
    setUserList(res.data)
  }

  const chooseListing = (selected) => {
    setSelectedListing(selected)
    navigate(`/${selected.id}`)
  }

  const deleteListing = async (selected) => {
    await setSelectedListing(selected.id)
    await axios.delete(`${BASE_URL}/feed/${selected.id}`)
    window.location.reload()
  }

  useEffect(() => {
    getUserListings()
  }, [])

  return (
    <div className="grid col-4">
      <Link to={`/listings/create`}>
        <button>Create Listing</button>
      </Link>
      {userList.map((record) => (
        <div className="card" key={record.id}>
          <p>Title: {record.title}</p>
          <p>Artist: {record.artist}</p>
          <p>Genre: {record.genre}</p>
          <p>Price: {record.price}</p>
          <p>Status: {record.status}</p>
          <div>
            <div className="vinyl-card" key={record.id}>
              <div onClick={() => chooseListing(record)}>
                <img src={record.image} alt="vinyl" />
              </div>
              <Link to={`/listings/update/${record.id}`}>
                <button>Update Listing</button>
              </Link>
              <button onClick={() => deleteListing(record)}>
                Delete Listing
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MyListings
