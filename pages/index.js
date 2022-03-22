import Header from '../components/Header';
import QuickNav from '../components/QuickNav';
import Rooms from '../components/Rooms';

import Head from 'next/head';

import { CssBaseline } from '@mui/material';

export default function Home() {
  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  return (
    <div>
      <Head>
        <title>Space Uno (Uno 3.0)</title>
        {/* <meta name="google-signin-client_id" content="273257248097-vvc87cj68g7dqdhdmkr27a8b1hhnp3nh.apps.googleusercontent.com"></meta>
        <script src="https://apis.google.com/js/platform.js" async defer></script> */}
      </Head>
      <CssBaseline/>
      <Header/>
      <QuickNav/>
      <Rooms/>

      {/* <div className="g-signin2" data-onsuccess="onSignIn"></div> */}

      {/* Continue with NEXTAUTH.js */}
    </div>
  )
}
