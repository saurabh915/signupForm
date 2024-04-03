import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import {Grid,Paper,TextField,Button,Typography,Link} from '@mui/material'
import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { SignupUser } from '../services/signupServices'

const Signuppagetwo = () => {

    const [fname, setName] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

//     let navigate = useNavigate();
//   // login function
//   const dispatch = useDispatch()
//   const SignupFunction = () => {
//     // e.preventDefault()
//     dispatch(SignupUser({ fname,lname,email,password,confirm}));
//     navigate('/')
//     // handleClick
//   }


    const validationSchema = Yup.object().shape({
        fname: Yup.string().required("Required").matches(/^\S*$/, "No spaces").matches(/^\w*$/, "No special characters").matches(/^\D*$/, 'No numerics'),

        lname: Yup.string().required("Required").matches(/^\S*$/, "No spaces").matches(/^\w*$/, "No special characters").matches(/^\D*$/, "No numerics"),

        email: Yup.string().required("Required").matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Enter a valid email"),

        password: Yup.string().required("Required").min(6, "Too short").max(10, "Too long").matches(/^\S*$/, "No spaces").matches(/[A-Z]/, "Must have atleast 1 uppercase character").matches(/[a-z]/, "Must have atleast 1 lowercase character").matches(/[^\w]/, "Must have atleast 1 special character").matches(/[0-9]/, "Must have atleast 1 numeric value"),

        confirm: Yup.string().required("Required").oneOf([Yup.ref('password'), null], 'Must match password entered')
    });

    // const validateData = (event) => {
    //     if (password !== confirm) {
    //         alert("Password and Confirm Password do not match")
    //       }
    //       else {
    //         SignupFunction();
    //       }
    //     }

    const formOptions = { resolver: yupResolver(validationSchema) };

    const {register, handleSubmit, reset, formState, formState: { isSubmitSuccessful }} = useForm(formOptions);
    const { errors } = formState;

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ fname: '', lname: '', email: '',password: '', confirm: '' });
        }
      }, [formState, isSubmitSuccessful, reset]);



    const onSubmit = data => {
        console.log(JSON.stringify(data, null, 5));
      };



    const paperStyle={padding :20, height:'110vh', width:380, margin:'40px auto'}
    const btnStyle={margin:'8px 0'}

    return(
        <Grid rowSpacing={2}>
            <Paper elevation={10} style={paperStyle}>
                <h1>Sign Up</h1>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>First name</label>
                    <TextField 
                        placeholder="First name" 
                        name="fname" 
                        variant="outlined" 
                        margin='dense' 
                        fullWidth 
                        size="small"
                        value = {fname} onChange = {(e) => setName(e.target.value)}
                        {...register("fname")}
                        error = {errors.fname ? true:false}
                        helperText={errors.fname?.message}
                    />             
    
                    <label>Last name</label>
                    <TextField 
                        placeholder="Last name" 
                        name="lname" 
                        variant="outlined" 
                        margin='dense' 
                        fullWidth 
                        size="small" 
                        value = {lname} onChange = {(e) => setLname(e.target.value)}
                        {...register("lname")}
                        error = {errors.lname ? true:false}
                        helperText={errors.lname?.message}
                    />
                    
                    <label>Email address</label>
                    <TextField 
                        placeholder="Enter email" 
                        name="email" 
                        variant="outlined" 
                        margin='dense' 
                        fullWidth 
                        size="small"
                        value = {email} onChange = {(e) => setEmail(e.target.value)}
                        {...register("email")}
                        error = {errors.email ? true:false}
                        helperText={errors.email?.message}
                    />
                    
                    <label>Password</label>
                    <TextField 
                        placeholder="Enter Password" 
                        name="password" 
                        variant="outlined" 
                        type='password' 
                        margin='dense' 
                        fullWidth 
                        size="small" 
                        value = {password} onChange = {(e) => setPassword(e.target.value)}
                        {...register("password")}
                        error = {errors.password ? true:false}
                        helperText={errors.password?.message}
                    />
    
                    <label>Confirm Password</label>
                    <TextField 
                        placeholder="Enter Confirmed Password" 
                        name="confirm" 
                        variant="outlined" 
                        type='password' 
                        margin='dense' 
                        fullWidth 
                        size="small" 
                        value = {confirm} onChange = {(e) => setConfirm(e.target.value)}
                        {...register("confirm")}
                        error = {errors.confirm ? true:false}
                        helperText={errors.confirm?.message}
                    />
                    
                    <Button 
                        type='submit' 
                        color='primary' 
                        variant='contained' 
                        fullWidth
                        // onClick = {validateData}
                        
                        style={btnStyle} > Sign Up 
                    </Button>
                </form>
               
                <div style={{display:'flex',justifyContent:'right'}}>    
                    <Typography >Already registered
                    <Link href="#" underline='none'> sign in?</Link> 
                    </Typography>
                </div>
            </Paper>
        </Grid>
    )
}

export default Signuppagetwo

