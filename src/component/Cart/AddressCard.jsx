import React from 'react'
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import { Card } from '@mui/material';
import { Button } from '@mui/material';
export const AddressCard = ({ item, showButton, handleSelectAddress }) => {
    return (
        <Card className='flex gap-5 w-64 p-5'>
            <HomeWorkIcon />
            <div className='space-y-3 text-gray-500'>
                <h1 className='text-xl font-semibold text-white'>Home</h1>
                <p>Mumbai, new shivam building, gokuldham market, 50068, Maharastra, India</p>
                {showButton && (
                    <Button variant='outlined' fullWidth onclick={() => handleSelectAddress(item)}>select</Button>
                )}
            </div>
        </Card>
    )
}

