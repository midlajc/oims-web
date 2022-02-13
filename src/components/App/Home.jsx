import React from 'react'
// import apiService from '../../service/apiService';
// import * as React from 'react';

import './Home.css'
import Clock from './Home/Clock';
import Calender from './Home/Calender'


function Home() {
  return (
    <div className='body'>
      <Clock />
      <Calender />
    </div>
  )
}

export default Home