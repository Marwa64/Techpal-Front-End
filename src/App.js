import Login from "./components/pages/common/Login"
import Signup from "./components/pages/common/Signup"
import {Home as StudentHome} from "./components/pages/student/Home"
import {Home as MentorHome} from "./components/pages/mentor/Home"
import Profiles from "./components/pages/student/Profiles"
import CreateProfile from "./components/pages/student/CreateProfile"
import Account from "./components/pages/student/Account"

import { useSelector } from 'react-redux';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  const darkmode = useSelector(state => state.darkmode);
  const user = useSelector(state => state.user);

  return (
    <div className={`App ${darkmode ? "header-dark": ""}`}>
      <Router>
        <Routes>
          <Route path="/createprofile" element={ <ProtectedRoute><CreateProfile /></ProtectedRoute>} />
          <Route path="/profiles" element={ <ProtectedRoute><Profiles /></ProtectedRoute>} />
          <Route path="/account" element={ <Account /> } />
          <Route path="/login" element={ <Login />} />
          <Route path="/signup" element={ <Signup />} />
          <Route path="/" element={ user.user_type==="student" ? <ProtectedRoute><StudentHome /></ProtectedRoute> : <ProtectedRoute><MentorHome /></ProtectedRoute>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
