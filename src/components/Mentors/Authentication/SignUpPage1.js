import React, { Component } from 'react'
import {useLocation,withRouter} from 'react-router-dom';

 const SignUpPage1=()=>{
    let location = useLocation();
    console.log("location is",location.state.uid)
    return (
        <div>Sign up page 1</div>
    )
}
export default SignUpPage1