import React from 'react'
import Login from './components/Login'
import authService from './service/authService';
import App from './components/App'

function Root() {
  const user = authService.getCurrentUser();

  return (
    <div>
      {
        (user) ?
          <div>
            <App />
          </div>
          :
          <div>
            <Login />
          </div>
      }
    </div>
  )
}

export default Root;
