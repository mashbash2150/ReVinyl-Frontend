import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useNavigate } from 'react-router-dom'

const VinylDetails = ({ user }) => {
  let navigate = useNavigate()

  console.log('user', user)

  const [vinylDetails, setVinylDetails] = useState([])
  let { vinyl_id } = useParams()

  const GetVinylDetails = async () => {
    const res = await axios.get(`${BASE_URL}/feed/${vinyl_id}`)
    console.log('VinylDetails:', res.data)
    setVinylDetails(res.data)
  }

  const AddToCart = async () => {
    const res = await axios.post(`${BASE_URL}/library/${user.id}/${vinyl_id}`)
    console.log('addtocart', res)
    navigate(`/library/${user.id}`)
  }

  useEffect(() => {
    GetVinylDetails()
  }, [])

  return (
    <>
      <div>VinylDetails</div>
      <div className="vinyls" key={vinylDetails.id}>
        <h2>Title: {vinylDetails.title}</h2>
        <h3>Artist: {vinylDetails.artist}</h3>
        <p>Genre: {vinylDetails.genre}</p>
        <div>
          <div className="vinyl-card" key={vinylDetails.id}>
            <img src={vinylDetails.image} alt="vinyl" />
          </div>
        </div>
        <button onClick={AddToCart}>Add to Cart placeholder button</button>
      </div>
      {/* <ReviewForm
          user={user}
          authenticated={authenticated}
          handleSubmit={handleSubmit}
          handleCommentChange={handleCommentChange} 
          reviewFromState={reviewFromState}
          />
          <div className="vinyl-comment-grid">
          {selectedVinyl.}
          />
          <div className="vinyl-comment-grid">
          {selectedVinyl.vinyl_comment.map((comment, index) =>(
            <div className="comment" key={comment.id}>
            <h2>{comment.body}</h2>
            <h2>{comment.user_comment.username}</h2>
          ))*/}
    </>
  )
}

export default VinylDetails
