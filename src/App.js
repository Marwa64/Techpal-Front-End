import Login from "./pages/common/Login"
import Signup from "./pages/common/Signup"
import ApplyMentor from "./pages/common/ApplyMentor"
import {Home as StudentHome} from "./pages/student/Home"
import {Home as MentorHome} from "./pages/mentor/Home"
import Account from "./pages/student/Account"
import Profiles from "./pages/student/Profiles"
import CreateProfile from "./pages/student/CreateProfile"
import Courses from "./pages/student/Courses"
import Loading from "./pages/common/Loading"

import { useSelector, useDispatch } from 'react-redux';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from "./pages/ProtectedRoute"

import { getUser } from './store/actions';

function App() {
  const dispatch = useDispatch();
  const darkmode = useSelector(state => state.darkmode);
  const user = useSelector(state => state.user);

  if (Object.keys(user).length === 0 && localStorage.getItem("userId")) {
    let userId = localStorage.getItem("userId");
    dispatch(getUser(userId));
  }

  return (
    <div className={`App ${darkmode ? "header-dark": ""}`}>
      <Router>
        <Routes>
          <Route path="/loading" element={ <Loading /> } />
          <Route path="/courses" element={ <Courses /> } />
          <Route path="/createprofile" element={ <ProtectedRoute><CreateProfile /></ProtectedRoute> } /> 
          <Route path="/profiles" element={ <Profiles /> } />
          <Route path="/account" element={ <Account /> } />
          <Route path="/login" element={ <Login />} />
          <Route path="/applymentor" element={ <ApplyMentor /> } />
          <Route path="/signup" element={ <Signup />} />
          <Route path="/" element={ user.user_type==="student" ? <ProtectedRoute><StudentHome /></ProtectedRoute> : user.user_type==="mentor" ? <ProtectedRoute><MentorHome /></ProtectedRoute> : <ProtectedRoute><Loading /></ProtectedRoute>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
