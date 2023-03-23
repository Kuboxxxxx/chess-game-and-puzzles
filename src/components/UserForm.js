import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.elo) {
        errors.elo = 'Required';
    } else if (values.elo.length > 20) {
        errors.elo = 'Must be 20 characters or less';
    }

    return errors;
};

const nameCheck = (valueObject) => {
    let checkExisting = JSON.parse(localStorage.getItem("userList")) || []
    let currentNameArray = [valueObject]
    // Compares current input with existing users
    let result = checkExisting.filter(ExistName => currentNameArray.some(newName => ExistName.firstName === newName.firstName))
    // Check if userlist exists, if not, fresh array
    if(!checkExisting) checkExisting = [];
    // If input name and localStorage name don't match, push new object
    if(result.length === 0){
        Object.assign(valueObject, {win: 0, loss: 0})
        checkExisting.push(valueObject)
        localStorage.setItem("userList", JSON.stringify(checkExisting))
    }
}

// IM SORRY THE PROPS ARE CONFUSING ME
const refreshForm = () => {
    window.location.reload(false)
}


export const UserSignup = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            elo: '',
        },
        validate,
        onSubmit: values => {
            nameCheck(values)
            //sorry ;c
            refreshForm()
        },
    });
    return (
        <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
          p: 2,
          alignItems: "center",
          margin: "0 auto",
        }}
        onSubmit={formik.handleSubmit}
      >
            <TextField
            helperText="Please enter your name"
            id="demo-helper-text-aligned"
            label="Name"
            name="firstName"
            type="text"
            sx={{
                display: "flex",
                p: 2,
                }}
            onChange={formik.handleChange}
            value={formik.values.firstName}
            />
            {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
    
            <TextField
            helperText="Elo"
            id="demo-helper-text-aligned-no-helper"
            label="Elo"
            name="elo"
            type="number"
            sx={{
                display: "flex",
                p: 2,
                }}
            onChange={formik.handleChange}
            value={formik.values.elo}
            />
            {formik.errors.elo ? <div>{formik.errors.elo}</div> : null}
            <Button type="submit" size="medium"  variant="contained" color="success">
                Submit
            </Button>
        </Box>
        );
    };