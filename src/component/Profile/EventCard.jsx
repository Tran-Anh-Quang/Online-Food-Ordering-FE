import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const EventCard = () => {
    return (
        <div>
            <Card sx={{ width: 345 }}>
                <CardMedia
                    sx={{ height: 345 }}
                    image="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <CardContent>
                    <Typography variant='h5'>
                        Indian Food
                    </Typography>
                    <Typography variant='body2'>
                        50% off on your first order
                    </Typography>
                    <div className='py-2 space-y-2'>
                        <p>{"mumbai"}</p>
                        <p className='text-sm text-blue-500'>February 14, 2024 12:AM</p>
                        <p className='text-sm text-red-500'>February 15, 2024 12:AM</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default EventCard
