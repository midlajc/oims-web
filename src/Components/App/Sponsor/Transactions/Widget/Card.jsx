import CreditScoreIcon from '@mui/icons-material/CreditScore';
import { Card, Typography, Avatar } from '@mui/material'


const CardWidget = ({ data }) => {
    return (
        <Card sx={{
            display: 'flex', boxShadow: 1, margin: { xs: '2%', md: 1 },
            height: 80, width: { xs: '100%', md: 'auto' },
            justifyContent: 'space-between', alignItems: 'center'
        }}>
            <div
                style={{
                    height: '100%',
                    width: '4.5rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Avatar variant='rounded'
                    sx={{
                        background: '#c6f5d4',
                        color: '#1d6e35'
                    }}
                >
                    <CreditScoreIcon />
                </Avatar>
            </div>
            <div
                style={{
                    flexGrow: 1,
                    width: 'auto',
                    height: "100%",
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}
            >
                <Typography
                    variant="body2"
                >To : {data.student_name}</Typography>
                <Typography
                    variant="body2"
                >Date : {new Date(data.created_at).toLocaleDateString('en-GB')}</Typography>
            </div>
            <div
                style={{
                    width: '6rem',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}
            >
                <Typography
                    variant="button" display="block">
                    ₹{data.amount}
                </Typography>
            </div>
        </Card>
    )
}

export default CardWidget