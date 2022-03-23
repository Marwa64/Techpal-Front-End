import {Home as StudentHome} from "./components/pages/student/Home"
import {Home as MentorHome} from "./components/pages/mentor/Home"
import Profiles from "./components/pages/student/Profiles"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const role="student"
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/profiles" element={ <Profiles />} />
          <Route path="/" element={ role==="student" ? <StudentHome /> : <MentorHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
