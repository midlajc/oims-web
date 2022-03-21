import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Button, TextField } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { LoadingButton } from '@mui/lab';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';


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

    const [name, setName] = useState('');
    const [dob, setDob] = useState(null);
    const [gender, setGender] = useState('');
    const [standard, setStandard] = useState('');
    const [age, setAge] = useState('');
    const [boardOfStudies, setBoardOfStudies] = useState('');
    const [studentType, setStudentType] = useState('');
    // let primary_details={
    //     name
    // }

    const handleClick = () => {
        setLoading(preVal => !preVal)
    }

    const clearFields = () => {
        setDob(null)
        setName('')
        setGender('')
        setStandard('')
        setAge('')
        setBoardOfStudies('')
        setStudentType('')
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
                        <CloseIcon sx={{ width: 1 }} />
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
                            >
                                <Typography>Primary Details</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Container sx={{
                                    marginBottom: 3
                                }}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12} md={6}>
                                            <InputLabel id="">Name *</InputLabel>
                                            <TextField
                                                fullWidth
                                                value={name}
                                                onChange={(newVal) => setName(newVal.target.value)}
                                                size='small'
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <InputLabel id="">Gender*</InputLabel>
                                            <Select
                                                value={gender}
                                                fullWidth
                                                size='small'
                                                onChange={(newVal) => setGender(newVal.target.value)}
                                                id=""
                                            >
                                                <MenuItem value={1}>Male</MenuItem>
                                                <MenuItem value={2}>Female</MenuItem>
                                                <MenuItem value={3}>Other</MenuItem>
                                            </Select>
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <InputLabel id="">Age *</InputLabel>
                                            <TextField
                                                fullWidth
                                                size='small'
                                                type={'number'}
                                                value={age}
                                                onChange={(newVal) => setAge(newVal.target.value)}
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
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
                                        <Grid item xs={12} md={3}>
                                            <InputLabel id="ageLabel">Student Type*</InputLabel>
                                            <Select
                                                value={studentType}
                                                fullWidth
                                                size='small'
                                                onChange={(newVal) => setStudentType(newVal.target.value)}
                                                id=""
                                            >
                                                <MenuItem value={1}>Orphan</MenuItem>
                                                <MenuItem value={2}>Destitute</MenuItem>
                                                <MenuItem value={3}>Higher Studies</MenuItem>
                                            </Select>
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <InputLabel id="ageLabel">Board of Studies *</InputLabel>
                                            <Select
                                                value={boardOfStudies}
                                                fullWidth
                                                size='small'
                                                onChange={(newVal) => setBoardOfStudies(newVal.target.value)}
                                                id=""
                                            >
                                                <MenuItem value={'cbse'}>CBSE</MenuItem>
                                                <MenuItem value={'hse'}>HSE</MenuItem>
                                            </Select>
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <InputLabel id="ageLabel">Class*</InputLabel>
                                            <Select
                                                value={standard}
                                                fullWidth
                                                size='small'
                                                onChange={(newVal) => setStandard(newVal.target.value)}
                                                id=""
                                            >
                                                <MenuItem value={1}>Standard 1</MenuItem>
                                                <MenuItem value={2}>Standard 2</MenuItem>
                                                <MenuItem value={3}>Standard 3</MenuItem>
                                            </Select>
                                        </Grid>
                                        {/* <Grid item xs={12} md={3}>
                                            <InputLabel id="ageLabel">Boarder Type*</InputLabel>
                                            <Select
                                                value={border}
                                                fullWidth
                                                size='small'
                                                onChange={(newVal) => setBorder(newVal.target.value)}
                                                id=""
                                            >
                                                <MenuItem value={'week'}>Week Day</MenuItem>
                                                <MenuItem value={'full'}>Full Day</MenuItem>
                                            </Select>
                                        </Grid> */}
                                    </Grid>
                                </Container>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography>Parent Details</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={4}>
                                    <Grid item xs={3} md={6}>
                                        <Grid container spacing={1}>
                                            <Typography sx={{ marginLeft: 1 }}>Father</Typography>
                                            <Grid item xs={12}>
                                                <InputLabel id="">Name *</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    // value={name}
                                                    // onChange={(newVal) => setName(newVal.target.value)}
                                                    size='small'
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <InputLabel id="">Edn. Qualification *</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    // value={name}
                                                    // onChange={(newVal) => setName(newVal.target.value)}
                                                    size='small'
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <InputLabel id="">Residence Address *</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    multiline
                                                    rows={3}
                                                    // value={name}
                                                    // onChange={(newVal) => setName(newVal.target.value)}
                                                    size='small'
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <InputLabel id="">Pin *</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    // value={name}
                                                    // onChange={(newVal) => setName(newVal.target.value)}
                                                    size='small'
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <InputLabel id="">Mobile No *</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    type={'number'}
                                                    // value={name}
                                                    // onChange={(newVal) => setName(newVal.target.value)}
                                                    size='small'
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <InputLabel id="">Office Address</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    multiline
                                                    rows={3}
                                                    // value={name}
                                                    // onChange={(newVal) => setName(newVal.target.value)}
                                                    size='small'
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <InputLabel id="">Email</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    // value={name}
                                                    // onChange={(newVal) => setName(newVal.target.value)}
                                                    size='small'
                                                    variant="outlined"
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Grid container spacing={1}>
                                            <Typography sx={{ marginLeft: 1 }}>Mother</Typography>
                                            <Grid item xs={12}>
                                                <InputLabel id="">Name *</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    // value={name}
                                                    // onChange={(newVal) => setName(newVal.target.value)}
                                                    size='small'
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <InputLabel id="">Edn. Qualification *</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    // value={name}
                                                    // onChange={(newVal) => setName(newVal.target.value)}
                                                    size='small'
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <InputLabel id="">Residence Address *</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    multiline
                                                    rows={3}
                                                    // value={name}
                                                    // onChange={(newVal) => setName(newVal.target.value)}
                                                    size='small'
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <InputLabel id="">Pin *</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    // value={name}
                                                    // onChange={(newVal) => setName(newVal.target.value)}
                                                    size='small'
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <InputLabel id="">Mobile No *</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    type={'number'}
                                                    // value={name}
                                                    // onChange={(newVal) => setName(newVal.target.value)}
                                                    size='small'
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <InputLabel id="">Office Address</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    multiline
                                                    rows={3}
                                                    // value={name}
                                                    // onChange={(newVal) => setName(newVal.target.value)}
                                                    size='small'
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <InputLabel id="">Email</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    // value={name}
                                                    // onChange={(newVal) => setName(newVal.target.value)}
                                                    size='small'
                                                    variant="outlined"
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
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
                        <Button
                            variant='contained'
                            color='error'
                            sx={{
                                marginRight: 1
                            }}
                            onClick={clearFields}
                        >
                            Clear
                        </Button>
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
        </div >
    )
}

export default AddApplicant