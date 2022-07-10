import { Navigate } from 'react-router-dom'

const IsLoggedIn = ({ children }) => {
  if (localStorage.getItem('token')) {
    return <Navigate to="/home" replace />
  }

  return children
}

export default IsLoggedIn
