import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { v4 as uuid } from 'uuid';

const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
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
        Object.assign(valueObject, {win: 0, loss: 0, id: uuid()})
        if(!valueObject.elo){
            Object.assign(valueObject,{elo: 400})
        }
        checkExisting.push(valueObject)
        localStorage.setItem("userList", JSON.stringify(checkExisting))
        
    }
}

const textfieldStyling = {
    "& label": {
        marginLeft: "5%",
    }
};



export const UserSignup = ({setNewUser}) => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            elo: '',
        },
        validate,
        onSubmit: values => {
            nameCheck(values)
            const checkforUpdate = JSON.parse(localStorage.getItem("userList")) || [];
            setNewUser(checkforUpdate)
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
          margin: "30px auto",
          border: "2px solid #e3e0cf",
          borderRadius: "20px",
          boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
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
                m: 1,
                ...textfieldStyling
                }}
            InputLabelProps={{style: {fontWeight: 'bold'}}}
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
                m: 3,
                ...textfieldStyling
                }}
            InputLabelProps={{style: {fontWeight: 'bold'}}}
            
            onChange={formik.handleChange}
            value={formik.values.elo}
            />
            {formik.errors.elo ? <div>{formik.errors.elo}</div> : null}
            <Button type="submit" size="medium"  variant="contained" 
            style={{
                background: "#839A9B", 
                color: "black", 
                marginBottom: "30px",
                fontWeight:"bold"}}>
                Submit
            </Button>
        </Box>
        );
    };
                <Button 
              variant="contained" 
              size="large"
              style={{
                background: "#839A9B", 
                color: "black", 
                fontWeight:"bold"}}>
                Solve Puzzles
              </Button>
