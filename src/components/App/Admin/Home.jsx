import React, { useEffect,useState } from 'react'
import apiService from '../../../service/apiService';
// import * as React from 'react';

import './Home.css'
import Clock from './Home/Clock';
import Calender from './Home/Calender'


function Home({routes}) {
  const [state, setState] = useState('');
  useEffect(() => {
    apiService.test().then(res=>{
      setState(res.data.message)
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