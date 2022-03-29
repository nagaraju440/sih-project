
import {
  Routes, Route, BrowserRouter as Router, Navigate,

} from "react-router-dom";
import MentorSignUpPage from './components/Mentors/Authentication/SignUpPage';
import StudentSignUpPage from './components/Students/Authentication/SignupPage';
import LandingPage from './components/LandingPage/LandingPage'
import MentorSignUpPage1 from './components/Mentors/Authentication/SignUpPage1'
import SelectCollege from './components/LandingPage/SelectCollege';
import MentorOrStu from './components/LandingPage/MentorOrStu'
import MentorOrStudentSignin from './components/LandingPage/MentorOrStudentSignin'
import MentorSignUpPage2 from './components/Mentors/Authentication/SignUpPage2';
import MentorSignUpPage3 from './components/Mentors/Authentication/SignUpPage3';
import SignIn from './SignIn'
import IdeanaHome from "./components/Ideana/IdeanaHome";
import NavBar from "./components/Navbar/Navbar";
export default function NotAuthenticated() {
  return (
     <Router>
       <NavBar/>
     <div style={{paddingTop:60}}>
     <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Dashboard" element={<Navigate to="/" replace={true}></Navigate>}></Route>
      <Route path="/Ideana" element={<IdeanaHome/>}></Route>
      <Route path="mentor/signup" element={<MentorSignUpPage />} />
      <Route path="mentor/signup1" element={<MentorSignUpPage1 />} />
      <Route path="mentor/signup2" element={<MentorSignUpPage2 />} />
      <Route path="mentor/signup3" element={<MentorSignUpPage3 />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="student/signup" element={<StudentSignUpPage />} />
      {/* <Route path="student/signin" element={<StudentSignInPage />} /> */}
      <Route path="selectCollege" element={<SelectCollege />} />
      <Route path="mentorOrStudent_signup" element={<MentorOrStu />} />
      <Route path="mentorOrStudent_signin" element={<MentorOrStudentSignin />} />
      </Routes>
     </div>
 </Router>  
  )
}
