import React, { Component, Fragment } from 'react'
import { RegisterForm } from './Form'

class Register extends Component {
  render() {
    return (
      <Fragment>
        <div className="col-10 col-md-4 offset-1 offset-md-4 my-5">
          <RegisterForm onSubmit={() => {}} />
        </div>
      </Fragment>
    )
  }
}

export default Register
