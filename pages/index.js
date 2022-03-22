import Header from '../components/Header';
import QuickNav from '../components/QuickNav';
import Rooms from '../components/Rooms';

import Head from 'next/head';

import { CssBaseline } from '@mui/material';

export default function Home() {


  return (
    <div>
      <Head>
        <title>Space Uno (Uno 3.0)</title>
      </Head>
      <CssBaseline/>
      <Header/>
      <QuickNav/>
      <Rooms/>

      
    </div>
  )
}
