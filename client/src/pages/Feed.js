import { useEffect, useState } from 'react'
import { GetVinyls } from '../services/VinylServices'
import { useNavigate } from 'react-router-dom'

const Feed = ({ user, authenticated, vinylList }) => {
  const navigate = useNavigate()

  const [vinyls, setVinyls] = useState([])

  useEffect(() => {
    const handleVinyls = async () => {
      const data = await GetVinyls()
      setVinyls(data)
    }
    handleVinyls()
  }, [])

  return user && authenticated ? (
    <div className="grid col-4">
      {vinylList.map((vinyl) => (
        <div className="card" key={vinyl.id}>
          <h3>{vinyl.title}</h3>
          <div>
            <img src={vinyl.image} alt="vinyl" />
          </div>
          {/* <p>{vinyl.body.substring(0, 80)}...</p> */}
        </div>
      ))}
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/login')}>Sign In</button>
    </div>
  )
}

export default Feed
