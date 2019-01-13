import React from 'react'
import { render, cleanup, fireEvent, wait } from 'react-testing-library'

import { RegisterForm } from './Form'

afterEach(cleanup)

const setup = WrapperComponent => {
  const onSubmit = jest.fn()
  const { debug, getByTestId, queryByTestId, container } = render(<WrapperComponent onSubmit={onSubmit} />)
  const form = getByTestId('form')
  const emailAddress = getByTestId('emailAddress')
  const button = getByTestId('button')
  const emailAddressError = queryByTestId('emailAddressError')

  return {
    debug,
    getByTestId,
    queryByTestId,
    form,
    emailAddress,
    emailAddressError,
    container,
    onSubmit,
    button,
  }
}

describe('<RegisterForm Testing />', () => {
  test('should be change input', async () => {
    const { emailAddress, emailAddressError, container } = setup(RegisterForm)

    expect(container).toMatchSnapshot()

    const validEmail = 'johndoe@gmail.com'
    fireEvent.change(emailAddress, { target: { value: validEmail } })
    expect(emailAddress.value).toBe(validEmail)

    // invalid email address
    fireEvent.change(emailAddress, { target: { value: 'johndoe' } })

    await wait(() => {
      // I want to test that email address error should be shown to user.
      expect(emailAddressError).toBeTruthy()
    })
  })
})
