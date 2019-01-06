import classNames from 'classnames'

export default isInvalid => {
  return classNames('form-control', {
    'is-invalid': isInvalid,
  })
}
