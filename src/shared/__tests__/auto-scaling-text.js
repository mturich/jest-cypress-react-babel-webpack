import React from 'react'
import {render} from 'calculator-test-utils'
import AutoScalingText from '../auto-scaling-text'
import {dark, light} from 'themes'

test('renders', () => {
  render(<AutoScalingText />, {theme: light})

  //const {debug} = render(<AutoScalingText />)
  //debug()
})
