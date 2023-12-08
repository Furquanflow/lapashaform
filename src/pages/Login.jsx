import React from "react";

//Router Dom
import { Link } from "react-router-dom";

//Mui Design library
import {
  Box,
  Button,
  Container,
  FormLabel,
  Grid,
  TextField,
  Typography
} from "@mui/material";

// Images
import companyLogo01 from "../assets/images/logo01.png";
import bgCard01 from "../assets/images/bg-card-01.png";
import bgCard02 from "../assets/images/bg-card-02.png";
import bgCard03 from "../assets/images/bg-card-03.png";

const Login = ({ registerPage, onLogin, authFunc, email, password }) => {
  return (
    <Grid>
      <Grid className="login-pg">
        <Container>
          <Grid className="login-box">
            <img src={companyLogo01} alt="companyLogo01" />
            <Grid className="login-blk">
              <Typography variant="h2">Let’s Start</Typography>
              <Box component="form" onSubmit={onLogin}>
                <FormLabel>
                  <TextField
                    value={email}
                    name="email"
                    onChange={authFunc}
                    label="Email Address"
                    variant="standard"
                    type="email"
                    required
                  />
                </FormLabel>
                <TextField
                  value={password}
                  name="password"
                  onChange={authFunc}
                  autoComplete="true"
                  label="Password"
                  variant="standard"
                  type="password"
                  required
                />
                <Grid>
                  <Button
                    variant="contained"
                    className="theme-btn"
                    type="submit"
                  >
                    Login
                  </Button>
                </Grid>
                <Grid mt={2}>
                  <Link to={registerPage}>
                    <Button sx={{ width: "100%" }}>Register</Button>
                  </Link>
                </Grid>
                <Button>
                  <Link className="trms-btn" to={"/"}>
                    Terms & Conditions
                  </Link>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Grid className="img-card-blk">
          <img className="bgcard1" src={bgCard01} alt="bgCard01" />
          <img className="bgcard2" src={bgCard02} alt="bgCard02" />
          <img className="bgcard3" src={bgCard03} alt="bgCard03" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
