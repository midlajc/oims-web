import React, { useState } from 'react'
import { Box } from '@mui/material';

import AddApplicant from './ApplicantList/AddApplicant'
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
        <AddApplicant open={addApplicant} close={handleClose} />
        <span style={{ float: 'left' }}>
        </span>
        <ApplicantTable handleAddApplicant={handleOpen} />
      </div>
    </Box >
    // <>
    // </>
  )
}

export default ApplicantList 