import React, { Component } from 'react'

export class Confirm extends Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    const { values: { name, telephone, birth, gender, email, city, healthLevel } } = this.props

    return (
      <h1> Página de confirmação de dados </h1>
    )
  }
}

const styles = {
  button: {
    margin: 15
  }
}

export default Confirm
