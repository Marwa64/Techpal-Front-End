import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

const MentorProtected = ({ children, user }) => {
  if (!localStorage.getItem('token')) {
    return <Navigate to="/login" replace />
  }

  if (user.user_type !== 'mentor' && user.User_type !== 'mentor') {
    return <Navigate to="/" replace />
  }

  return children
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(MentorProtected)
