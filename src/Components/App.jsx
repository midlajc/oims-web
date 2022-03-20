import React, { useEffect, useState } from 'react'
import storageService from '../service/storageService';

import Admin from './App/Admin';

import userContext from '../Context/userContext';

function App() {
  const user = storageService.getUser();
  const [currentUser, setCurrentUser] = useState(user);
  // useEffect(() => {
  //   if (user) {
  //     setCurrentUser(user);
  //   }
  // }, [])

  let render = () => {
    if (user.role === 'admin') {
      return (
        <Admin />
      )
    }
  }

  return (
    <div>
      <div>
        <userContext.Provider value={currentUser}>
          {render()}
        </userContext.Provider>
      </div>
    </div>
  )
}

export default App