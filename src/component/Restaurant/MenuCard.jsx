import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { categorizeIngredients } from '../../utils/CategorizeIngredients';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../State/Cart/Action';

const MenuCard = ({ item }) => {

    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const dispatch = useDispatch();

    const handleAddToCart = (e) => {
        e.preventDefault();
        const request = {
            token: localStorage.getItem('jwt'),
            cartItem: {
                foodId: item.id,
                quantity: 1,
                ingredients: selectedIngredients,
            },
        };
        dispatch(addItemToCart(request));
    };

    const handleCheckBoxChange = (itemName) => {
        if (selectedIngredients.includes(itemName)) {
            setSelectedIngredients(selectedIngredients.filter((item) => item !== itemName))
        } else {
            setSelectedIngredients([...selectedIngredients, itemName])
        }
    }
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <div className='lg:flex justify-between items-center'>
                    <div className='lg:flex items-center lg:gap-5'>
                        <img
                            className='w-[7rem] h-[7rem] object-cover'
                            src={item.images[0]}
                            alt=""
                        />
                    </div>
                    <div className='space-y-1 lg:space-y-5 lg:max-w-2xl lg:pl-5'>
                        <p className='text-xl font-semibold'>{item.name}</p>
                        <p>${item.price}</p>
                        <p className='text-gray-400'>{item.description}</p>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form onSubmit={handleAddToCart}>
                    <div className='flex gap-5 flex-wrap'>
                        {
                            Object.keys(categorizeIngredients(item.ingredients)).map((category) =>
                                <div>
                                    <p>{category}</p>
                                    <FormGroup>
                                        {categorizeIngredients(item.ingredients)[category].map(
                                            (item) =>
                                                <FormControlLabel
                                                    key={item.id}
                                                    control={<Checkbox onChange={() => handleCheckBoxChange(item.name)} />}
                                                    label={item.name}
                                                />
                                        )}
                                    </FormGroup>
                                </div>
                            )
                        }
                    </div>
                    <div className='pt-5'>
                        <Button
                            variant='contained'
                            disabled={false}
                            type='submit'>{true ? 'Add to Cart' : 'Out of Stock'}
                        </Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion>
    )
}

export default MenuCard
