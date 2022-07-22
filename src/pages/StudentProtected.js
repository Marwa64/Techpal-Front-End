import { Navigate } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'

import { getProfiles, getCurrentProfile } from '../store/actions'

const StudentProtected = ({ children, user, profiles }) => {
  const dispatch = useDispatch()

  const setProfiles = async () => {
    const userId = localStorage.getItem('userId')
    const res = await dispatch(getProfiles(userId))
    if (res.length) {
      await dispatch(getCurrentProfile(userId))
    }
    return res
  }

  if (!localStorage.getItem('token')) {
    return <Navigate to="/login" replace />
  }

  if (user.user_type === 'student' || user.User_type === 'student') {
    if (!profiles.length && window.location.pathname !== '/createprofile') {
      setProfiles().then((res) => {
        if (!res.length) {
          window.location.href = '/createprofile'
        }
      })
    }

    return children
  } else {
    return <Navigate to="/" replace />
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    profiles: state.profiles
  }
}

export default connect(mapStateToProps)(StudentProtected)
