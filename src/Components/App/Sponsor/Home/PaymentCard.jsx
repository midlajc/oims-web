import React, { useEffect, useState } from 'react'
import { Card, CardContent, Grid, Typography } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Button } from '@mui/material';
import sponsorService from '../../../../service/sponsorService';

function PaymentCard(props) {
    const [dues, setDues] = useState({})

    useEffect(() => {
        sponsorService.getDues().then((dues) => {
            setDues(dues.data[0])
        })
    }, [])

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
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        // creating a new order
        const result = await sponsorService.createNewPayment(dues.total_to_pay)

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        console.log(result);

        // Getting the order details back
        const { amount, id: order_id, currency } = result.data;

        const options = {
            key: process.env.RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Wayanad Muslim Orphanage",
            description: "Test Transaction",
            // image: { logo },
            order_id: order_id,
            handler: async function (response) {
                // const data = {
                //     orderCreationId: order_id,
                //     razorpayPaymentId: response.razorpay_payment_id,
                //     razorpayOrderId: response.razorpay_order_id,
                //     razorpaySignature: response.razorpay_signature,
                // };

                // const result = await axios.post("http://localhost:5000/payment/success", data);

                alert(result.data.msg);
            },
            prefill: {
                name: "Soumya Dey",
                email: "SoumyaDey@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Soumya Dey Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return (
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
                            onClick={displayRazorpay}
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
    )
}

export default PaymentCard
