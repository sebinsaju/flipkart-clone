import React from "react";
import style from "./Button.module.scss";

const Button = ({primary,disabled,...props}) => {
  return <button type="submit" className={`${style.button} ${primary?style.primary:""} ${disabled?style.disabled:""}`}>{props.children}</button>;
};

export default Button;
