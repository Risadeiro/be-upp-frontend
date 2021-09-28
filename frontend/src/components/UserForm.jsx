import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormHealthDetails from './FormHealthDetails'
import Confirm from './Confirm'
import Success from './Success'
import { FormUserNutrition } from './FormUserNutrition'
import { FormUserFitness } from './FormUserFitness'
import { FormUserSleep } from './FormUserSleep'

export class UserForm extends Component {
  state = {
    step: 3,

    // UserDetails
    name: '',
    telephone: '',
    birth: '',
    gender: '',
    email: '',
    city: '',

    // HealthDetails
    healthLevel: 1,

    diabetes: false,
    highColesterol: false,
    hypertension: false,
    rheumaticDisease: false,
    lungDisease: false,
    thyroidism: false,
    otherDisease: false,
    noDiseases: false,

    medicine: ''
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value })
  }

  render() {
    const { step } = this.state
    const { name, telephone, birth, gender, email, city, healthLevel, medicine } = this.state
    const values = { name, telephone, birth, gender, email, city, healthLevel, medicine }

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )

      case 2:
        return (
          <FormHealthDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )

      case 3:
        return (
          <FormUserNutrition
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )

      case 4:
        return (
          <FormUserFitness
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )

      case 5:
        return (
          <FormUserSleep
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )

      case 6:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        )

      case 7:
        return (
          <Success />
        )
    }
  }
}

export default UserForm
