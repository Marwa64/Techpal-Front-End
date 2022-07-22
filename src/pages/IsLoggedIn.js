import { Navigate } from 'react-router-dom'

const IsLoggedIn = ({ children }) => {
  if (localStorage.getItem('token')) {
    return children
  }

  return <Navigate to="/login" replace />
}

export default IsLoggedIn
