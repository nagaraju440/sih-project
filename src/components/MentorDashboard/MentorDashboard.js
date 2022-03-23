import React, { Component } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

class MentorDashboard extends Component {
    signOut = () => {
        const auth = getAuth();
        auth.signOut()
    }
    render() {
        return (
            <div>
                <h1>Hey this is Mentor dashboard</h1>
                <button onClick={this.signOut} >Signout</button>
            </div>
        );
    }
}

export default MentorDashboard;