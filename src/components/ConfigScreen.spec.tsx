import { render } from '@testing-library/react'
import React from 'react'

import { mockSdk } from '../../test/mocks/mockSdk'
import ConfigScreen from './ConfigScreen'

describe('Config Screen component', () => {
  it('Component text exists', async () => {
    const { getByText } = render(<ConfigScreen sdk={mockSdk} />)

    // simulate the user clicking the install button
    await mockSdk.app.onConfigure.mock.calls[0][0]()

    expect(getByText('Welcome to your contentful app. This is your config page.')).toBeInTheDocument()
  })
})
