import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

const Login = () => {
  const handleSignIn = () => {};
  return (
    <>
      <div class="flex flex-col justify-center items-center  h-screen">
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
        >
          <TextField id="outlined-basic" label="username" variant="outlined" />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ my: 2 }}
            onClick={handleSignIn}
          >
            Sign In
          </Button>
          <Box>
            <Grid container>
              <Grid xs={5}>
                <Link href="#" underline="always">
                  {"Forgot password"}
                </Link>
              </Grid>
              <Grid xs={7}>
                <Link href="#" underline="always">
                  {"Don't have an account? SignUp"}
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
            <Link color="inherit" href="https://mui.com/">
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