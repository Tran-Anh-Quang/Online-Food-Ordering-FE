import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import PaymentIcon from '@mui/icons-material/Payment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LogoutIcon from '@mui/icons-material/Logout';
import Drawer from '@mui/material/Drawer'
import useMediaQuery from '@mui/material/useMediaQuery';
import { Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom';


const menu = [
    {
        title: "Orders",
        icon: <ShoppingBagIcon />
    },
    {
        title: "Favorites",
        icon: <FavoriteIcon />
    },
    {
        title: "Address",
        icon: <HomeIcon />
    },
    {
        title: "Payments",
        icon: <PaymentIcon />
    },
    {
        title: "Notification",
        icon: <NotificationsActiveIcon />
    },
    {
        title: "Events",
        icon: <EventAvailableIcon />
    },
    {
        title: "Logout",
        icon: <LogoutIcon />
    }
]
export const ProfileNavigation = ({ open, handleClose }) => {
    const isSmallScreen = useMediaQuery('(max-width:900px)');
    const navigate = useNavigate();
    const handleNavigate = (item) => {
        navigate(`/my-profile/${item.title.toLowerCase()}`)
    }
    return (
        <div>
            <Drawer
                onClose={handleClose}
                open={isSmallScreen ? open : true}
                variant={isSmallScreen ? 'temporary' : 'permanent'}
                anchor="left"
                sx={{ zIndex: 1, position: 'sticky' }}
            >
                <div className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-8 pt-16'>
                    {menu.map((item, i) =>
                        <>
                            <div onClick={() => handleNavigate(item)} className='px-5 flex items-center space-x-5 cursor-pointer'>
                                {item.icon}
                                <span>{item.title}</span>
                            </div>
                            {i !== menu.length - 1 && <Divider />}
                        </>
                    )}
                </div>
            </Drawer>
        </div>
    )
}

