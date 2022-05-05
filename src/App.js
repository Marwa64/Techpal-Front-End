import Login from "./components/pages/common/Login"
import Signup from "./components/pages/common/Signup"
import {Home as StudentHome} from "./components/pages/student/Home"
import {Home as MentorHome} from "./components/pages/mentor/Home"
import Account from "./components/pages/student/Account"
import Profiles from "./components/pages/student/Profiles"
import CreateProfile from "./components/pages/student/CreateProfile"
import Courses from "./components/pages/student/Courses"
import Loading from "./components/pages/common/Loading"

import { useSelector, useDispatch } from 'react-redux';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from "./components/ProtectedRoute"

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
          <Route path="/signup" element={ <Signup />} />
          <Route path="/" element={ user.user_type==="student" ? <ProtectedRoute><StudentHome /></ProtectedRoute> : user.user_type==="mentor" ? <ProtectedRoute><MentorHome /></ProtectedRoute> : <ProtectedRoute><Loading /></ProtectedRoute>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
