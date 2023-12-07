import React from "react";

//material Ui Design Component
import {Box, Button, TextField, Grid, Paper, TableRow, TableHead, TableContainer, Table, TableBody, Typography } from '@mui/material';

import {StyledTableRow, StyledTableCell} from "../../functions/SpareFunctions"

const LapashaLoungeAndGrill = ({lapashaData}) => {
  return(
    <>
    <Box sx={{background: "#fff", padding: "40px", borderRadius: "20px"}}>
    <Grid mb={4}>
    <Typography variant="subtitle1">Lapasha Lounge And Grill</Typography>
    </Grid>
      <TextField fullWidth label="Search ..." id="fullWidth" />
      <Grid mt={5}>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Employee Name</StyledTableCell>
            <StyledTableCell align="right">Email Address</StyledTableCell>
            <StyledTableCell align="right">Phone Number</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Edit Form</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lapashaData && lapashaData.map((row) => (
              <StyledTableRow key={row.name} >
                <StyledTableCell component="th" scope="row">
                  {row.fNamePerInfo} {row.lnamePerInfo}
                </StyledTableCell>
                <StyledTableCell align="right">{row.emailAddPerInfo}</StyledTableCell>
                <StyledTableCell align="right">{row.phoneNoPerInfo}</StyledTableCell>
                <StyledTableCell align="right">{row.addPerInfo}</StyledTableCell>
                <Grid>
                <Button variant="contained" sx={{float: "right", background: "#b49a53", margin: "5px", "&:hover": {
                  background: "#b49a53"
                }}}>Edit</Button>
                </Grid>
              </StyledTableRow> 
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Grid>
    </Box>
    </>
  );
};

export default LapashaLoungeAndGrill;
