import Login from "./pages/common/Login"
import Signup from "./pages/common/Signup"
import ApplyMentor from "./pages/common/ApplyMentor"
import { Home as StudentHome} from "./pages/student/Home"
import {Home as MentorHome} from "./pages/mentor/Home"
import Account from "./pages/student/Account"
import Profiles from "./pages/student/Profiles"
import CreateProfile from "./pages/student/CreateProfile"
import Courses from "./pages/student/Courses"
import Loading from "./pages/common/Loading"
import Applications from "./pages/admin/Applications"

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from "./pages/ProtectedRoute"

import { getUser, getCurrentProfile } from './store/actions';
import  Landing  from "./pages/common/Landing"

function App() {
  const dispatch = useDispatch();
  const darkmode = useSelector(state => state.darkmode);
  const user = useSelector(state => state.user);
  const currentProfile = useSelector(state => state.currentProfile);
  const currentTrack = useSelector(state => state.currentTrack);

  const getUserData = async () => {
    if (localStorage.getItem("userId")) {
      const userId = localStorage.getItem("userId");
      if (Object.keys(user).length === 0) {
        await dispatch(getUser(userId));
      }
      if (Object.keys(currentProfile).length === 0 || Object.keys(currentTrack).length === 0) {
        await dispatch(getCurrentProfile(userId));
      }
    }
  }

  useEffect(() => {
    getUserData();
  })

  return (
    <div className={`App ${darkmode ? "header-dark": ""}`}>
      <Router>
        <Routes>
          <Route path="/applications" element={ <Applications /> } />
          <Route path="/loading" element={ <Loading /> } />
          <Route path="/courses" element={ <Courses /> } />
          <Route path="/createprofile" element={ <ProtectedRoute><CreateProfile /></ProtectedRoute> } /> 
          <Route path="/profiles" element={ <Profiles /> } />
          <Route path="/account" element={ <Account /> } />
          <Route path="/login" element={ <Login />} />
          <Route path="/applymentor" element={ <ApplyMentor /> } />
          <Route path="/signup" element={ <Signup />} />
          <Route path="/home" element={ <Landing /> } />
          <Route path="/" element=
            { user.user_type==="student" || user.User_type==="student" ? <ProtectedRoute><StudentHome /></ProtectedRoute> 
            : user.user_type==="mentor" || user.User_type==="mentor" ? <ProtectedRoute><MentorHome /></ProtectedRoute> 
            : <ProtectedRoute><Loading /></ProtectedRoute>} 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
