import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    Grid,
    Typography,
    Box,
    IconButton,
    TextField,
    Alert
} from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Button } from '@mui/material';
import sponsorService from '../../../../service/sponsorService';
import logo from '../../../../asset/images/logo.png'
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { LoadingButton } from '@mui/lab';
import Snackbar from '@mui/material/Snackbar';


const style = {
    height: 'auto',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    padding: 1,
};


function PaymentModel({ user, dues, handlePaymentModelClose, paymentModalOpen, loading }) {

    const [pay, setPay] = useState()
    const [dAlert, setDAlert] = useState(false)
    const [toast, setToast] = useState({ status: false })

    useEffect(() => {
        setPay(dues.total_to_pay)
    }, [dues])

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    const displayRazorpay = async () => {

        loading.setLoading(true)

        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        // creating a new order
        const result = await sponsorService.createNewPayment(pay)

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        // Getting the order details back
        const { amount, id: order_id, currency, receipt } = result.data;

        const options = {
            key: process.env.RAZORPAY_KEY_ID,
            amount: amount.toString(),
            currency: currency,
            name: "Wayanad Muslim Orphanage",
            description: "Sponsorship Payment",
            image: { logo },
            order_id: order_id,
            handler: async function (response) {
                sponsorService.verifyPayment({
                    receiptId: receipt,
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                }).then(response => {
                    console.log(response.data);
                    loading.setLoading(false)
                    handlePaymentModelClose()
                    setToast({
                        status: true,
                        message: "Payment Successful",
                        severity: 'success',
                        handleClose: () => {
                            setToast({ status: false })
                        }
                    })
                }).catch((err) => {
                    console.log(err);
                    loading.setLoading(false)
                    handlePaymentModelClose()
                    setToast({
                        status: true,
                        message: "Payment Failed",
                        severity: 'error',
                        handleClose: () => {
                            setToast({ status: false })
                        }
                    })
                })
            },
            prefill: {
                name: user.name,
                email: user.email,
                contact: user.mobile,
            },
            theme: {
                color: "#000000",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    const handleAmountChange = (newValue) => {
        if (newValue.target.value > dues.total_to_pay) {
            setDAlert(true)
        }
        else {
            setDAlert(false)
            setPay(newValue.target.value)
        }
    }
    return (
        <>
            <Modal
                open={paymentModalOpen}
                onClose={handlePaymentModelClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        display: 'flex',
                        justifyContent: 'center',
                        height: '100vh',
                        width: '100%',
                        alignItems: 'center'
                    }}
                >
                    <Box sx={style}>
                        <Box
                            sx={{
                                position: 'relative',
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }}
                        >
                            <IconButton
                                onClick={handlePaymentModelClose}
                            ><CloseIcon /></IconButton>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: 1,
                                gap: '.8rem'
                            }}
                        >
                            {
                                (dAlert) ?
                                    <Alert severity="error">
                                        can't pay more than {dues.total_to_pay}
                                    </Alert>
                                    : ''
                            }
                            <TextField
                                label="Enter Amount"
                                type={'number'}
                                id="outlined-size-small"
                                value={pay}
                                size="small"
                                onChange={handleAmountChange}
                                fullWidth
                            />
                            <LoadingButton
                                fullWidth
                                size='small'
                                variant='contained'
                                loading={loading.loading}
                                onClick={displayRazorpay}
                            >Pay</LoadingButton>
                        </Box>
                    </Box>
                </Box>
            </Modal>
            <Snackbar open={toast.status}
                autoHideDuration={2000} onClose={toast.handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                sx={{ bottom: { xs: 90, sm: 0 } }}
            >
                <Alert onClose={toast.handleClose} severity={toast.severity} sx={{ width: 'auto' }}>
                    {toast.message}
                </Alert>
            </Snackbar>
        </>
    )
}

function PaymentCard(props) {
    const [dues, setDues] = useState({})
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    const [toast, setToast] = useState({ status: false })

    const [paymentModalOpen, setPaymentModalOpen] = useState(false);
    const handlePaymentModelOpen = () => {
        if (dues.total_to_pay == 0) {
            setToast({
                status: true,
                message: "You dont have any due",
                severity: 'warning',
                handleClose: () => {
                    setToast({ status: false })
                }
            })
            return;
        }
        setPaymentModalOpen(true)
    };
    const handlePaymentModelClose = () => {
        setPaymentModalOpen(false)
        setLoading(false)
    };

    useEffect(() => {
        sponsorService.getDues().then((dues) => {
            setDues(dues.data[0])
        })
        sponsorService.getProfile().then(user => {
            setUser(user.data)
        })
    }, [loading])

    return (
        <>
            <PaymentModel
                paymentModalOpen={paymentModalOpen}
                handlePaymentModelClose={handlePaymentModelClose}
                user={user}
                dues={dues}
                loading={{ loading, setLoading }}
            />
            <Card
                sx={{
                    height: '100%', width: {
                        xs: '100rem',
                        md: '22rem'
                    },
                }}
                {...props}
            >
                <CardContent>
                    <Grid
                        container
                        spacing={3}
                        sx={{ justifyContent: 'space-between' }}
                    >
                        <Grid item>
                            <Typography
                                color="textSecondary"
                                gutterBottom
                                variant="overline"
                            >
                                Outstanding
                            </Typography>
                            <Typography
                                color="textPrimary"
                                variant="h4"
                            >
                                <CurrencyRupeeIcon />{dues.total_to_pay}
                            </Typography>
                        </Grid>
                        <Grid
                            sx={{
                                // pt: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                                justifyContent: 'space-between',
                                gap: '.5rem'
                            }}
                            item>
                            <Button
                                variant="outlined"
                                color='success'
                                onClick={handlePaymentModelOpen}
                            >
                                Pay
                            </Button>
                            <Typography
                                color="textSecondary"
                                variant="caption"
                            >
                                Current Due: {dues.current_to_pay}₹
                            </Typography>
                            <Typography
                                color="textSecondary"
                                variant="caption"
                            >
                                Previous Due: {dues.previous_to_pay}₹
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Snackbar open={toast.status}
                autoHideDuration={1000} onClose={toast.handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                sx={{ bottom: { xs: 90, sm: 0 } }}
            >
                <Alert onClose={toast.handleClose} severity={toast.severity} sx={{ width: 'auto' }}>
                    {toast.message}
                </Alert>
            </Snackbar>
        </>
    )
}

export default PaymentCard
