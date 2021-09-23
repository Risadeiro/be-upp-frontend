import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormHealthDetails from './FormHealthDetails'
import Confirm from './Confirm'
import Success from './Success'

export class UserForm extends Component {
  state = {
    step: 1,

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
    noDiseases: false
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

  skip = () => {
    const { step } = this.state
    this.setState({
      step: step + 2
    })
  }

  render() {
    const { step } = this.state
    const { name, telephone, birth, gender, email, city, healthLevel } = this.state
    const values = { name, telephone, birth, gender, email, city, healthLevel }

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            skip={this.skip}
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
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        )

      case 4:
        return (
          <Success />
        )
    }
  }
}

export default UserForm
