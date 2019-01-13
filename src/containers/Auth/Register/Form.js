import React, { Fragment } from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik'

import applyInputClasses from '../../../utils/applyInputClasses'
import CustomErrorMessage from '../../../components/CustomErrorMessage'

import * as yup from 'yup'

export const getValidationSchema = yup.object().shape({
  emailAddress: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is an required field.'),
  mobileNumber: yup
    .string()
    .min(10, 'Mobile number should be 10 character long')
    .max(13, 'Mobile number should be atmost 13 character long.')
    .required('Mobile number is an required field.'),
  password: yup
    .string()
    .min(8, 'Password should be 8 character long.')
    .required('Password field is an required field.'),
  sbCode: yup.string().min(6, 'sb code should be 6 character long.'),
  agree: yup.boolean().required('Please agree our terms and conditions'),
})

export const RegisterForm = ({ emailAddress, mobileNumber, password, sbCode, agree, onSubmit }) => {
  return (
    <Formik
      initialValues={{
        emailAddress: emailAddress || '',
        mobileNumber: mobileNumber || '',
        password: password || '',
        sbCode: sbCode || '',
        agree: agree || false,
      }}
      onSubmit={(values, actions) => {
        onSubmit()
        setTimeout(() => actions.setSubmitting(false), 3 * 1000)
      }}
      validationSchema={getValidationSchema}
    >
      {args => {
        const { values, errors, isValid, touched, isSubmitting } = args
        return (
          <Fragment>
            <Form data-testid="form" className="col-12">
              {/* emailAddress */}
              <div className="form-group">
                <label htmlFor="emailAddress">Email Address</label>
                <Field
                  id="emailAddress"
                  className={applyInputClasses(errors.emailAddress && touched.emailAddress)}
                  type="email"
                  name="emailAddress"
                  data-testid="emailAddress"
                />
                <ErrorMessage name="emailAddress" data-testid="emailAddressError" component={CustomErrorMessage} />
              </div>
              {/* mobileNumber */}
              <div className="form-group">
                <label htmlFor="mobileNumber">Mobile Number</label>
                <Field
                  className={applyInputClasses(errors.mobileNumber && touched.mobileNumber)}
                  type="number"
                  name="mobileNumber"
                />
                <ErrorMessage name="mobileNumber" data-testid="mobileNumberError" component={CustomErrorMessage} />
              </div>
              {/* password */}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  className={applyInputClasses(errors.password && touched.password)}
                  type="password"
                  name="password"
                />
                <ErrorMessage name="password" data-testid="passwordError" component={CustomErrorMessage} />
              </div>
              {/* sbCode */}
              <div className="form-group">
                <label htmlFor="sbCode">SB Code</label>
                <Field className={applyInputClasses(errors.sbCode && touched.sbCode)} type="text" name="sbCode" />
                <ErrorMessage name="sbCode" data-testid="sbCodeError" component={CustomErrorMessage} />
              </div>
              {/* I agree */}
              <div className="form-check">
                <Field id="agree" type="checkbox" className="form-check-input" name="agree" />
                <label htmlFor="agree" className="form-check-label">
                  I agree
                </label>
                <ErrorMessage name="agree" data-testid="agreeError" component={CustomErrorMessage} />
              </div>
              <div className="form-group my-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-block p-2"
                  disabled={!isValid || !values.agree}
                  data-testid="button"
                >
                  {isSubmitting ? 'Loading' : 'Register Me'}
                </button>
              </div>
            </Form>
          </Fragment>
        )
      }}
    </Formik>
  )
}
