import { FormikContext, useFormik } from 'formik';
import React, { useState } from 'react'
import { signup } from '../services/auth';
import { signupvalidationSchema } from '../utils/form-utils';


function Signup() {
    const [processing, setProcessing] = useState(false)
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phonenumber: "",
            username: "",
            password: "",
            confirmpassword: "",
        },
        onSubmit: async (values) => {
            console.log(values)
            setProcessing(true)
            try {
                //call firebase to signup
                await signup(values)
                setProcessing(false)
            } catch (e) {
                console.log(e)
            }
        },
        validationSchema: signupvalidationSchema
    })
    return (<form onSubmit={formik.handleSubmit}>
        <label htmlFor="name"> First Name and Last Name:</label>
        <input value={formik.values.name} onChange={formik.handleChange} id="name" type="text" name="name" />

        <div>
            {formik.errors.name}
        </div>

        <label htmlFor="Email"> Email:</label>
        <input value={formik.values.email} onChange={formik.handleChange} id="email" type="text" name="email" />

        <div>
            {formik.errors.email}
        </div>

        <label htmlFor="Phone Number"> Phone Number:</label>
        <input value={formik.values.phonenumber} onChange={formik.handleChange} id="phonenumber" type="text" name="phonenumber" />

        <div>
            {formik.errors.email}
        </div>

        <label htmlFor="Username"> Username:</label>
        <input value={formik.values.username} onChange={formik.handleChange} id="username" type="text" name="username" />

        <div>
            {formik.errors.username}
        </div>

        <label htmlFor="Password"> Password:</label>
        <input value={formik.values.password} onChange={formik.handleChange} id="password" type="text" name="password" />

        <div>
            {formik.errors.password}
        </div>

        <label htmlFor="Confirm Password"> Confirm Password:</label>
        <input value={formik.values.confirmpassword} onChange={formik.handleChange} id="confirmpassword" type="text" name="confirmpassword" />

        <div>
            {formik.errors.confirmpassword}
        </div>

        <button type="submit">Submit </button>

    </form>
    );
}

export default Signup;