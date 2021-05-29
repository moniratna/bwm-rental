import React from 'react'
import { clearSubmitErrors, Field, reduxForm } from 'redux-form'


const renderField = ({
    input,
    label,
    type,
    className,
    meta: { touched, error, warning }
  }) => (
    <div className='form-group'>
      <label>{label}</label>
      <div className='input-group'>
        <input {...input} type={type} className={className} />
      </div>
        {touched &&
          ((error && <div className='alert alert-danger'>{error}</div>))}
      
    </div>
  )

const LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting,submitCb, valid } = props
  return (
    <form onSubmit={handleSubmit(submitCb)}>
          <Field
            name="email"
            component="input"
            type="email"
            label="Email"
            className="form-control"
            component={renderField}
          />
          <Field
            name="password"
            component="input"
            type="password"
            label="Password"
            className="form-control"
            component={renderField}
          />
        <button className="btn btn-bwm btn-form" type="submit" disabled={!valid || pristine || submitting}>
          Submit
        </button>
    </form>
  )
}

export default reduxForm({
  form: 'loginForm',
  
})(LoginForm)