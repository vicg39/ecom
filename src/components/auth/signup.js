import React, { Component } from 'react';

import SignUpForm from './signupForm';
import PageTitle from '../pageTitle';

class SignUp extends Component {
    onSubmit = (fields) => {
        console.log(fields); s
    }

    render() {
        return(
            <div className="sign-up">
           
                <PageTitle className="sign-up-page-title" title="Register"/>
                <SignUpForm  onSubmit={this.onSubmit} className="sign-up-form" />
                <h1> </h1>
            </div>
        )
    }
}

export default SignUp;

