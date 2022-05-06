// import React from 'react'
import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

function SponsorRegistration() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(firstName, lastName, email, password);
        // handleClose();
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="First Name"
                variant="filled"
                required
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />
            <TextField
                label="Last Name"
                variant="filled"
                required
                value={lastName}
                onChange={e => setLastName(e.target.value)}
            />
            <TextField
                label="Email"
                variant="filled"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                variant="filled"
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <div>
                <Button variant="contained"
                // onClick={handleClose}
                >
                    Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary">
                    Signup
                </Button>
            </div>
        </form>
    );
}

export default SponsorRegistration