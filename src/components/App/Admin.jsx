import React from 'react'
import Header from './Admin/Header';

import routes from './Admin/routes'
import Routes from './Admin/Routes'

function Admin() {
    return (
        <div>
            <Header routes={routes} />
            <Routes />
        </div>
    )
}

export default Admin