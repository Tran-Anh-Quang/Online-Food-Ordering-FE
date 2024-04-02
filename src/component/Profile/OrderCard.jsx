import React from 'react'
import { Card, Button } from '@mui/material';

export const OrderCard = () => {
    return (
        <Card className='flex justify-between items-center p-5'>
            <div className='flex items-center space-x-5'>
                <img
                    className='h-16 w-16'
                    src='https://images.pexels.com/photos/2983022/pexels-photo-2983022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt=''
                />
                <div>
                    <p>Burger</p>
                    <p>$399</p>
                </div>
            </div>
            <div>
                <Button desabled className='cursor-not-allowed'>
                    completed
                </Button>
            </div>
        </Card>
    )
}

