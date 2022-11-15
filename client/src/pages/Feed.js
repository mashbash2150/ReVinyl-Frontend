import { useEffect, useState } from 'react'
// import { GetVinyls } from '../services/VinylServices'
import { useNavigate } from 'react-router-dom'

const Feed = ({ user, authenticated, vinylList }) => {
  const navigate = useNavigate()
  const [selectedVinyl, setSelectedVinyl] = useState([])
  const [loggedInUser,setLoggedInUser]=useState(null)

  const setActiveUser=()=>{
    console.log("User",user.id)
    setLoggedInUser(user.id)
  }


  const chooseVinyl = (selected) => {
    setSelectedVinyl(selected)
    navigate(`/feed/${selected.id}`)
  }

  useEffect(() => {
   setActiveUser()
  }, [])
  


  return (user && authenticated) ? (
    <div className="grid col-4">
      {vinylList.map((record) => (
      
        <div className="card" key={record.id}>
          <h2>Title: {record.title}</h2>
          <h3>Artist: {record.artist}</h3>
          <p>Genre: {record.genre}</p>
          <div>
            <div className='vinyl-card' key={record.id}>
              <div onClick={() => chooseVinyl(record)}>
            <img src={record.image} alt="vinyl" />
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
  ) : (
    <>
      <div className="protected">
        <h3>Oops! You must be signed in to do that!</h3>
      </div>
      <div>
        <button onClick={() => navigate('/login')}>Sign In</button>
      </div>
    </>
  )
}

export default Feed
