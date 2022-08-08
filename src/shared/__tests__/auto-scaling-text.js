
import React from 'react'
import {render} from 'calculator-test-utils'
import { light} from 'themes'
import AutoScalingText from '../auto-scaling-text'

test('renders', () => {
  render(<AutoScalingText />, {theme: light})

  //const {debug} = render(<AutoScalingText />)
  //debug()
})
