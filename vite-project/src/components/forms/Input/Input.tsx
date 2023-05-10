import React from "react"

import { Field, ErrorMessage } from "formik"

import styles from "./Input.module.css"

interface InputProps {
  label: string
  name: string
  type?: string
  errors?: string
  touched?: boolean
}

const Input: React.FC<InputProps> = ({label, name, type = "text", errors, touched,}) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <Field
        type={type}
        name={name}
        id={name}
        className={`${styles.input} ${touched && errors && styles.error}`}
      />
      <ErrorMessage name={name} component="div" className={styles.errorMsg} />
    </div>
  )
}

export default Input
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy