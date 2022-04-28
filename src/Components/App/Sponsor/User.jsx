import React, { useState, useEffect } from 'react'
import authService from '../../../service/authService'
import sponsorService from '../../../service/sponsorService'
import Profile from './User/Profile'

function User() {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState('')

  useEffect(async () => {
    setUser((await sponsorService.getProfile()).data)
  }, [])

  const logout = () => {
    setLoading(newValue => !newValue)
    authService.logout()
  }

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <Profile user={user} logout={logout} loading={loading} />
    </div>
  )
}

export default User