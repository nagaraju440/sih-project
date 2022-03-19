import logo from './logo.svg';
import './App.less';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import AntdSample from './AntdSample/AntdSample';
import CloudFirestore from './FirebaseSample/CloudFirestore';
import { Routes, Route, Link, BrowserRouter as Router,
Switch, } from "react-router-dom";
import MentorSignUpPage from './components/Mentors/Authentication/SignUpPage';
import MentorSignInPage from './components/Mentors/Authentication/SigninPage';
import StudentSignUpPage from './components/Students/Authentication/SignupPage';
import StudentSignInPage from './components/Students/Authentication/SigninPage';
function App() {
  return (
    // <div className="App">
      // {/* <AntdSample/> */}
      // <h1>Welcome to React Router!</h1>
      // <Router>
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mentor/signup" element={<MentorSignUpPage/>}  />
        <Route path="mentor/signin" element={<MentorSignInPage/>}  />
        <Route path="student/signup" element={<StudentSignUpPage/>}  />
        <Route path="student/signin" element={<StudentSignInPage/>}  />
        <Route path="about" element={<About />} />
      </Routes>
      // {/* </Router> */}
      // {/* <CloudFirestore/> */}
     
    // {/* </div> */}
  );
}

export default App;

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/mentor/signup">mentor Sign up page</Link>
      </nav>
      <nav>
        <Link to="/mentor/signin">mentor Sign in page</Link>
      </nav>
      <nav>
        <Link to="/student/signup">Student Sign up page</Link>
      </nav>
      <nav>
        <Link to="/student/signin">Student Sign in page</Link>
      </nav>

    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}