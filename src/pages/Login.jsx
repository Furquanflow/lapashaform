import React from "react";
import { Link } from "react-router-dom";
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
import companylogo01 from "../assets/images/logo01.png";
import bgcard01 from "../assets/images/bg-card-01.png";
import bgcard02 from "../assets/images/bg-card-02.png";
import bgcard03 from "../assets/images/bg-card-03.png";

const Login = () => {
  return (
    <Grid>
      <Grid className="login-pg">
        <Container>
          <Grid className="login-box">
            <img src={companylogo01}></img>
            <Grid className="login-blk">
              <Typography variant="h2">Let’s Start</Typography>
              <Box>
                <FormGroup>
                  <FormLabel>
                    <TextField
                      id="standard-basic"
                      // value={emailAddLogin}
                      // onChange={formChange}
                      label="Email Address"
                      variant="standard"
                      type="text"
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
                  <Button>
                    <Link className="theme-btn" to={"/stepform"}>
                      Login
                    </Link>
                  </Button>
                  <Button>
                    <Link className="trms-btn" to={"/"}>
                      Terms & Conditions
                    </Link>
                  </Button>
                </FormGroup>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Grid className="img-card-blk">
          <img className="bgcard1" src={bgcard01} />
          <img className="bgcard2" src={bgcard02} />
          <img className="bgcard3" src={bgcard03} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
