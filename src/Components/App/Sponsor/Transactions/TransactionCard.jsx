import { Card } from '@mui/material'
import React, { useState, useEffect } from 'react'
import sponsorService from '../../../../service/sponsorService'

const Widget = () => {
    return (
        <>
            hello
        </>
    )
}

function TransactionCard() {

    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        sponsorService.getTransactions().then(response => {
            setTransactions(response.data)
        })
    }, [])

    return (
        <Card
            sx={{
                height: '30rem', width: {
                    xs: '100rem',
                    md: '22rem'
                },
                overflow:'scroll',
                overflowX:'hidden'
                // width:'3rem'
            }}
        >
            {
                transactions.map((value, index) => {
                    return (
                        <h1>{index}</h1>
                        // <Widget key={index} data={value} />
                    )
                })
            }
        </Card>
    )
}

export default TransactionCard