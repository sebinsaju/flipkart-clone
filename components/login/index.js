import React from 'react'
import style from "./Login.module.scss";
import { Formik } from 'formik';
import * as yup from 'yup';
import { ErrorMessage } from "formik";
import Input from '../input';
import Button from "../button";
import { login } from "../../services/login";

const Login = ({ onClose }) => {
    const VALIDATIONSCHEMA = yup.object().shape({
        email: yup.string().required("Enter User name"),
        password: yup.string().required("Enter password"),
    })
    const handleSubmitCustom = async (values) => {
        await login(values).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div className={style.login_wrapper}>
            <div className={style.close_btn} onClick={onClose}>x</div>
            <div className='row'>
                <div className={`col-6 ${style.left}`}>
                    Login
                </div>
                <div className={`col-6 ${style.right}`}>
                    <Formik initialValues={{ email: "", password: "" }} validationSchema={VALIDATIONSCHEMA} onSubmit={handleSubmitCustom}>
                        {({ values,
                            handleChange,
                            handleBlur,
                            handleSubmit, }) => (
                            <form onSubmit={handleSubmit}>
                                <div className={style.input_wrapper}>
                                    <Input type="text" name="email" placeholder='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                </div>
                                <div className={style.input_wrapper}>
                                    <Input type="password" name="password" placeholder='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                                </div>
                                <Button primary={true} disabled={false}>Submit</Button>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Login;
