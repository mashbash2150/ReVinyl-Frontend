import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Feed = ({ user, authenticated, vinylList }) => {
  const [selectedListing, setSelectedListing] = useState([])
  const navigate = useNavigate()
  const [selectedVinyl, setSelectedVinyl] = useState([])
  const [loggedInUser, setLoggedInUser] = useState(null)

  const chooseVinyl = (selected) => {
    setSelectedVinyl(selected)
    navigate(`/${selected.id}`)
  }

  return (
    <div className="container">
      {vinylList.map((record) => (
        <div className="vinyl-card">
        <div className="vinyl-text card" key={record.id}>
          <h2>Title: {record.title}</h2>
          <div>Artist: {record.artist}</div>
          <div>Genre: {record.genre}</div>
          <div>
            <div className="vinyl-img" key={record.id}>
              <div onClick={() => chooseVinyl(record)}>
                <img src={record.image} alt="vinyl" />
                
              </div>
            </div>
          </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Feed
