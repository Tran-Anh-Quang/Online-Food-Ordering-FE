import { Grid, Divider, Typography, FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material'
import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TodayIcon from '@mui/icons-material/Today';
import MenuCard from './MenuCard'

const categories = [
    "pizza",
    "burger",
    "chicken",
    "cake",
    "burito",
    "rolls"
]

const foodTypes = [
    { label: "All", value: "all" },
    { label: "Vegetarian only", value: "vegetarian" },
    { label: "Non-Vegetarian", value: "non_vegetarian" },
    { label: "Seasonal", value: "seasonal" }
]

const menu = [1,1,1,1,1,1,1]

const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("all")
    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name)
    }
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
                                    src="https://images.pexels.com/photos/1148565/pexels-photo-1148565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <div>
                                <img
                                    className='w-full h-[44vh] rounded-t-md object-cover'
                                    src="https://images.pexels.com/photos/887723/pexels-photo-887723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <div>
                                <img
                                    className='w-full h-[44vh] rounded-t-md object-cover'
                                    src="https://images.pexels.com/photos/3660229/pexels-photo-3660229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className='pt-3 pb-5'>
                    <h1 className='text-4xl font-semibold'> Indian Fast Food</h1>
                    <p className='text-gray-500 mt-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati dolores culpa excepturi nulla sit delectus porro, quo deleniti vero reiciendis molestias necessitatibus accusamus unde atque dolorem sapiente accusantium natus neque.</p>
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
                                Mon - Sun: 9:00 AM - 11:00 PM (Today)
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
                                    {categories.map((item) => (
                                        <FormControlLabel
                                            key={item}
                                            value={item}
                                            control={<Radio />}
                                            label={item}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                    {menu.map((item) => <MenuCard />)}
                </div>
            </section>
        </div>
    )
}

export default RestaurantDetails
