import React from 'react'
import '../Ideana/IdeanaHome.css'
import img1 from '../../../src/assets/Images/Ideanaimage1.png'
import img2 from '../../../src/assets/Images/Ideanaimage2.png'
import img3 from '../../assets/Images/Ideana_iamge3.png'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
import {
    Routes, Route, Link, BrowserRouter as Router,Redirect,Navigate,useNavigate,
    Switch,
  } from "react-router-dom";
// import { baseUrl } from "./config";
export default function IdeanaHome() {
    const navigate=useNavigate()
  return (
    <div>
    <div className="Ideana_iamges">
     <div className="Ideana_image1"><img src={img1}/></div>
     <div className="Ideana_image2"><img src={img2}/></div>
    </div>
    <div className="Ideana_main">
     <Carousel 
     dots={false}
    className='Ideana_slider'>
         <div className="Ideana_Card">
             <div>
                 <img src={img3}/>
             </div>
             <div className="Ideana_heading">Artificial Hand - Project Idea</div>
              <div className="Ideana_text">Project Description in detail 3 lines hfghsgdh bkfzjsd.: Hey cleo! Can you clarity my to react native..? I was confused what to choose in developing....</div>
              <div className="Ideana_views">20 views</div>
         </div>
         <div>
             1
         </div>
         </Carousel> 
         <div className="Ideana_buttonpart">
             <button className='Ideana_button' onClick={
                 ()=>{
                    console.log("hello")
                    navigate('/Dashboard/ideana/addIdea')
                 }
             }>Post Your Idea</button>
         </div>
    </div>
    </div>
  )
}
