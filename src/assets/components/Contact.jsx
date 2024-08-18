import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';

export default function Contact() {

  let [buttonState, setButtonState] = useState('disabled')

  let validationSchema = Yup.object({
    name: Yup.string()
    .required('name is required')
    .matches(/^[A-Za-z]{3,}(?: [A-Za-z]{3,})*$/, 'Special characters and numbers not allowed'),

    email: Yup.string()
    .email('Enter valid email')
    .required('email is required')
    .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Email not valid *exemple@yyy.zzz'),
    
    phone: Yup.string()
    .required('phone is required')
    .matches(/^0(10|11|12|15)\d{8}$/, 'Enter valid Phone Number'),
    
    age: Yup.number()
    .min(18, 'min age is 18')
    .max(80, 'max age is 80')
    .required('age is required'),
    
    password: Yup.string()
    .required('password is required')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/, 'Enter valid password *Minimum eight characters, at least one letter and one number:*'),
    
    repassword: Yup.string()
    .oneOf([Yup.ref('password')], "repassword doesn't match the password")
    .required('repassword is required')
  })


  
  

  function onSubmit(){
    formik.resetForm()
  }

  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      age: '',
      password: '',
      repassword: ''
    },
    validationSchema,
    onSubmit
  })

  useEffect(() => {
    if (Object.keys(formik.errors).length === 0 && Object.keys(formik.touched).length > 0) {
      setButtonState('');
    } else {
      setButtonState('disabled');
    }
  }, [formik.errors, formik.touched]);

  return (
    <div className="container w-75 mt-60 min-vh-100 text-center d-flex justify-content-center align-items-center">
      <form onSubmit={formik.handleSubmit}>
        <div className="row g-4">
          <div className="col-md-6">
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} type="text" name="name" id="name" className="form-control" placeholder="Enter Your Name" />
            {formik.errors.name && formik.touched.name ? 
            <div className="alert alert-danger mt-2 fw-bold">{formik.errors.name}</div>  
            : ''
          }
            
          </div>
          <div className="col-md-6">
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" name="email" id="email" className="form-control" placeholder="Enter Your Email" />
            {formik.errors.email && formik.touched.email ? 
            <div className="alert alert-danger mt-2">{formik.errors.email}</div>  
            : ''
          }
          </div>
          <div className="col-md-6">
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} type="tel" name="phone" id="phone" className="form-control" placeholder="Enter Your Phone" />
            {formik.errors.phone && formik.touched.phone ? 
            <div className="alert alert-danger mt-2">{formik.errors.phone}</div>  
            : ''
          }
          </div>
          <div className="col-md-6">
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.age} type="number" name="age" id="age" className="form-control" placeholder="Enter Your Age" />
            {formik.errors.age && formik.touched.age ? 
            <div className="alert alert-danger mt-2">{formik.errors.age}</div>  
            : ''
          }
          </div>
          <div className="col-md-6">
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" name="password" id="password" className="form-control" placeholder="Enter Your password" />
            {formik.errors.password && formik.touched.password ? 
            <div className="alert alert-danger mt-2">{formik.errors.password}</div>  
            : ''
          }
          </div>
          <div className="col-md-6">
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.repassword} type="password" name="repassword" id="repassword" className="form-control" placeholder="Repassword" />
            {formik.errors.repassword && formik.touched.repassword ? 
            <div className="alert alert-danger mt-2">{formik.errors.repassword}</div>  
            : ''
          }
          </div>
        </div>
        <button type='submit' className={`btn btn-outline-danger mt-4 ${buttonState}`} id="submitBtn">Submit</button>
      </form>
    </div>

  )
}
