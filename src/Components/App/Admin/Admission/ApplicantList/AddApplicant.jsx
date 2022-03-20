import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { LoadingButton } from '@mui/lab';

const style = {
    position: 'absolute',
    top: '5%',
    width: '90%',
    bgcolor: 'background.paper',
    boxShadow: 10,
    p: 4,
};

function AddApplicant({ open, close }) {

    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(preVal => !preVal)
    }

    return (
        <div >
            <Modal
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    overflow: "scroll"
                }}
                open={open}
                onClose={close}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Button color='inherit' sx={{ float: 'right' }} onClick={close}>
                        <CloseIcon sx={{ width: 15 }} />
                    </Button>
                    <Typography sx={{
                        marginBottom: 3
                    }} id="modal-modal-title" variant="h5" component="h2">
                        ADD APPLICANT
                    </Typography>
                    <div style={{ marginBottom: '1rem' }}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Accordion 1</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Accordion 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography>Disabled Accordion</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div style={{ float: 'right' }}>
                        <LoadingButton
                            onClick={handleClick}
                            loading={loading}
                            variant="contained"
                        >
                            Add
                        </LoadingButton>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default AddApplicant