import { render } from '@testing-library/react'
import React from 'react'

import { mockSdk } from '../../test/mocks/mockSdk'
import Dialog from './Dialog'

describe('Dialog component', () => {
  it('Component text exists', () => {
    const { getByText } = render(<Dialog sdk={mockSdk} />)

    expect(getByText('Hello Dialog Component')).toBeInTheDocument()
  })
})
