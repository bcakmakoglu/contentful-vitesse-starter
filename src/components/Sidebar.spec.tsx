import { render } from '@testing-library/react'
import React from 'react'

import { mockSdk } from '../../test/mocks/mockSdk'
import Sidebar from './Sidebar'

describe('Sidebar component', () => {
  it('Component text exists', () => {
    const { getByText } = render(<Sidebar sdk={mockSdk} />)

    expect(getByText('Hello Sidebar Component')).toBeInTheDocument()
  })
})
