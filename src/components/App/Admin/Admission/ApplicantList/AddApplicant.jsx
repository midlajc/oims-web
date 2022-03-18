import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top:'5%',
    // marginBottom: 10,
    width: '90%',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function AddApplicant({ open, close }) {
    return (
        <div >
            <Modal
                style={{
                    display: 'flex',
                    justifyContent:'center',
                    overflow: "scroll"
                }}
                open={open}
                onClose={close}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography><Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default AddApplicant