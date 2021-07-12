import React from 'react';

import './signin-signout.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignOut = () => (
  <div className="signin-and-signout">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignOut;
