import React, { useState, useEffect } from 'react'
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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import admissionService from '../../../../../service/admissionService';
import dataService from '../../../../../service/dataService';

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

    const [boardOfStudiesList, setBoardOfStudiesList] = useState([])
    const [standardsList, setStandardsList] = useState([])
    const [genderList, setGenderList] = useState([])
    const [studentTypeList, setStudentTypeList] = useState([])

    useEffect(async () => {
        setBoardOfStudiesList((await dataService.getBoardOfStudies()).data)
        setGenderList((await dataService.getGenders()).data)
        setStudentTypeList((await dataService.getStudentType()).data)
    }, [])

    //applicant basic details
    const [name, setName] = useState('');
    const [dob, setDob] = useState(null);
    const [gender, setGender] = useState('');
    const [standard, setStandard] = useState('');
    // const [age, setAge] = useState('');
    const [boardOfStudies, setBoardOfStudies] = useState('');
    const [studentType, setStudentType] = useState('');

    //applicant father details
    const [fatherName, setFatherName] = useState('');
    const [fatherEd, setFatherEd] = useState('');
    const [fatherResiAddress, setFatherResiAddress] = useState('');
    const [fatherPin, setFatherPin] = useState('');
    const [fatherMobile, setFatherMobile] = useState('');
    const [fatherOfficeAddress, setFatherOfficeAddress] = useState('');
    const [fatherEmail, setFatherEmail] = useState('');

    //applicant mother details
    const [motherName, setMotherName] = useState('');
    const [motherEd, setMotherEd] = useState('');
    const [motherResiAddress, setMotherResiAddress] = useState('');
    const [motherPin, setMotherPin] = useState('');
    const [motherMobile, setMotherMobile] = useState('');
    const [motherOfficeAddress, setMotherOfficeAddress] = useState('');
    const [motherEmail, setMotherEmail] = useState('');

    //applicant guardian details
    const [guardianName, setGuardianName] = useState('');
    const [guardianEd, setGuardianEd] = useState('');
    const [guardianResiAddress, setGuardianResiAddress] = useState('');
    const [guardianPin, setGuardianPin] = useState('');
    const [guardianMobile, setGuardianMobile] = useState('');
    const [guardianOfficeAddress, setGuardianOfficeAddress] = useState('');
    const [guardianEmail, setGuardianEmail] = useState('');

    //other details
    const [emergencyContact, setEmergencyContact] = useState('')
    const [emergencyContactAddress, setEmergencyContactAddress] = useState('')
    const [pickupMethod, setPickupMethod] = useState(null)
    const [pickupInfo, setPickupInfo] = useState('')
    const [allergies, setAllergies] = useState('')
    const [bloodGroup, setBloodGroup] = useState('')
    const [medicalCondition, setMedicalCondition] = useState(null)
    const [medicalDetails, setMedicalDetails] = useState('')
    const [doctorName, setDoctorName] = useState('')
    const [doctorMobile, setDoctorMobile] = useState('')
    const [doctorEmail, setDoctorEmail] = useState('')

    let applicant_details = {
        name,
        dob,
        gender,
        boardOfStudies,
        standard,
        studentType,

        fatherName,
        fatherEd,
        fatherResiAddress,
        fatherPin,
        fatherMobile,
        fatherOfficeAddress,
        fatherEmail,

        motherName,
        motherEd,
        motherResiAddress,
        motherPin,
        motherMobile,
        motherOfficeAddress,
        motherEmail,

        guardianName,
        guardianEd,
        guardianResiAddress,
        guardianPin,
        guardianMobile,
        guardianOfficeAddress,
        guardianEmail,

        emergencyContact,
        emergencyContactAddress,
        pickupMethod,
        pickupInfo,
        allergies,
        bloodGroup,
        medicalCondition,
        medicalDetails,
        doctorName,
        doctorMobile,
        doctorEmail
    }

    const handleBoardOfStudiesChange = async (newVal) => {
        setBoardOfStudies(newVal.target.value)
        setStandardsList((await dataService.getStandards(newVal.target.value)).data)
    }

    const handleClick = () => {
        setLoading(preVal => !preVal)
        admissionService.addApplicant(applicant_details).then(res => {
            console.log(res);
            setLoading(preVal => !preVal)
        })
    }

    const clearFields = () => {
        setDob(null)
        setName('')
        setGender('')
        setStandard('')
        setBoardOfStudies('')
        setStudentType('')
        setFatherEd('')
        setFatherEmail('')
        setFatherMobile('')
        setFatherName('')
        setFatherOfficeAddress('')
        setFatherPin('')
        setFatherResiAddress('')
        setMotherEd('')
        setMotherEmail('')
        setMotherMobile('')
        setMotherName('')
        setMotherOfficeAddress('')
        setMotherPin('')
        setMotherResiAddress('')
        setGuardianEd('')
        setGuardianEmail('')
        setGuardianMobile('')
        setGuardianName('')
        setGuardianOfficeAddress('')
        setGuardianPin('')
        setGuardianResiAddress('')
        setEmergencyContact('')
        setEmergencyContactAddress('')
        setPickupInfo('')
        setPickupMethod(null)
        setAllergies('')
        setBloodGroup('')
        setMedicalCondition(null)
        setMedicalDetails('')
        setDoctorName('')
        setDoctorMobile('')
        setDoctorEmail('')

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
                                                {
                                                    genderList.map((value, key) => {
                                                        return (
                                                            <MenuItem key={key} value={value._id}>{value.name}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
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
                                            <InputLabel id="">Student Type*</InputLabel>
                                            <Select
                                                value={studentType}
                                                fullWidth
                                                size='small'
                                                onChange={(newVal) => setStudentType(newVal.target.value)}
                                                id=""
                                            >
                                                {
                                                    studentTypeList.map((value, key) => {
                                                        return (
                                                            <MenuItem key={key} value={value._id}>{value.name}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <InputLabel id="">Board of Studies *</InputLabel>
                                            <Select
                                                value={boardOfStudies}
                                                fullWidth
                                                size='small'
                                                onChange={handleBoardOfStudiesChange}
                                                id=""
                                            >
                                                {
                                                    boardOfStudiesList.map((value, key) => {
                                                        return (
                                                            <MenuItem key={key} value={value._id}>{value.name}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <InputLabel id="">Class*</InputLabel>
                                            <Select
                                                value={standard}
                                                fullWidth
                                                size='small'
                                                onChange={(newVal) => setStandard(newVal.target.value)}
                                                id=""
                                            >
                                                {
                                                    standardsList.map((value, key) => {
                                                        return (
                                                            <MenuItem key={key} value={value._id}>{value.name}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </Grid>
                                        {/* <Grid item xs={12} md={3}>
                                            <InputLabel id="">Boarder Type*</InputLabel>
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
                                    <Grid item xs={12} md={6}>
                                        <Grid container spacing={1}>
                                            <Typography sx={{ marginLeft: 1 }}>Father</Typography>
                                            <Grid item xs={12}>
                                                <InputLabel id="">Name *</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    value={fatherName}
                                                    onChange={(newVal) => setFatherName(newVal.target.value)}
                                                    size='small'
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <InputLabel id="">Edn. Qualification *</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    value={fatherEd}
                                                    onChange={(newVal) => setFatherEd(newVal.target.value)}
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
                                                    value={fatherResiAddress}
                                                    onChange={(newVal) => setFatherResiAddress(newVal.target.value)}
                                                    size='small'
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <InputLabel id="">Pin *</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    value={fatherPin}
                                                    onChange={(newVal) => setFatherPin(newVal.target.value)}
                                                    size='small'
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <InputLabel id="">Mobile No *</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    type={'number'}
                                                    value={fatherMobile}
                                                    onChange={(newVal) => setFatherMobile(newVal.target.value)}
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
                                                    value={fatherOfficeAddress}
                                                    onChange={(newVal) => setFatherOfficeAddress(newVal.target.value)}
                                                    size='small'
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <InputLabel id="">Email</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    value={fatherEmail}
                                                    onChange={(newVal) => setFatherEmail(newVal.target.value)}
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
                                                    value={motherName}
                                                    onChange={(newVal) => setMotherName(newVal.target.value)}
                                                    size='small'
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <InputLabel id="">Edn. Qualification *</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    value={motherEd}
                                                    onChange={(newVal) => setMotherEd(newVal.target.value)}
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
                                                    value={motherResiAddress}
                                                    onChange={(newVal) => setMotherResiAddress(newVal.target.value)}
                                                    size='small'
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <InputLabel id="">Pin *</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    value={motherPin}
                                                    onChange={(newVal) => setMotherPin(newVal.target.value)}
                                                    size='small'
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <InputLabel id="">Mobile No *</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    type={'number'}
                                                    value={motherMobile}
                                                    onChange={(newVal) => setMotherMobile(newVal.target.value)}
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
                                                    value={motherOfficeAddress}
                                                    onChange={(newVal) => setMotherOfficeAddress(newVal.target.value)}
                                                    size='small'
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <InputLabel id="">Email</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    value={motherEmail}
                                                    onChange={(newVal) => setMotherEmail(newVal.target.value)}
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
                                <Typography>Guardian Details</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} md={6}>
                                        <InputLabel id="">Name *</InputLabel>
                                        <TextField
                                            fullWidth
                                            value={guardianName}
                                            onChange={(newVal) => setGuardianName(newVal.target.value)}
                                            size='small'
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <InputLabel id="">Edn. Qualification *</InputLabel>
                                        <TextField
                                            fullWidth
                                            value={guardianEd}
                                            onChange={(newVal) => setGuardianEd(newVal.target.value)}
                                            size='small'
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <InputLabel id="">Residence Address *</InputLabel>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={3}
                                            value={guardianResiAddress}
                                            onChange={(newVal) => setGuardianResiAddress(newVal.target.value)}
                                            size='small'
                                            variant="outlined"
                                        />
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <InputLabel id="">Office Address</InputLabel>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={3}
                                            value={guardianOfficeAddress}
                                            onChange={(newVal) => setGuardianOfficeAddress(newVal.target.value)}
                                            size='small'
                                            variant="outlined"
                                        />
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <InputLabel id="">Pin *</InputLabel>
                                        <TextField
                                            fullWidth
                                            value={guardianPin}
                                            onChange={(newVal) => setGuardianPin(newVal.target.value)}
                                            size='small'
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <InputLabel id="">Mobile No *</InputLabel>
                                        <TextField
                                            fullWidth
                                            type={'number'}
                                            value={guardianMobile}
                                            onChange={(newVal) => setGuardianMobile(newVal.target.value)}
                                            size='small'
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <InputLabel id="">Email</InputLabel>
                                        <TextField
                                            fullWidth
                                            value={guardianEmail}
                                            onChange={(newVal) => setGuardianEmail(newVal.target.value)}
                                            size='small'
                                            variant="outlined"
                                        />
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
                                <Typography>Other Details</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} md={12}>
                                        <InputLabel id="">Emergency Contact Nos</InputLabel>
                                        <TextField
                                            fullWidth
                                            value={emergencyContact}
                                            onChange={(newVal) => setEmergencyContact(newVal.target.value)}
                                            size='small'
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <InputLabel id="" sx={{ marginTop: 1 }}>Address of Correspondence</InputLabel>
                                        <TextField
                                            sx={{ marginTop: 1 }}
                                            fullWidth
                                            multiline
                                            rows={3}
                                            value={emergencyContactAddress}
                                            onChange={(newVal) => setEmergencyContactAddress(newVal.target.value)}
                                            size='small'
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <InputLabel id="">How would you want your child to go to his/her home/guardian's home?</InputLabel>
                                        <FormControl>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                onChange={(newVal) => { setPickupMethod(newVal.target.value) }}
                                                name="pickupMethod"
                                                defaultValue={pickupMethod}
                                            >
                                                <FormControlLabel value="1" control={<Radio />} label="Parents/guardian will escort them" />
                                                <FormControlLabel value="2" control={<Radio />} label="School Bus" />
                                                <FormControlLabel value="3" control={<Radio />} label="Other" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        {
                                            (pickupMethod === '2') ? (<><InputLabel id="">Alight/Pick up pont:</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    multiline
                                                    value={pickupInfo}
                                                    onChange={(newVal) => setPickupInfo(newVal.target.value)}
                                                    size='small'
                                                    variant="outlined"
                                                /></>) : (<></>)
                                        }
                                        {
                                            (pickupMethod === '3') ? (<><InputLabel id="">Please Specify</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    multiline
                                                    rows={3}
                                                    value={pickupInfo}
                                                    onChange={(newVal) => setPickupInfo(newVal.target.value)}
                                                    size='small'
                                                    variant="outlined"
                                                />
                                                <Typography variant="caption" display="block" gutterBottom>
                                                    Please provide letter of the authorization and photograph of the person
                                                </Typography>
                                            </>) : (<></>)
                                        }
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <InputLabel id="">Blood Group *</InputLabel>
                                        <TextField
                                            fullWidth
                                            value={bloodGroup}
                                            onChange={(newVal) => setBloodGroup(newVal.target.value)}
                                            size='small'
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <InputLabel id="">Allergies *</InputLabel>
                                        <TextField
                                            fullWidth
                                            value={allergies}
                                            onChange={(newVal) => setAllergies(newVal.target.value)}
                                            size='small'
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <InputLabel id="">Is there is any other medical condition which the school/hostel authorities should know of ?</InputLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            onChange={(newVal) => setMedicalCondition(newVal.target.value)}
                                            name="medicalCondition"
                                            defaultValue={medicalCondition}
                                        >
                                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                            <FormControlLabel value="no" control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        {
                                            (medicalCondition === 'yes') ? (
                                                <Grid container spacing={1}>
                                                    <Grid item xs={12} md={6}>
                                                        <InputLabel id="">Give Details</InputLabel>
                                                        <TextField
                                                            fullWidth
                                                            multiline
                                                            rows={6}
                                                            value={medicalDetails}
                                                            onChange={(newVal) => setMedicalDetails(newVal.target.value)}
                                                            size='small'
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <InputLabel id="">Name of family doctor</InputLabel>
                                                        <TextField
                                                            fullWidth
                                                            multiline
                                                            value={doctorName}
                                                            onChange={(newVal) => setDoctorName(newVal.target.value)}
                                                            size='small'
                                                            variant="outlined"
                                                        />
                                                        <InputLabel id="">Phone No</InputLabel>
                                                        <TextField
                                                            fullWidth
                                                            multiline
                                                            value={doctorMobile}
                                                            onChange={(newVal) => setDoctorMobile(newVal.target.value)}
                                                            size='small'
                                                            variant="outlined"
                                                        />
                                                        <InputLabel id="">E-Mail</InputLabel>
                                                        <TextField
                                                            fullWidth
                                                            multiline
                                                            value={doctorEmail}
                                                            onChange={(newVal) => setDoctorEmail(newVal.target.value)}
                                                            size='small'
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                </Grid>
                                            ) : (<></>)
                                        }
                                    </Grid>

                                </Grid>
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