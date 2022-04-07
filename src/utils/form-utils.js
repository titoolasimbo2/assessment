import * as Yup from "yup"



export const loginvalidationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required").email("Username is invalid"),
    password: Yup.string().required("Password is required"),

})

export const signupvalidationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phone: Yup.string().required("Phone number is required"),
    firstname: Yup.string().required("Firstname is required"),
    lastname: Yup.string().required("Lastname is required"),
    password: Yup.string().required("Password is required"),
    confirmpassword: Yup.string()




})