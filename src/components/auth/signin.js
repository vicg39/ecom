import React, { Component } from 'react';

import SignInForm from './signinForm';

import { reduxForm, Field } from 'redux-form' 

class SignIn extends Component {
    render() {
        return(
            <div className="sign-in">
                <SignInForm  className="sign-in-form" />
            </div>
        )
    }
}

export default SignIn;
