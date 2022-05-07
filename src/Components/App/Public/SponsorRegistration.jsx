// import React from 'react'
import React, { useState, useEffect } from 'react';
import { TextField, Select, MenuItem, Grid, Alert } from '@mui/material';
import { Button, Box, Card, Typography, Snackbar } from '@mui/material';
import publicService from '../../../service/publicService';
import InputLabel from '@mui/material/InputLabel';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

function SponsorRegistration() {
    const [name, setName] = useState('');
    const [dob, setDob] = useState(null);
    const [gender, setGender] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [communicationAddress, setCommunicationAddress] = useState('');
    const [permanentAddress, setPermanentAddress] = useState('');
    const [toast, setToast] = useState({ status: false })


    const [genderList, setGenderList] = useState([])

    useEffect(async () => {
        setGenderList((await publicService.getGenders()).data)
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            "name": name,
            "dob": dob,
            "gender": gender,
            "mobile": mobile,
            "email": email,
            "permanentAddress": permanentAddress,
            "communicationAddress": communicationAddress
        }
        publicService.sponsorRegistration(data).then(response => {
            setToast({
                status: true,
                message: "Registration Successful\nWe Will Get Back to You as Soon as Possible",
                severity: 'success',
                handleClose: () => {
                    setToast({ status: false })
                }
            })
            handleClear()
        })
    }
    const handleClear = () => {
        setName('')
        setDob(null)
        setGender('')
        setMobile('')
        setEmail('')
        setPermanentAddress('')
        setCommunicationAddress('')
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                height: '100vh',
                alignItems: 'center',
            }}
        >
            <Card
                sx={{
                    height: 'auto',
                    padding: '1.5rem',
                    margin: '1rem',
                    width: {
                        md: '30rem',
                        xs: '100%'
                    },
                    borderRadius: ".5rem",
                }}
            >
                <Box sx={{
                    p: 1.5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>

                    <Typography
                        fontWeight={700}
                    >
                        Sponsor Registration
                    </Typography>
                </Box>
                <form
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10
                    }}
                    onSubmit={handleSubmit}
                >
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={12}>
                            <InputLabel id="">Name *</InputLabel>
                            <TextField
                                required
                                fullWidth
                                value={name}
                                onChange={(newVal) => setName(newVal.target.value)}
                                size='small'
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputLabel id="">Gender*</InputLabel>
                            <Select
                                value={gender}
                                fullWidth
                                size='small'
                                onChange={(newVal) => setGender(newVal.target.value)}
                                id=""
                            >
                                {
                                    genderList.map((value, key) => {
                                        return (
                                            <MenuItem key={key} value={value._id}>{value.name}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputLabel id="">Date of Birth *</InputLabel>
                            <LocalizationProvider
                                dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    value={dob}
                                    onChange={(newValue) => {
                                        setDob(newValue);
                                    }}
                                    renderInput={(params) => <TextField
                                        style={{
                                            width: '100%'
                                        }}
                                        size='small'
                                        {...params}
                                    />}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputLabel id="">Mobile No*</InputLabel>
                            <TextField
                                required
                                fullWidth
                                type='number'
                                value={mobile}
                                onChange={(newVal) => setMobile(newVal.target.value)}
                                size='small'
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputLabel id="">Email*</InputLabel>
                            <TextField
                                required
                                fullWidth
                                type='email'
                                value={email}
                                onChange={(newVal) => setEmail(newVal.target.value)}
                                size='small'
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <InputLabel id="">Permanent Address*</InputLabel>
                            <TextField
                                required
                                fullWidth
                                multiline
                                rows={3}
                                type='text'
                                value={permanentAddress}
                                onChange={(newVal) => setPermanentAddress(newVal.target.value)}
                                size='small'
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <InputLabel id="">Communication Address*</InputLabel>
                            <TextField
                                required
                                fullWidth
                                multiline
                                rows={3}
                                type='text'
                                value={communicationAddress}
                                onChange={(newVal) => setCommunicationAddress(newVal.target.value)}
                                size='small'
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around'
                        }}
                    >
                        <Button variant="contained"
                            onClick={handleClear}
                        >
                            Clear
                        </Button>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </div>
                </form>
            </Card>
            <Snackbar open={toast.status}
                autoHideDuration={3000} onClose={toast.handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                sx={{ bottom: { xs: 90, sm: 0 } }}
            >
                <Alert onClose={toast.handleClose} severity={toast.severity} sx={{ width: 'auto' }}>
                    {toast.message}
                </Alert>
            </Snackbar>
        </Box>
    );
}

export default SponsorRegistration