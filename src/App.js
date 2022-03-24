import {Home as StudentHome} from "./components/pages/student/Home"
import {Home as MentorHome} from "./components/pages/mentor/Home"
import Profiles from "./components/pages/student/Profiles"
import CreateProfile from "./components/pages/student/CreateProfile"
import { useSelector } from 'react-redux';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const role="student"
  const darkmode = useSelector(state => state.darkmode);

  return (
    <div className={`App ${darkmode ? "header-dark": ""}`}>
      <Router>
        <Routes>
          <Route path="/createprofile" element={ <CreateProfile />} />
          <Route path="/profiles" element={ <Profiles />} />
          <Route path="/" element={ role==="student" ? <StudentHome /> : <MentorHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
