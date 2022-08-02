
import React from 'react'
import {render} from 'calculator-test-utils'
import AutoScalingText from '../auto-scaling-text'
import { dark } from 'themes'

test('renders', () => {
  render(<AutoScalingText />,{theme: dark})

  //const {debug} = render(<AutoScalingText />)
  //debug()
})
