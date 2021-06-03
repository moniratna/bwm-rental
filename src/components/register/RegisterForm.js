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

const RegisterForm = props => {
  const { handleSubmit, pristine, reset, submitting,submitCb, valid, errors } = props
  return (
    <form onSubmit={handleSubmit(submitCb)}>
      
          <Field
            name="username"
            type="text"
            label="Username"
            className= "form-control"
            component={renderField}
          />
          <Field
            name="email"
            type="email"
            label="Email"
            className="form-control"
            component={renderField}
          />
          <Field
            name="password"
            
            type="password"
            label="Password"
            className="form-control"
            component={renderField}
          />
          <Field
            name="passwordConfirmation"
            
            type="password"
            label="Confirm Password"
            className="form-control"
            component={renderField}
          />
        <button className="btn btn-bwm btn-form" type="submit" disabled={!valid || pristine || submitting}>
          Submit
        </button>
        {
            errors.length > 0 && 
            <div className='alert-alert-danger bwm-res-errors'>
                {errors.map((error,index)=> <p key={index}>{error.detail}</p>)}
            </div>
        }
    </form>
  )
}
const validate = values => {
    const errors = {}
    if(values.username && values.username.length < 4) {
        errors.username = 'Username min length is 4 charecters';
    }
    if(!values.email){
        errors.email = 'Please enter email';
    }
    if(!values.passwordConfirmation){
        errors.passwordConfirmation = 'please enter confirm password';
    }
    if(values.password !== values.passwordConfirmation){
        errors.password = 'Password must be same';
    }
    return errors
  }

export default reduxForm({
  form: 'registerForm',
  validate
})(RegisterForm)