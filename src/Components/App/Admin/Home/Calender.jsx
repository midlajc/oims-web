import React, { useState } from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import Grid from '@mui/material/Grid';

function Calender() {
    const [date, setDate] = useState(new Date());
    return (
        <LocalizationProvider
            dateAdapter={AdapterDateFns}>
            <Grid item xs={12} md={1}>
                <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
            </Grid>
        </LocalizationProvider>
    )
}

export default Calender