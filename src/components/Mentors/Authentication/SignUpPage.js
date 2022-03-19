import React, { Component } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
export default class SignUpPage extends Component {
  render() {
    return (
      <>
        <h1>Mentor Sign Up page</h1>
      </>
    )
  }
}
