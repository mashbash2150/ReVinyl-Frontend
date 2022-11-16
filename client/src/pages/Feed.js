import { useEffect, useState } from 'react'
// import { GetVinyls } from '../services/VinylServices'
import { useNavigate } from 'react-router-dom'

const Feed = ({ user, authenticated, vinylList }) => {
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

  // return user && authenticated ? (
  //   <div className="grid col-4">
  //     {vinylList.map((record) => (
  //       <div className="card" key={record.id}>
  //         <h2>Title: {record.title}</h2>
  //         <h3>Artist: {record.artist}</h3>
  //         <p>Genre: {record.genre}</p>
  //         <div>
  //           <div className="vinyl-card" key={record.id}>
  //             <div onClick={() => chooseVinyl(record)}>
  //               <img src={record.image} alt="vinyl" />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // ) : (
  //   <>
  //     <div className="protected">
  //       <h3>Oops! You must be signed in to do that!</h3>
  //     </div>
  //     <div>
  //       <button onClick={() => navigate('/login')}>Sign In</button>
  //     </div>
  //   </>
  // )
}

export default Feed
