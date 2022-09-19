/**
 * @jest-environment jsdom
 */

import React from 'react'
import {render} from 'calculator-test-utils'
//import { light, dark } from 'themes'
import CalculatorDisplay from '../calculator-display'

test('renders', () => {
  const {container} = render(<CalculatorDisplay value="0" />)
  // needs prettier, without prettier, toMatchSnapshot works
  //rerender(<CalculatorDisplay value="0" />,{ wrapper:Wrapper})
  expect(container.firstChild).toMatchInlineSnapshot(`
    .emotion-0 {
      color: white;
      background: #1c191c;
      position: relative;
      line-height: 130px;
      font-size: 6em;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }

    <div
      class="emotion-0 emotion-1"
    >
      <div
        class="autoScalingText"
        data-testid="total"
        style="transform: scale(1,1);"
      >
        0
      </div>
    </div>
  `)
})
