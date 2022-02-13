import React, { useState,useEffect } from 'react'
// import apiService from '../../service/apiService';
// import * as React from 'react';

import './Home.css'
import Clock from './Home/Clock';
import Calender from './Home/Calender'


function Home() {
  // const [state, setState] = useState(undefined);
  useEffect(() => {
    // setInterval(() => {
    //     setSec(preSec => preSec + 1)
    //   }, 10000)
  //   apiService.test().then(res => {
  //     setState(res.data.message)
  //   })
  }, [])
  return (
    <div className='body'>
      <Clock></Clock>
      <Calender></Calender>
    </div>
  )
}

export default Home