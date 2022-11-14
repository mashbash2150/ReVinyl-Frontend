// import { useEffect, useState } from 'react'
// import { GetVinyls } from '../services/VinylServices'
import { useNavigate } from 'react-router-dom'

const Feed = ({ user, authenticated, vinylList }) => {
  const navigate = useNavigate()

  const test=()=>{
    console.log("user" ,user)
    console.log("authenticated" ,authenticated)
  }
  test()

  // const [vinyl, setVinyls] = useState([])

  // useEffect(() => {
  //   const handleVinyls = async () => {
  //     const data = await GetVinyls()
  //     setVinyls(data)
  //   }
  //   handleVinyls()
  // }, [])

  return (user && authenticated) ? (
    <div className="grid col-4">
      {vinylList.map((record) => (
      
        <div className="card" key={record.id}>
          <h3>{record.title}</h3>
          <div>
            <img src={record.image} alt="vinyl" />
          </div>
          {/* <p>{vinyl.body.substring(0, 80)}...</p> */}
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
