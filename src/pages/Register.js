import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'
import {Link} from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const initialFormValues = {
    name: '',
    email: '',
    userName: '',
    password: '',
    confirmPassword: ''
  }

  const [formValues, setFormValues] = useState({ initialFormValues })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      name: formValues.name,
      email: formValues.email,
      username: formValues.username,
      password: formValues.password
    })
    setFormValues(initialFormValues)
    navigate('/login')
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
            <label className="label" htmlFor="name">Name</label>
            <input
            className="input"
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="John Smith"
              value={formValues.name}
              required
            />
            <label  className="label" htmlFor="email">Email</label>
            <input
            className="input"
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
            <label  className="label" htmlFor="username">Username</label>
            <input
            className="input"
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="johndoe1234"
              value={formValues.username}
              required
            />
            <label  className="label" htmlFor="password">Password</label>
            <input
            className="input"
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
            <label  className="label" htmlFor="confirmPassword">Confirm Password</label>
            <input
            className="input"
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          <button
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Register
          </button>
        </form>
        <Link to={'/login'}>
        <button>Already A User?</button>
      </Link>
      </div>
    </div>
  )
}

export default Register
