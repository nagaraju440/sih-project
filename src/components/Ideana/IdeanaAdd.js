import React,{useState} from 'react'
import '../Ideana/IdeanaAdd.css'
import { Input } from 'antd';
import { Select } from 'antd';
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import db from "../../firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";

export default function IdeanaAdd(props) {
  const { Option } = Select;
  const { TextArea } = Input;
  const [idea,setIdea]=useState("")
  const [domain, setDomain] = useState("");
  const[descript,setDescript] = useState("")



  const domains = [
    'Full Stack',
    'ML',
    'AI',
  ]
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onSearch(val) {
    console.log('search:', val);
  }


  const Idea=(e)=>{
    console.log(e.target.value)
    setIdea(e.target.value)
  
  }
  function domineSelect(e) {
    console.log(e.target.value);
    setDomain(e.target.value);
  }
  const description=(e)=>{
    console.log(e.target.value)
    setDescript(e.target.value)

  }
  // Idead adding to the db ok!



  var onSubmitIdea = async (e) => {
    try {
   
    addDoc(collection(db,"colleges",props.collegeName,"ideana"),{
      title:idea,
       domain:domain,
       description:descript,
    
    })
    console.log("idea posted successfully");
  }
 
    
  catch (err) {
    console.error(err);
    alert(err.message);
  }
  

  

  }

  return (
    <div className="postmain">
      <div className="Ideana_container">
        <div className="Ideana_heading">Post Your Idea</div>
        <div className="Ideana_postcard">
          <div>
            <div className="Ideana_Headingtext">Title</div>
            <div className="Ideana_posttext">Be specific and imagine you’re asking a question to another person</div>
            <div><Input className="Ideana_input" onChange={(value)=>Idea(value)} /></div>
          </div>
          <div>
            <div className="Ideana_Headingtext">Domine</div>
            <div className="Ideana_posttext">
            <select name="cars" className="MCreateCourseFormTitleInput" onChange={domineSelect}>
             
          
        {
            domains.map((e) => {
              return(
              <option value={e}>{e}</option>
              );
          })
          }
         
          </select>
            </div>
          </div>
          <div>
            <div className="Ideana_Headingtext">Description</div>
            <div className="Ideana_textarea">
              <TextArea  onChange={(value)=>description(value)} />
            </div>
          </div>
        </div>
        <div className="Ideana_postbutton" onClick={onSubmitIdea}>
        <button o>Post</button>
      </div>
      </div> 
    </div>
  )
}
