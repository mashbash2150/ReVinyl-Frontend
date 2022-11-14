import './App.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import NavBar from './components/Nav'
import Feed from './pages/Feed'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import { CheckSession } from './services/Auth'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

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
          <Route path="/" element={<Feed />} />
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
            path="/library"
            element={<library user={user} authenticated={authenticated} />}
          />
        </Routes>
      </main>
      <header className="App-header">
        <p></p>
      </header>
    </div>
  )
}

export default App
