import { TextField } from "@mui/material";
import PropTypes from 'prop-types';
import React from "react";


function FormikMuiTextField({ ...props }) {

    const { id, name, label, type, formik } = props;

    return  <TextField
                fullWidth
                id={id}
                name={name}
                label={label}
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type={type}
                error={Boolean(formik.touched[name]) && Boolean(formik.errors[name])}
                helperText={formik.touched[name] && formik.errors[name]}
                {...props}
            />
}

FormikMuiTextField.defaultProps = {
    type: "text", 
    variant: "outlined"
}

FormikMuiTextField.propTypes = {
    id: PropTypes.string, 
    name: PropTypes.string, 
    label: PropTypes.string.isRequired, 
    type: PropTypes.string, 
    formik: PropTypes.any.isRequired

}

export default FormikMuiTextField;