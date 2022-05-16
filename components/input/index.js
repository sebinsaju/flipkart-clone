import React from 'react'
import style from "./Input.module.scss";
import { ErrorMessage } from 'formik';
const Input = ({name,value,onChange,onBlur,placeholder,props}) => {
    return <div className={style.input_wrapper}>
        <input name={name} value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder} {...props} />
        <ErrorMessage name={name} render={(msg) => {
            return <div className={style.error}>{msg}</div>
        }} />
    </div>
}
export default Input;