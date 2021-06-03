import React from 'react'
import { clearSubmitErrors, Field, reduxForm } from 'redux-form'
import {required, minLength4} from '../../shared/validators';


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
  const { handleSubmit, pristine, reset, submitting,submitCb, valid, errors } = props
  return (
    <form onSubmit={handleSubmit(submitCb)}>
          <Field
            name="email"
            component="input"
            type="email"
            label="Email"
            className="form-control"
            component={renderField}
            validate = {[required, minLength4]}
          />
          <Field
            name="password"
            component="input"
            type="password"
            label="Password"
            className="form-control"
            component={renderField}
            validate = {[required, minLength4]}
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

export default reduxForm({
  form: 'loginForm',
  
})(LoginForm)