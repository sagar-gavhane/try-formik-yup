import React, { Component, Fragment } from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik'

import applyInputClasses from '../../../utils/applyInputClasses'
import CustomErrorMessage from '../../../components/CustomErrorMessage'

import { getValidationSchema } from './Form'

class Register extends Component {
  render() {
    return (
      <Fragment>
        <div className="col-4 offset-4 my-5">
          <Formik
            initialValues={{ emailAddress: '', mobileNumber: '', password: '', sbCode: '', agree: false }}
            onSubmit={(values, actions) => {
              console.log(actions)
              setTimeout(() => actions.setSubmitting(false), 3 * 1000)
            }}
            validationSchema={getValidationSchema}
          >
            {args => {
              const { values, errors, isValid, touched, isSubmitting } = args
              return (
                <Fragment>
                  <Form>
                    {/* emailAddress */}
                    <div className="form-group">
                      <label htmlFor="emailAddress">Email Address</label>
                      <Field
                        className={applyInputClasses(errors.emailAddress && touched.emailAddress)}
                        type="email"
                        name="emailAddress"
                      />
                      <ErrorMessage name="emailAddress" component={CustomErrorMessage} />
                    </div>
                    {/* mobileNumber */}
                    <div className="form-group">
                      <label htmlFor="mobileNumber">Mobile Number</label>
                      <Field
                        className={applyInputClasses(errors.mobileNumber && touched.mobileNumber)}
                        type="number"
                        name="mobileNumber"
                      />
                      <ErrorMessage name="mobileNumber" component={CustomErrorMessage} />
                    </div>
                    {/* password */}
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <Field
                        className={applyInputClasses(errors.password && touched.password)}
                        type="password"
                        name="password"
                      />
                      <ErrorMessage name="password" component={CustomErrorMessage} />
                    </div>
                    {/* sbCode */}
                    <div className="form-group">
                      <label htmlFor="sbCode">SB Code</label>
                      <Field className={applyInputClasses(errors.sbCode && touched.sbCode)} type="text" name="sbCode" />
                      <ErrorMessage name="sbCode" component={CustomErrorMessage} />
                    </div>
                    {/* I agree */}
                    <div className="form-check">
                      <Field id="agree" type="checkbox" className="form-check-input" name="agree" />
                      <label htmlFor="agree" className="form-check-label">
                        I agree
                      </label>
                      <ErrorMessage name="agree" component={CustomErrorMessage} />
                    </div>
                    <div className="form-group my-2">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block p-2"
                        disabled={!isValid || !values.agree}
                      >
                        {isSubmitting ? 'Loading' : 'Register Me'}
                      </button>
                    </div>
                  </Form>
                </Fragment>
              )
            }}
          </Formik>
        </div>
      </Fragment>
    )
  }
}

export default Register
