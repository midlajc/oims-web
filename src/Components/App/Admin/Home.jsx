import React, { useEffect } from 'react'
// import apiService from '../../../service/apiService';
// import * as React from 'react';

import './Home.css'
import Clock from './Home/Clock';
import Calender from './Home/Calender'


function Home({routes}) {
  useEffect(() => {
    return () => {
      
    };
  }, []);

  return (
    <div className='body'
    style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
    }}
    >
      <Clock />
      <Calender />
    </div>
  )
}

export default Home