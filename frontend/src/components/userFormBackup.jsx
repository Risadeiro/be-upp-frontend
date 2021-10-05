import React, { Component, useState, useEffect } from 'react'
import FormUserDetails from './FormUserDetails'
import FormHealthDetails from './FormHealthDetails'
import Confirm from './Confirm'
import Success from './Success'
import { FormUserNutrition } from './FormUserNutrition'
import { FormUserFitness } from './FormUserFitness'
import { FormUserSleep } from './FormUserSleep'
import { FormMentalHealth } from './FormMentalHealth'

export class UserForm extends Component {
  state = {
    step: 2,

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

    medicine: '',

    // Nutrition
    nutritionInfoCol: [
      { id: 1, name: "1", label: "1" },
      { id: 2, name: "2", label: "2" },
      { id: 3, name: "3", label: "3" },
      { id: 4, name: "4", label: "4" },
      { id: 5, name: "5", label: "5" },
      { id: 6, name: "6", label: "6 ou mais" }
    ],

    nutritionInfoRow: [
      { id: 1, name: "1", label: "Você se alimenta? (quantidade de refeições, incluindo café da manhã, almoço, jantar e lanches intermediários)" },
      { id: 2, name: "2", label: "Você consome frutas e vegetais?" },
      { id: 3, name: "3", label: "Você ingere fontes de proteínas (carnes vermelhas, frango, pescados, leite e derivados, ovos ou suplementos como Whey Protein)?" },
      { id: 4, name: "4", label: "Você come pães, biscoitos, bolos, chocolate ou doces?" },
      { id: 5, name: "5", label: "Você ingere fontes de gorduras? (óleos, manteigas, queijos, embutidos, carne vermelha e ovo)" },
      { id: 6, name: "6", label: "Bebe água?" }
    ]
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
    const customMarks = [
      {
        value: 1,
        label: '1'
      },
      {
        value: 2,
        label: '2'
      },
      {
        value: 3,
        label: '3'
      },
      {
        value: 4,
        label: '4'
      },
      {
        value: 5,
        label: '5'
      },
      {
        value: 6,
        label: '6'
      },
      {
        value: 7,
        label: '7'
      },
      {
        value: 8,
        label: '8'
      },
      {
        value: 9,
        label: '9'
      },
      {
        value: 10,
        label: '10'
      }
    ]

    const { step } = this.state
    const { name, telephone, birth, gender, email, city, healthLevel, medicine, nutritionInfoCol, nutritionInfoRow } = this.state
    const values = { name, telephone, birth, gender, email, city, healthLevel, medicine, nutritionInfoCol, nutritionInfoRow, customMarks }

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
          <FormMentalHealth
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        )

      case 7:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        )

      case 8:
        return (
          <Success />
        )
    }
  }
}

export default UserForm
