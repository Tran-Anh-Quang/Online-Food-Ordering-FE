import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


const demo = [
    {
        category: "Nuts & seeds",
        ingredients: ["Cashews"]
    },
    {
        category: "Protein",
        ingredients: ["Protein", "Bacon strips"]
    },
]

const MenuCard = ({ item }) => {
    const handleCheckBoxChange = (value) => {
        console.log("value")
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
                <form>
                    <div className='flex gap-5 flex-wrap'>
                        {
                            demo.map((item) =>
                                <div>
                                    <p>{item.category}</p>
                                    <FormGroup>
                                        {item.ingredients.map((item) => <FormControlLabel
                                            control={<Checkbox onChange={() => handleCheckBoxChange(item)} />} label={item} />)}                                   <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                                    </FormGroup>
                                </div>
                            )
                        }
                    </div>
                    <div className='pt-5'>
                        <Button variant='contained' disabled={false} type='submit'>{true ? 'Add to Cart' : 'Out of Stock'}</Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion>
    )
}

export default MenuCard
