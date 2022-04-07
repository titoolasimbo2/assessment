import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { signIn } from '../services/auth';
import { loginvalidationSchema } from '../utils/form-utils';


function LoginPage({ Login, error }) {
  const[ServerError, SetServerError] = useState("")
  const formik = useFormik({
  initialValues: {
      username: "",
      password: "",
   
  },
  
  onSumbit: (values) => {
    signIn(values, onSucess, onFailure) 
  },
  validationSchema: loginvalidationSchema
})


  const navigate = useNavigate()
  const forgotHandler = () => {
    navigate("/reset")
  }
  const [details, setDetails] = useState({ email: "", name: "", password: "" });
  const submitHandler = e => {
    e.preventDefault()
    Login(details)
  }

  const onSucess = () => {
    //callback onSucess
  }
  const onFailure = (message) => {
    SetServerError(message)
  }

  return (
    <div>
      <h1 className="text-5xl">Login</h1>
    <form onSubmit={submitHandler}>
    <div className="form-inner">
      <h2 className='bg-red-500'>Login</h2>
      {/* ERROR! */}
      <label htmlFor="name"> Username:</label>
      <input value={formik.values.username} onChange= {formik.handleChange} type="text" name="name" id="Username" />

      <div> 
        {formik.errors.usernme}
      </div>

      <label htmlFor="name"> Password:</label>
      <input value={formik.values.password} onChange= {formik.handleChange} type="text" name="name" id="Password" />

      <div>
        {formik.errors.password}
      </div>
      <div> {ServerError} </div>
      <button>Submit</button>

      <div class="cursor-pointer" onClick={forgotHandler}>Forgot Password?</div>
    </div>

  </form>

  </div>     
  )

}
export default LoginPage