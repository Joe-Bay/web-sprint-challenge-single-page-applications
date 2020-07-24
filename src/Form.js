// form here
import React from 'react'

export default function Form() {



    const onCheckboxChange = evt => {
        
    }

    const onInputChange = evt => {

    }


    return (
        <div className='form-container'>
            <h2> Build your Own Pizza</h2>
            {/* possible image here if i get time */}
            <div className='size-section'>
                <h3>Build your Own Pizza</h3>
                <h4>Choice of size</h4>
                <p>Required</p> {/* possible error message supposed to be here */}
                <select name='size'>
                    <option value=''>Select a Size</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
                </div>
                <div className='sauce-container'>
                    <h4>Choice of Sauce</h4>
                    <p>Required</p> {/* possible error message */}
                    <input 
                        type='radio'
                        name='original'
                        value='original'
                    
                    /><br />
                    <input 
                        type='radio'
                        name='garlicRanch'
                        value='garlicRanch'
                    
                    /><br />
                    <input 
                        type='radio'
                        name='BBQsauce'
                        value='BBQsauce'
                    
                    /><br />
                    <input 
                        type='radio'
                        name='spinachAlfredo'
                        value='spinachAlfredo'
                    /><br />
                </div>
                <div className='topping-selection'>
                    <label>Pepperoni
                        <input 
                        type='checkbox'
                        name='pepperoni'
                        // checked={values.toppings.pepperoni ===true}
                        />
                    </label>
                    <label>Olives
                        <input 
                        type='checkbox'
                        name='olives'
                        // checked={values.toppings.olives ===true}
                        />
                    </label>
                    <label>Sausage
                        <input 
                        type='checkbox'
                        name='sausage'
                        // checked={values.toppings.sausage ===true}
                        />
                    </label>
                    <label>Onions
                        <input 
                        type='checkbox'
                        name='onions'
                        // checked={values.toppings.onions ===true}
                        />
                    </label>
                </div>
            </div>

    )
}