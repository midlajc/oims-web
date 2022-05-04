import { Card } from '@mui/material'
import React, { useState, useEffect } from 'react'
import sponsorService from '../../../../service/sponsorService'
import CardWidget from './Widget/Card'


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
                maxHeight: '80vh',
                height: 'auto',
                width: {
                    xs: '100rem',
                    md: '22rem'
                },
                overflowY: 'scroll',
                padding: 1
            }}
        >
            {
                transactions.map((value, index) => {
                    return (
                        <CardWidget key={index} data={value} />
                    )
                })
            }
        </Card>
    )
}

export default TransactionCard