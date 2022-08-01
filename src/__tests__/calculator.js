import React from 'react'
import {fireEvent, render} from '@testing-library/react'
import Calculator from '../calculator'

test(`the clear button switches from AC to C when there is an entry 
and back to C if the entry is deleted`, () => {
  const {getByText} = render(<Calculator />)
  const clearButton = getByText('AC')

  fireEvent.click(screen.getByText(/3/))
  expect(clearButton).toHaveTextContent('C')

  fireEvent.click(getByText('C'))
  expect(clearButton).toHaveTextContent('AC')
})
