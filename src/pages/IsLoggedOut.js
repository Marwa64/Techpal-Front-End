import { Navigate } from 'react-router-dom'

const IsLoggedOut = ({ children }) => {
  if (localStorage.getItem('token')) {
    return <Navigate to="/home" replace />
  }

  return children
}

export default IsLoggedOut
