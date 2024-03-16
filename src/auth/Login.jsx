import React from "react";
import { toast } from "react-toastify";
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
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignInSchema,
    onSubmit: async (values, action) => {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/rest-auth/login/",
          values,
        );
        if (response.status === 200) {
          toast.success("Login Successful!");
          action.resetForm();
          action.setSubmitting(false);
          const { key } = response.data;
          // Save the key to cookies
          Cookies.set("auth", key);
          fetchAndNavigateToHome();
        }
      } catch (error) {
        if (error.response) {
          const errorMessage = error.response.data.non_field_errors[0];
          toast.error(errorMessage);
        } else {
          toast.error("Login Unsuccessful!");
        }
      }
    },
  });
  // Function to fetch user profile data and navigate to home
  const fetchAndNavigateToHome = async () => {
    try {
      const authToken = Cookies.get("auth");
      const response = await axios.get(
        "http://127.0.0.1:8000/accounts/profile/",
        {
          headers: {
            Authorization: `Token ${authToken}`,
          },
        }
      );
      const userProfile = response.data.profile;
      Cookies.set("userDetails", JSON.stringify(userProfile));
      navigate("/"); 
    } catch (error) {}
  };

  return (
      <div className="flex flex-col justify-center items-center w-2/6 h-[680px] mt-12 mx-auto bg-slate-50">
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
            label="Email"
            variant="outlined"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
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
              KrishiDhaan
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
        </div>
  );
};

export default Login;
