import React from "react";
import { useFormik } from "formik";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";
import SignInSchema from "../validation-schemas/SignInSchema";

const Login = () => {
  const navigate = useNavigate(); //initializing the navigate variable using the useNavigate hook from React Router
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: SignInSchema,
    onSubmit: (values) => {
      console.log(values);
      navigate("/home");
    },
  });

  return (
    <>
      <div className="flex flex-col justify-center items-center  h-screen">
        <Avatar
          alt="Travis Howard"
          src="https://imgs.search.brave.com/Q65UA21kSm1jTRqAYCFhO4oVDY9NE3oRUylQVa2XppY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMC8w/OS8xOC8xNS8zMi9j/cm9wLTU1ODIxNDFf/XzM0MC5qcGc"
          sx={{ width: 90, height: 90 }}
        />
        <Typography component="h1" variant="h5" my={2}>
          Sign in
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            // .MuiTextField-root that are descendants of the <Box>. It sets a margin of 1 (using m: 1) and a width of '25ch' to these elements.
            "& .MuiTextField-root": { my: 1, width: "45ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ my: 2 }}>
            Sign In
          </Button>
          <Box>
            <Grid container>
              <Grid item xs={5}>
                <Link
                  to="#"
                  className="text-blue-400 border-b border-blue-200 hover:border-blue-500"
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs={7}>
                <Link
                  to="/auth/signUp"
                  className="text-blue-400 border-b border-blue-200 hover:border-blue-500"
                >
                  Don't have an account? SignUp
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ mt: 4, mb: 4 }}
          >
            {"Copyright © "}
            <Link to="#" className="border-b border-gray-400">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </div>
    </>
  );
};

export default Login;
