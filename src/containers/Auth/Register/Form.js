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
