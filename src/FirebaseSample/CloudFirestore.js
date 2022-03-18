import React, { Component } from 'react';
import db from '../firebaseConfig'

class CloudFirestore extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
    // const db=firebase.firestore()
      console.log("firebase",db)
  
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