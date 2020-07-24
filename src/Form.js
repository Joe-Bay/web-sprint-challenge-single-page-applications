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
                <select name='size' onChange={onInputChange}>
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
                        name='sauce'
                        value='original'
                        onChange={onInputChange}
                    
                    /><br />
                    <input 
                        type='radio'
                        name='sauce'
                        value='garlicRanch'
                        onChange={onInputChange}
                    
                    /><br />
                    <input 
                        type='radio'
                        name='sauce'
                        value='BBQsauce'
                        onChange={onInputChange}
                    
                    /><br />
                    <input 
                        type='radio'
                        name='sauce'
                        value='spinachAlfredo'
                        onChange={onInputChange}
                    /><br />
                </div>
                <div className='topping-selection'>
                    <label>Pepperoni
                        <input 
                        type='checkbox'
                        name='pepperoni'
                        onChange={onCheckboxChange}
                        // checked={values.toppings.pepperoni ===true}
                        />
                    </label>
                    <label>Olives
                        <input 
                        type='checkbox'
                        name='olives'
                        onChange={onCheckboxChange}
                        // checked={values.toppings.olives ===true}
                        />
                    </label>
                    <label>Sausage
                        <input 
                        type='checkbox'
                        name='sausage'
                        onChange={onCheckboxChange}
                        // checked={values.toppings.sausage ===true}
                        />
                    </label>
                    <label>Onions
                        <input 
                        type='checkbox'
                        name='onions'
                        onChange={onCheckboxChange}
                        // checked={values.toppings.onions ===true}
                        />
                    </label>
                    <div className='special-instructions'>
                        <h3>Special Instructions</h3>
                        <input 
                        type='text'
                        name='instructions'
                        placeholder='Special Instructions'
                        onChange={onInputChange}
                        // value={values.instructions}
                        />
                    </div>
                    <div className='submitButton'>
                        <button>Add to Order</button>
                    </div>
                </div>
            </div>

    )
}