import React, { useEffect, useState } from 'react'
import apiService from '../service/apiService'

function Home() {
  const [state, setState] = useState(undefined);
  useEffect(()=>{
    apiService.test().then(res=>{
      setState(res.data.message)
    })
  },[])
  return (
    <div>{state}</div>
  )
}

export default Home