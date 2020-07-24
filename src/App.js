import React, { useState } from "react";
import { Switch, Link, Route } from 'react-router-dom'
import Form from './Form'
import Home from './Home'
import * as yup from 'yup'
import formSchema from "./formSchema";
import axios from 'axios'


const initialFormValues = {
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

  const upDateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    })
  }


  const getPizzaData = () => {
    axios.get('https://reqres.in/')
    .then( res => {
      console.log(res)
    })
    .catch(err => {
      console.log( `the err is ${err}`)
    })
  }

  const postNewPizza = newPizza => {
    axios.post('https://reqres.in/', newPizza)
    .then(res => {
      setPizza([res.data, ...pizza])
      setFormValues(initialFormValues)
    })
    .catch(err => {
      console.log(`the err posting is ${err}`)
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
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      specialInstruction: formValues.specialInstruction.trim(),
      toppings: Object.keys(formValues.toppings).filter(top => formValues.toppings[top])

    }
  }



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
