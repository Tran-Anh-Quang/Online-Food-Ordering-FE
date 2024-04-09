import { Grid, Divider, Typography, FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TodayIcon from '@mui/icons-material/Today';
import MenuCard from './MenuCard'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantById, getRestaurantCategory } from '../State/Restaurant/Action';
import { getMenuItemsByRestaurantId } from '../State/Menu/Action';

const foodTypes = [
    { label: "All", value: "all" },
    { label: "Vegetarian only", value: "vegetarian" },
    { label: "Non-Vegetarian", value: "non_vegetarian" },
    { label: "Seasonal", value: "seasonal" }
]

const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("all")
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem('jwt');
    const { auth, restaurant, menu } = useSelector((store) => store);
    const { id, city } = useParams();
    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name)
    }

    useEffect(() => {
        dispatch(getRestaurantById({ jwt, restaurantId: id }))
        dispatch(getRestaurantCategory({ jwt, restaurantId: id }))
        dispatch(getMenuItemsByRestaurantId(
            {
                jwt,
                restaurantId: id,
                isVegetarian: false,
                isSeasonal: false,
                isNonVegetarian: false,
                foodCategory: ''
            }
        ))
    }, [dispatch, jwt, id])

    return (
        <div className='px-5 lg:px-20'>
            <section>
                <h3 className='text-gray-500 py-2 mt-8'>Home/india/indian fast food/3</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <div>
                                <img
                                    className='w-full h-[44vh] rounded-t-md object-cover'
                                    src={restaurant.restaurant?.images[0]} alt="" />
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <div>
                                <img
                                    className='w-full h-[44vh] rounded-t-md object-cover'
                                    src={restaurant.restaurant?.images[1]} alt="" />
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <div>
                                <img
                                    className='w-full h-[44vh] rounded-t-md object-cover'
                                    src={restaurant.restaurant?.images[2]} alt="" />
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className='pt-3 pb-5'>
                    <h1 className='text-4xl font-semibold'> {restaurant.restaurant?.name}</h1>
                    <p className='text-gray-500 mt-1'>{restaurant.restaurant?.description}</p>
                    <div className='space-y-3 mt-3'>
                        <p className='text-gray-500 flex items-center gap-3'>
                            <LocationOnIcon />
                            <span>
                                Mumbai, Maharstra
                            </span>
                        </p>
                        <p className='text-gray-500 flex items-center gap-3'>
                            <TodayIcon />
                            <span>
                                {restaurant.restaurant?.openingHours}
                            </span>
                        </p>
                    </div>

                </div>

            </section>

            <Divider />

            <section className='pt-[2rem] lg:flex relative'>
                <div className='space-y-10 lg:w-[20%] filter'>
                    <div className='box space-y-5 lg:sticky top-28 p-5 shadow-md'>
                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: '1rem' }} >
                                Food Type
                            </Typography>
                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name='food_type' value={foodTypes}>
                                    {foodTypes.map((item) => (
                                        <FormControlLabel
                                            key={item.value}
                                            value={item.value}
                                            control={<Radio />}
                                            label={item.label}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>

                        <Divider />

                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: '1rem' }} >
                                Food Category
                            </Typography>
                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name='food_type' value={foodTypes}>
                                    {restaurant.categories.map((item) => (
                                        <FormControlLabel
                                            key={item}
                                            value={item}
                                            control={<Radio />}
                                            label={item.name}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                    {menu.menuItems.map((item) => <MenuCard item={item} />)}
                </div>
            </section>
        </div>
    )
}

export default RestaurantDetails
