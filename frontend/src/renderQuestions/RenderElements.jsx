import React from 'react'
import Select from './elements/Select'
import Scale from './elements/Scale'
import Checkbox from './elements/Checkbox'
import Radio from './elements/Radio'
import Text from './elements/Text'
import Table from './elements/Table'

const RenderElements = ({ questions: { id, label, value, options, type, row, col } }) => {
  switch (type) {
    case 'select':
      return (
        <Select
          id={id}
          label={label}
          value={value}
          options={options}
        />
      )

    case 'scale':
      return (
        <Scale
          id={id}
          label={label}
          value={value}
        />
      )

    case 'checkbox':
      return (
        <Checkbox
          id={id}
          label={label}
          value={value}
          options={options}
        />
      )

    case 'radio':
      return (
        <Radio
          id={id}
          label={label}
          value={value}
          options={options}
        />
      )

    case 'text':
      return (
        <Text
          id={id}
          label={label}
          value={value}
        />
      )

    case 'table':
      return (
        <Table
          idQuestion={id}
          label={label}
          value={value}
          row={row}
          col={col}
        />
      )

    default:
      return null;
  }
}

export default RenderElements