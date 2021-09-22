import { render } from '@testing-library/react'
import React from 'react'

import { mockSdk } from '../../test/mocks/mockSdk'
import EntryEditor from './EntryEditor'

describe('Entry component', () => {
  it('Component text exists', () => {
    const { getByText } = render(<EntryEditor sdk={mockSdk} />)

    expect(getByText('Hello Entry Editor Component')).toBeInTheDocument()
  })
})
