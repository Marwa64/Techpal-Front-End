import Login from './pages/common/Login'
import Signup from './pages/common/Signup'
import ApplyMentor from './pages/common/ApplyMentor'
import StudentHome from './pages/student/Home'
import MentorHome from './pages/mentor/Home'
import StudentAccount from './pages/student/Account'
import Profiles from './pages/student/Profiles'
import CreateProfile from './pages/student/CreateProfile'
import Courses from './pages/student/Courses'
import CompletedCourses from './pages/student/CompletedCourses'
import Jobs from './pages/student/Jobs'
import Sessions from './pages/student/Sessions'
import CompletedSessions from './pages/student/CompletedSessions'
import Mentors from './pages/student/Mentors'
import Loading from './pages/common/Loading'
import Applications from './pages/admin/Applications'
import AdminMentors from './pages/admin/Mentors'
import Tracks from './pages/admin/Tracks'
import ResumeBuilder from './pages/student/ResumeBuilder'
import ApplicationSent from './pages/mentor/ApplicationSent'
import MentorAccount from './pages/mentor/Account'

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './pages/ProtectedRoute'

import { getUser, getCurrentProfile, getProfiles } from './store/actions'
import Landing from './pages/common/Landing'
import News from './pages/student/News'

function App () {
  const dispatch = useDispatch()
  const darkmode = useSelector(state => state.darkmode)
  const user = useSelector(state => state.user)
  const profiles = useSelector(state => state.profiles)
  const currentProfile = useSelector(state => state.currentProfile)
  const currentTrack = useSelector(state => state.currentTrack)

  const getUserData = async () => {
    if (localStorage.getItem('userId')) {
      const userId = localStorage.getItem('userId')
      if (Object.keys(user).length === 0) {
        await dispatch(getUser(userId))
        if (!profiles.length) {
          const res = await dispatch(getProfiles(userId))
          if (!res.length && window.location.pathname !== '/createprofile') {
            window.location.href = '/createprofile'
          }
        }
      }
      if (profiles.length && (Object.keys(currentProfile).length === 0 || Object.keys(currentTrack).length === 0)) {
        await dispatch(getCurrentProfile(userId))
      }
    }
  }

  useEffect(() => {
    getUserData()
  }, [user, profiles])

  return (
    <div className={`App ${darkmode ? 'header-dark' : ''}`}>
      <Router>
        <Routes>
          <Route path="/mentor-home" element={ <MentorHome /> } />
          <Route path="/resume-builder" element={ <ProtectedRoute><ResumeBuilder /></ProtectedRoute> } />
          <Route path="/admin/tracks" element={ <Tracks /> } />
          <Route path="/admin/mentors" element={ <AdminMentors /> } />
          <Route path="/admin/applications" element={ <Applications /> } />
          <Route path="/loading" element={ <Loading /> } />
          <Route path="/mentors" element={ <ProtectedRoute><Mentors /></ProtectedRoute> } />
          <Route path="/completed-sessions" element={ <ProtectedRoute><CompletedSessions /></ProtectedRoute> } />
          <Route path="/news" element={ <ProtectedRoute><News /></ProtectedRoute> } />
          <Route path="/sessions" element={ <ProtectedRoute><Sessions /></ProtectedRoute> } />
          <Route path="/jobs" element={ <ProtectedRoute><Jobs /></ProtectedRoute> } />
          <Route path="/completed-courses" element={ <ProtectedRoute><CompletedCourses /></ProtectedRoute> } />
          <Route path="/courses" element={ <ProtectedRoute><Courses /></ProtectedRoute> } />
          <Route path="/createprofile" element={ <ProtectedRoute><CreateProfile /></ProtectedRoute> } />
          <Route path="/profiles" element={ <ProtectedRoute><Profiles /></ProtectedRoute> } />
          <Route path="/account" element=
            { user.user_type === 'student'
              ? <ProtectedRoute><StudentAccount /></ProtectedRoute>
              : <ProtectedRoute><MentorAccount /></ProtectedRoute>
            } />
          <Route path="/login" element={ <Login />} />
          <Route path="/applicationsent" element={ <ApplicationSent />} />
          <Route path="/applymentor" element={ <ApplyMentor /> } />
          <Route path="/signup" element={ <Signup />} />
          <Route path="/home" element={ <Landing /> } />
          <Route path="/" element=
            { user.user_type === 'student' || user.User_type === 'student'
              ? <ProtectedRoute><StudentHome /></ProtectedRoute>
              : user.user_type === 'mentor' || user.User_type === 'mentor'
                ? <ProtectedRoute><MentorHome /></ProtectedRoute>
                : <ProtectedRoute><Loading /></ProtectedRoute>}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
