import React, { useEffect,useState } from 'react'
import apiService from '../../service/apiService';
// import * as React from 'react';

import './Home.css'
import Clock from './Home/Clock';
import Calender from './Home/Calender'


function Home() {
  const [state, setstate] = useState('');

  useEffect(() => {
    apiService.test().then(res=>{
      setstate(res.data.message)
    })
    return () => {
      
    };
  }, []);

  return (
    <div className='body'>
      <Clock />
      <Calender />
      {state}
    </div>
  )
}

export default Home