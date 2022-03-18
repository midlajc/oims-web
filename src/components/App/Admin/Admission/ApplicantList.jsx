import React, { useState } from 'react'
import { Box, Button } from '@mui/material';

import AddApplicant from './ApplicantList/AddApplicant'
import { margin, width } from '@mui/system';
import ApplicantTable from './ApplicantList/ApplicantTable';

function ApplicantList() {
  const [addApplicant, setAddApplicant] = useState(false);
  const handleOpen = () => setAddApplicant(true);
  const handleClose = () => setAddApplicant(false);

  return (
    <Box style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: 30
    }}>
      <div
        style={{
          // background: 'black',
          width: '95%',
          // padding:5
        }}>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <span style={{ float: 'left' }}>
          {/* <AddApplicant open={addApplicant} close={handleClose} /> */}
        </span>
        <ApplicantTable />
      </div>
    </Box >
    // <>
    // </>
  )
}

export default ApplicantList 