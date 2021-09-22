import { render } from '@testing-library/react'
import React from 'react'

import Field from './Field'

describe('Field component', () => {
  it('Component text exists', () => {
    const { getByText } = render(<Field sdk={{} as any} />)

    expect(getByText('Hello Entry Field Component')).toBeInTheDocument()
  })
})
