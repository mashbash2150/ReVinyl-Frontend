import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Feed = ({ user, authenticated, vinylList }) => {
  const navigate = useNavigate()
  const [selectedVinyl, setSelectedVinyl] = useState([])

  const chooseVinyl = (selected) => {
    setSelectedVinyl(selected)
    navigate(`/${selected.id}`)
  }

  return (
    <div className="container">
      {vinylList.map((record) => (
        <div className="vinyl-card">
        <div className="vinyl-text card" key={record.id}>
    
    
          </div>
          <div className="large-circle">
          <div className="album-title">Title: <strong> {record.title}</strong></div>
          <div >Artist: {record.artist}</div>
            <div className="vinyl-img" key={record.id}>
              <div onClick={() => chooseVinyl(record)}>
                <img src={record.image} alt="vinyl" />
              </div>
  
            <div>Genre: {record.genre}</div>
          <div>Price: ${record.price}</div>
          </div>
         
          </div>
          <div className='status-banner'>  Looking To {record.status} </div>
        </div>
        
      ))}
    </div>
  )
}

export default Feed
