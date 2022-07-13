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
import ChangePassword from './pages/mentor/ChangePassword'

import { useEffect } from 'react'
import { useDispatch, connect } from 'react-redux'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import StudentProtected from './pages/StudentProtected'
import MentorProtected from './pages/MentorProtected'
import AdminProtected from './pages/AdminProtected'
import IsLoggedOut from './pages/IsLoggedOut'
import IsLoggedIn from './pages/IsLoggedIn'

import { getUser } from './store/actions'
import Landing from './pages/common/Landing'
import News from './pages/student/News'
import NotFound from './pages/common/404'

function App ({ user, darkmode }) {
  const dispatch = useDispatch()

  const getUserData = async () => {
    if (localStorage.getItem('userId')) {
      const userId = localStorage.getItem('userId')
      if (Object.keys(user).length === 0) {
        await dispatch(getUser(userId))
      }
    }
  }

  useEffect(() => {
    getUserData()
  }, [user])

  return (
    <div className={`App ${darkmode ? 'header-dark' : ''}`}>
      <Router>
        <Routes>
          <Route path='/404' element={<NotFound/>}/>
          <Route path="/resume-builder" element={ <StudentProtected><ResumeBuilder /></StudentProtected> } />
          <Route path="/admin/tracks" element={ <AdminProtected><Tracks /></AdminProtected> } />
          <Route path="/admin/mentors" element={ <AdminProtected><AdminMentors /></AdminProtected> } />
          <Route path="/admin/applications" element={ <AdminProtected><Applications /> </AdminProtected>} />
          <Route path="/mentors" element={ <StudentProtected><Mentors /></StudentProtected> } />
          <Route path="/completed-sessions" element={ <StudentProtected><CompletedSessions /></StudentProtected> } />
          <Route path="/news" element={ <StudentProtected><News /></StudentProtected> } />
          <Route path="/sessions" element={ <StudentProtected><Sessions /></StudentProtected> } />
          <Route path="/jobs" element={ <StudentProtected><Jobs /></StudentProtected> } />
          <Route path="/completed-courses" element={ <StudentProtected><CompletedCourses /></StudentProtected> } />
          <Route path="/courses" element={ <StudentProtected><Courses /></StudentProtected> } />
          <Route path="/createprofile" element={ <CreateProfile /> } />
          <Route path="/profiles" element={ <StudentProtected><Profiles /></StudentProtected> } />
          <Route path="/account" element=
            { user.user_type === 'student' || user.User_type === 'student'
              ? <StudentProtected><StudentAccount /></StudentProtected>
              : <MentorProtected><MentorAccount /></MentorProtected>
            } />
          <Route path="/login" element={ <IsLoggedOut><Login /></IsLoggedOut>} />
          <Route path="/applicationsent" element={ <ApplicationSent />} />
          <Route path="/changepassword" element={ <IsLoggedIn><ChangePassword /></IsLoggedIn> } />
          <Route path="/applymentor" element={ <IsLoggedOut><ApplyMentor /></IsLoggedOut> } />
          <Route path="/signup" element={ <IsLoggedOut><Signup /></IsLoggedOut>} />
          <Route path="/home" element=
            { user.user_type === 'student' || user.User_type === 'student'
              ? <StudentProtected><StudentHome /></StudentProtected>
              : user.user_type === 'mentor' || user.User_type === 'mentor'
                ? <MentorProtected><MentorHome /></MentorProtected>
                : user.user_type === 'admin' || user.User_type === 'admin'
                  ? <Navigate to="/admin/applications" replace />
                  : <Loading />}
          />
          <Route path="/" element={ <IsLoggedOut><Landing /></IsLoggedOut> } />
        </Routes>
      </Router>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    darkmode: state.darkmode
  }
}

export default connect(mapStateToProps)(App)
