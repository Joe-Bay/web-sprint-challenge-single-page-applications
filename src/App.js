import React, { useState, useEffect } from "react";
import { Switch, Link, Route } from 'react-router-dom'
import Form from './Form'
import Home from './Home'
import * as yup from 'yup'
import formSchema from "./formSchema";
import axios from 'axios'


const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  specialInstruction: '',
  toppings: {
    pepperoni: false,
    olives: false,
    sausage: false,
    onions: false,
  }
}

const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
}

const initialPizza = []
const initialBtnDisable = true;

const App = () => {

  const [pizza, setPizza] = useState(initialPizza)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disableBtn, setDisableBtn] = useState(initialBtnDisable)



  

  const postNewPizza = newPizza => {
    
    axios.post('https://reqres.in/api/users', newPizza)
    .then(res => {
      setPizza([res.data, ...pizza])
      console.log(res.data)
      setFormValues(initialFormValues)
      
    })
    .catch(err => {
      console.log(`the err posting is ${err}`)
    })
  }

  const getPizzaData = () => {
    axios.get('https://reqres.in/api/users')
    .then( res => {
      console.log(res)
    })
    .catch(err => {
      console.log( `the err is ${err}`)
    })
  }



  const inputChange = (name, value) => {
    yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: '',
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
    })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }





  const checkBoxChange = (name, isChecked) => {

    setFormValues({
      ...formValues,
      toppings:{
        ...formValues.toppings,
        [name]: isChecked,
      }
    })

  }



  const submitForm = () => {
    
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      specialInstruction: formValues.specialInstruction.trim(),
      toppings: Object.keys(formValues.toppings).filter(top => formValues.toppings[top])

    }
    postNewPizza(newPizza)

  }

  useEffect(() => {
    getPizzaData()
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisableBtn(!valid)
    })
  }, [formValues])

  return (
    <>
    <div className ='main-header'>
            <h1>Lambda Eats</h1>
            <nav>
              <Link to ='/'>Home</Link>
              <Link to='/pizza'>Create your Pizza</Link>
            </nav>
    </div>
    <Switch>
      <Route path='/pizza'>
        <Form 
        values={formValues}
        submit={submitForm}
        inputChange={inputChange}
        disable={disableBtn}
        errors={formErrors}
        checkboxChange={checkBoxChange}
        />
      </Route>

      <Route path ='/'> 
          <Home />   
      </Route>
    </Switch>


    </>
  );
};
export default App;
