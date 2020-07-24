// form here
import React from 'react'
import { Link } from 'react-router-dom'

export default function Form(props) {

    const { values, submit, inputChange, disable, errors, checkboxChange} = props


    const onSubmit = event => {
        event.preventDefault();
        submit()
    }


    const onCheckboxChange = evt => {
        const {name, checked} = evt.target
        checkboxChange(name, checked)
    }

    const onInputChange = evt => {
        const {name, value} = evt.target
        inputChange(name, value)

    }


    return (
        <div className='form-container' >
            <h2> Build your Own Pizza</h2>
            {/* possible image here if i get time */}
            <div className='size-section'>
                <h3>Build your Own Pizza</h3>
                <div>{errors.name}</div>
                <label>Name
                    <input 
                    type='text'
                    name='name'
                    onChange={onInputChange}
                    placeholder='Name'
                    value={values.name}
                    />
                </label>
                <h4>Choice of size</h4>
                <div>{errors.size}</div>
                <select 
                    name='size'
                    onChange={onInputChange}
                    value={values.size}
                    >
                    <option value=''>Select a Size</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
                </div>
                <div className='sauce-container'>
                    <h4>Choice of Sauce</h4>
                    <div>{errors.sauce}</div>
                    <label>Original Red
                    <input 
                        type='radio'
                        name='sauce'
                        value='original'
                        checked={values.sauce === 'original'}
                        onChange={onInputChange}
                    
                    /><br /></label>
                    <label>Garlic Ranch
                    <input 
                        type='radio'
                        name='sauce'
                        value='garlicRanch'
                        checked={values.sauce === 'garlicRanch'}
                        onChange={onInputChange}
                    
                    /><br /></label>
                    <label>BBQ Sauce
                    <input 
                        type='radio'
                        name='sauce'
                        value='BBQsauce'
                        checked={values.sauce === 'BBQsauce'}
                        onChange={onInputChange}
                    
                    /><br /></label>
                    <label>Spinach Alfredo
                    <input 
                        type='radio'
                        name='sauce'
                        value='spinachAlfredo'
                        checked={values.sauce === 'spinachAlfredo'}
                        onChange={onInputChange}
                    /><br /></label>
                </div>
                <div className='topping-selection'>
                    <label>Pepperoni
                        <input 
                        type='checkbox'
                        name='pepperoni'
                        onChange={onCheckboxChange}
                        checked={values.toppings.pepperoni ===true}
                        />
                    </label>
                    <label>Olives
                        <input 
                        type='checkbox'
                        name='olives'
                        onChange={onCheckboxChange}
                        checked={values.toppings.olives ===true}
                        />
                    </label>
                    <label>Sausage
                        <input 
                        type='checkbox'
                        name='sausage'
                        onChange={onCheckboxChange}
                        checked={values.toppings.sausage ===true}
                        />
                    </label>
                    <label>Onions
                        <input 
                        type='checkbox'
                        name='onions'
                        onChange={onCheckboxChange}
                        checked={values.toppings.onions ===true}
                        />
                    </label>
                    <div className='special-instructions'>
                        <h3>Special Instructions</h3>
                        <input 
                        type='text'
                        name='specialInstruction'
                        placeholder='Special Instructions'
                        onChange={onInputChange}
                        value={values.specialInstruction}
                        />
                    </div>
                    <div className='submitButton'>
                        <button id="submitBtn"onClick={onSubmit} disabled={disable}>Add to Order</button>
                    </div>
                </div>
            </div>

    )
}