import './Scss/Style.css'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import React, { useState, version } from 'react'

function Form() {
    const yupValidation = Yup.object().shape({
        name: Yup.string()
          .required('Please enter some value.')
          .min(4, 'Add minimum 4 characters'),
        email: Yup.string().required('Email id is mendatory').email(),
      })
      const formOptions = { resolver: yupResolver(yupValidation) }
      const { register, handleSubmit, reset, formState } = useForm(formOptions)
      const { errors } = formState
      function onSubmit(data) {
        console.log(JSON.stringify(data, null, 4))
        return false
      }
      return (
        
        <div className="container mt-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <diviv className="form-group">
            <label>Name</label>
            <input
              name="name"
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              {...register('name')}
            />
            <div className="invalid-feedback">{errors.name?.message}</div>
          </diviv>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="text"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              {...register('email')}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>
          <div className="mt-3">
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>
      )
}
export default Form;
