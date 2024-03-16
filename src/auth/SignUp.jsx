import React from "react";
import { toast } from 'react-toastify';
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";
import SignUpSchema from "../validation-schemas/SignUpSchema";
import { useFormik } from "formik";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      password1: "",
      password2: ""
    },
    validationSchema: SignUpSchema,
    onSubmit: async (values, action) => {
       try {
        const response = await axios.post(
           "http://127.0.0.1:8000/rest-auth/registration/",
           values,
          {
            headers: {
               "Content-Type": "application/json",
             },
           }
         );
         toast.success(response.data.message); // Display success message from backend
        navigate('/');
       } catch (error) {
          if (error.response) {
            if (error.response.data.email) {
              const errorMessage = error.response.data.email[0];
              toast.error(errorMessage);
            } else if (error.response.data.non_field_errors) {
              const errorMessage = error.response.data.non_field_errors[0];
              toast.error(errorMessage);
            } else {
              toast.error("Registration failed! Please try later");
            }
          } else {
            toast.error("Registration failed! Please try later");
          }
        
       }
       action.resetForm();
       action.setSubmitting(false);
    }
  });

  return (
    <div className="flex flex-col justify-center items-center w-2/6 h-[700px] my-8 mx-auto bg-white shadow-md">
      <Avatar
        alt="Travis Howard"
        src="https://imgs.search.brave.com/Q65UA21kSm1jTRqAYCFhO4oVDY9NE3oRUylQVa2XppY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMC8w/OS8xOC8xNS8zMi9j/cm9wLTU1ODIxNDFf/XzM0MC5qcGc"
        sx={{ width: 90, height: 90 }}
      />
      <Typography component="h1" variant="h5" my={1}>
        SignUp
      </Typography>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          "& .MuiTextField-root": { my: 1, width: "45ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="full_name"
          name="full_name"
          label="Full Name"
          value={formik.values.full_name}
          onChange={formik.handleChange}
          error={formik.touched.full_name && Boolean(formik.errors.full_name)}
          helperText={formik.touched.full_name && formik.errors.full_name}
        />
        <TextField
          id="email"
          name="email"
          type="email"
          label="Email Address"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          id="password1"
          name="password1"
          type="password"
          label="Password"
          value={formik.values.password1}
          onChange={formik.handleChange}
          error={formik.touched.password1 && Boolean(formik.errors.password1)}
          helperText={formik.touched.password1 && formik.errors.password1}
        />
        <TextField
          id="password2"
          name="password2"
          type="password"
          label="Confirm Password"
          value={formik.values.password2}
          onChange={formik.handleChange}
          error={formik.touched.password2 && Boolean(formik.errors.password2)}
          helperText={formik.touched.password2 && formik.errors.password2}
        />
        <Button type="submit" fullWidth variant="contained" sx={{ my: 1 }}>
          Sign up
        </Button>
        <Box>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link
                to="/auth/login"
                className="text-blue-400 border-b border-blue-200 hover:border-blue-500"
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ my: 2 }}
        >
          {"Copyright © "}
          <Link to="#" className="border-b border-gray-400">
            KrishiDhaan
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </div>
    
  );
};

export default SignUp;
