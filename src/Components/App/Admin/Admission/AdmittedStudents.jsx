import React from 'react'
import AdmittedStudentsTable from './AdmittedStudents/AdmittedStudentsTable';
import { Box } from '@mui/material';


function AdmittedStudents() {
    return (
        <Box style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 30
        }}>
            <div
                style={{
                    width: '95%',
                }}>
                <span style={{ float: 'left' }}>
                </span>
                <AdmittedStudentsTable />
            </div>
        </Box >
    )
}

export default AdmittedStudents