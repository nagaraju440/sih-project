import React, { Component } from 'react';
import db from '../firebaseConfig'
import { collection, addDoc } from "firebase/firestore"; 

class CloudFirestore extends Component {
    // constructor(props) {
    //     super(props);

    // }

    componentDidMount() {
    // const db=firebase.firestore()

    try {
      const docRef =  addDoc(collection(db, "users"), {
        first: "nagaraju",
        last: "bala",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
    }


    render() {
        return (
            <div>
                 <h1>Firebase data fetch from cloud firestore</h1>
            </div>
        );
    }
}

CloudFirestore.propTypes = {

};

export default CloudFirestore;