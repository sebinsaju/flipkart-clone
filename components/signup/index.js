import { Formik } from "formik";
import React from "react";
import Input from "../input";
import style from "./Signup.module.scss";

const INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
  street: "",
  city: "",
  district: "",
  pincode: "",
  phone: "",
};
const Signup = ({ onClose }) => {
  return (
    <div className={style.signup}>
      <div className={style.close} onClick={onClose}>
        x
      </div>
      <div className={style.title}>Signup</div>
      <Formik initialValues={INITIAL_VALUES}>
        {({ values, handleSubmit, handleBlur, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Name"
              name="name"
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
            />
           <Input
              placeholder="Email"
              name="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
            />
            <Input
              placeholder="Password"
              name="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
            />
            <Input
              placeholder="Street"
              name="street"
              value={values.street}
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
            />
            <Input
              placeholder="City"
              name="city"
              value={values.city}
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
            />
            <Input
              placeholder="District"
              name="district"
              value={values.district}
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
            />
            <Input
              placeholder="Pincode"
              name="pincode"
              value={values.pincode}
              onBlur={handleBlur}
              onChange={handleChange}
              type="number"
            />
            <Input
              placeholder="Phone number"
              name="phone"
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
              type="number"
            />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
