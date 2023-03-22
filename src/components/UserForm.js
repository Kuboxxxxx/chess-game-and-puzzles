import React from 'react';
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
    if(result.length == 0){
        checkExisting.push(valueObject)
        localStorage.setItem("userList", JSON.stringify(checkExisting))
    }
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
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">Name</label>
            <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            />
            {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
    
            <label htmlFor="elo">Elo</label>
            <input
            id="elo"
            name="elo"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.elo}
            />
            {formik.errors.elo ? <div>{formik.errors.elo}</div> : null}
            <button type="submit">Submit</button>
        </form>
        );
    };