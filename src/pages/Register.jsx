import React from "react";

//Router Dom
import { Link } from "react-router-dom";

//Mui Design library
import {
  Box,
  Button,
  Container,
  FormGroup,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

// Images
import companyLogo01 from "../assets/images/logo01.png";
import bgCard01 from "../assets/images/bg-card-01.png";
import bgCard02 from "../assets/images/bg-card-02.png";
import bgCard03 from "../assets/images/bg-card-03.png";

const Login = ({ registerForm }) => {
  return (
    <Grid>
      <Grid className="login-pg">
        <Container>
          <Grid className="login-box">
            <img src={companyLogo01} />
            <Grid className="login-blk">
              <Typography variant="h2">Let’s Start</Typography>
              <Box>
                <FormGroup>
                  <FormLabel>
                    <TextField
                      id="standard-basic"
                      // value={emailAddLogin}
                      // onChange={formChange}
                      label="User Name"
                      variant="standard"
                      type="text"
                    />
                  </FormLabel>
                  <FormLabel>
                    <TextField
                      id="standard-basic"
                      // value={emailAddLogin}
                      // onChange={formChange}
                      label="Email Address"
                      variant="standard"
                      type="email"
                    />
                  </FormLabel>
                  <FormLabel>
                    <TextField
                      id="standard-basic"
                      // value={passLogin}
                      // onChange={formChange}
                      label="Password"
                      variant="standard"
                      type="password"
                    />
                  </FormLabel>
                  <Button
                    variant="contained"
                    className="theme-btn"
                    onClick={registerForm}
                  >
                    Register
                  </Button>
                  <Link className="trms-btn" to={""}>
                    Terms & Conditions
                  </Link>
                </FormGroup>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Grid className="img-card-blk">
          <img className="bgcard1" src={bgCard01} />
          <img className="bgcard2" src={bgCard02} />
          <img className="bgcard3" src={bgCard03} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;