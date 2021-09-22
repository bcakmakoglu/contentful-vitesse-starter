import { render } from '@testing-library/react'
import React from 'react'

import { mockSdk } from '../../test/mocks/mockSdk'
import Page from './Page'

describe('Page component', () => {
  it('Component text exists', () => {
    const { getByText } = render(<Page sdk={mockSdk} />)

    expect(getByText('Hello Page Component')).toBeInTheDocument()
  })
})
