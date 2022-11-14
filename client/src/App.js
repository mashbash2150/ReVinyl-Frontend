import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import NavBar from './components/Nav'
import Feed from './pages/Feed'

function App() {
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
        </Routes>
      </main>
      <header className="App-header">
        <p></p>
      </header>
    </div>
  )
}

export default App
