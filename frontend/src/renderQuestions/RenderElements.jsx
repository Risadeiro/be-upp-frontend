import React from 'react'
import Select from './elements/Select'
import Scale from './elements/Scale'
import Checkbox from './elements/Checkbox'
import Radio from './elements/Radio'
import Text from './elements/Text'
import Table from './elements/Table'
import PureText from './elements/PureText'
import Image from './elements/Image'

const RenderElements = ({ props: {
  questionId, questionLabel, type,  // Mandatory fields 
  maxValue, minValue, step,         // Scale only
  options,                          // Checkbox, radio, select only
  row, col,                         // Table only
} }) => {

  const answer = "0"; // TODO: persist val

  switch (type) {
    case 'pureText':
      return (
        <PureText
          id={questionId}
          label={questionLabel}
        />
      )

    case 'image':
      return (
        <Image
          id={questionId}
          label={questionLabel}
        />
      )

    case 'select':
      return (
        <Select
          questionId={questionId}
          questionLabel={questionLabel}
          options={options}
          answer={answer}
        />
      )

    case 'scale':
      return (
        <Scale
          questionId={questionId}
          questionLabel={questionLabel}
          maxValue={maxValue}
          minValue={minValue}
          step={step}
          answer={answer}
        />
      )

    case 'checkbox':
      return (
        <Checkbox
          questionId={questionId}
          questionLabel={questionLabel}
          options={options}
        />
      )

    case 'radio':
      return (
        <Radio
          questionId={questionId}
          questionLabel={questionLabel}
          options={options}
        />
      )

    case 'text':
      return (
        <Text
          questionId={questionId}
          questionLabel={questionLabel}
          answer={answer}
        />
      )

    case 'table':
      return (
        <Table
          questionIdQuestion={questionId}
          questionLabel={questionLabel}
          row={row}
          col={col}
        />
      )

    default:
      return null;
  }
}

export default RenderElements