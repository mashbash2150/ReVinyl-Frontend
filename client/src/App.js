import './App.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import NavBar from './components/Nav'
import Feed from './pages/Feed'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Library from './pages/Library'
import { CheckSession } from './services/Auth'
import axios from 'axios'
import { BASE_URL } from './globals'
import VinylDetails from './pages/VinylDetails'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [vinylList, setVinylList] = useState([])
  const navigate = useNavigate()
  const [selectedVinyl, setSelectedVinyl] = useState([])

  const getFeed = async () => {
    const res = await axios.get(`${BASE_URL}/feed`)
    console.log(res.data)
    setVinylList(res.data)
  }

  // const initialCommentState = {
  // body: '',
  // vinylId: '',
  // userId: ''
  // }

  // const [commentFromState, setCommentFormState] = useState(initialReviewState)

  // const handleCommentChange = (e) => {
  // setCommentFormState({
  // ...commentFromState,
  // [evt.target.id]: evt.target.value,
  // vinyl_id: selectedVinyl.id,
  // user_id: user.id
  // })
  // }

  // const handleCommentSubmit = async (e) => {
  //   evt.preventDefault()
  //   if (editing) {
  //     await UpdateComment(commentFromState)
  //     setCommentFormState(initialCommentState)
  //     let modifiedVinyl = selectedVinyl
  //     navigate('/')
  //  } else {
  // await CreateComment({
  //   body: commentFromState.body,
  //   vinylId: selectedVinyl.id,
  //   userId: user.id
  // })
  // let modifiedVinyl = selectedVinyl
  // modifiedVinyl.vinyl_comment.push(commentFromState)
  // navigate('/')
  // }

  // const editComment = (comment, index) => {
  // setEditing(true)
  // setComment(comment)
  // setCommentFormState(comment)
  // navigate('/comments/edit', {st})
  // }

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    getFeed()
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <NavBar
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Feed
                user={user}
                authenticated={authenticated}
                vinylList={vinylList}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/library/:user_id"
            element={<Library user={user} authenticated={authenticated} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/:vinyl_id" element={<VinylDetails user={user} />} />
        </Routes>
      </main>
      <header className="App-header">
        <p></p>
      </header>
    </div>
  )
}

export default App
