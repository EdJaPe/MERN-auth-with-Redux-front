import axios from 'axios'

const API_URL_REGISTER = `${process.env.REACT_APP_SERVER_URL}/auth/register`
const API_URL_LOGIN = `${process.env.REACT_APP_SERVER_URL}/auth/login`

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL_REGISTER, userData)

  if(response.data) {
    sessionStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL_LOGIN, userData)

  if(response.data) {
    sessionStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  sessionStorage.removeItem('user')
}

const authService = {
  register,
  login,
  logout
}

export default authService