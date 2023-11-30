import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSignUp = () => {};

  return (
    <>
      <div className="flex flex-col justify-center items-center  h-screen">
        <Avatar
          alt="Travis Howard"
          src="https://imgs.search.brave.com/Q65UA21kSm1jTRqAYCFhO4oVDY9NE3oRUylQVa2XppY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMC8w/OS8xOC8xNS8zMi9j/cm9wLTU1ODIxNDFf/XzM0MC5qcGc"
          sx={{ width: 90, height: 90 }}
        />
        <Typography component="h1" variant="h5" my={2}>
          SignUp
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
        >
          <TextField id="outlined-basic" label="Full Name" variant="outlined" />
          <TextField
            id="outlined-email-input"
            label="Email Address"
            type="email"
            autoComplete="email"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ my: 2 }}
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
          <Box>
            <Grid container justifyContent={"flex-end"}>
              <Grid item>
                <Link
                  to="/"
                  className="text-blue-600 border-b border-blue-300 hover:border-blue-600"
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

export default SignUp;
