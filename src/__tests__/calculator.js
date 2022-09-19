import React from 'react'
import {fireEvent, render, screen} from 'calculator-test-utils'
import Calculator from '../calculator'

test(`the clear button switches from AC to C when there is an entry 
and back to C if the entry is deleted`, () => {
  render(<Calculator />)
  const clearButton = screen.getByText('AC')

  fireEvent.click(screen.getByText(/3/))
  expect(clearButton).toHaveTextContent('C')

  fireEvent.click(screen.getByText('C'))
  expect(clearButton).toHaveTextContent('AC')
})
