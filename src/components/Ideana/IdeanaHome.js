import React, { useEffect, useState } from "react";
import "../Ideana/IdeanaHome.css";
import img1 from "../../../src/assets/Images/Ideanaimage1.png";
import img2 from "../../../src/assets/Images/Ideanaimage2.png";
import img3 from "../../assets/Images/Ideana_iamge3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import db from "../../firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {
  Routes,
  Route,
  Link,
  BrowserRouter as Router,
  Redirect,
  Navigate,
  useNavigate,
  Switch,
} from "react-router-dom";
export default function IdeanaHome(props) {
  const navigate = useNavigate();
  useEffect(async () => {
    const test = await getDocs(
      collection(db, "colleges", props.collgeName, "ideana")
    );
    test.forEach((doc) => {
      y.push(doc.data());
    });
    setDetails(y);
    console.log(details, "dhgSjdnsnJ");
  }, []);
  const ideas = [
    {
      id: 1,
      title: "title 1",
      des: "Here is your project 1",
    },
    {
      id: 2,
      title: "title 2",
      des: "Here is your project 2",
    },
  ];

  const [details, setDetails] = useState({});

  // Getting ideas content from the database
  const y = [];
  useEffect(async () => {
    const test = await getDocs(
      collection(db, "colleges", props.collegeName, "ideana")
    );
    test.forEach((doc) => {
      y.push(doc.data());
    });
    setDetails(y);
    console.log(details, "dhgSjdnsnJ");
  }, []);

  return (
    <div>
      <div className="Ideana_iamges">
        {console.log(props.collegeName)}
        <div className="Ideana_image1">
          <img src={img1} />
        </div>
        <div className="Ideana_image2">
          <img src={img2} />
        </div>
      </div>

      {Object.values(details).map((c, p) => {
        return (
          <div className="Ideana_main">
            {console.log(props, "ideana")}

            <Carousel dots={false} className="Ideana_slider">
              <div className="Ideana_Card">
                <div>
                  <img src={img3} />
                </div>

                <div>
                  <div className="Ideana_heading">{c.title}</div>
                  <div className="Ideana_text">{c.description}</div>
                  <div className="Ideana_views">20 views</div>
                </div>
              </div>
            </Carousel>
          </div>
        );
      })}
      <div className="Ideana_buttonpart">
        <button
          className="Ideana_button" 
          onClick={() => {
            console.log("hello");
            navigate("/Dashboard/ideana/addIdea");
          }}
        >
          Post Your Idea
        </button>
      </div>
    </div>
  );
}
