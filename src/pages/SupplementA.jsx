import React from 'react'
import { Container, Grid, TextField, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom';

//Images
import mainlogo from "../assets/images/logo.png";

const SupplementA = () => {
  return (
    <div>
      <Grid className='form-section'>
       <Container>
        <Grid className='form-inner'>
        
        <Grid container spacing={2} columns={16} className='flx-box'>
        <Grid item xs={8}>
            <img className="brandname" src={mainlogo} alt="" />
        </Grid>
        <Grid item xs={8}>
            <ul className="hdr-date">
             <li>USCIS</li>
             <li>Form I-9</li>
             <li>Supplement A</li>
             <li>OMB No.1615-0047</li>
             <li>Expires 07/31/2026</li>
            </ul>
        </Grid>
        </Grid>

        <Grid className='text-box'>
         <Typography variant='h1'>Supplement A<br></br>
         Preparer and/or Translator Certification for Section 1
         </Typography>
         <h4>Department of Homeland Security </h4>
         <h6>U.S.Citizenship and Immigration Services </h6>
        </Grid>

        <hr></hr>

        <Grid className='text-box txt-fld-space'>
        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Last Name (Family Name) from Section 1." variant="standard" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="First Name (Given Name) from Section 1." variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Middle initial (if any) from Section 1." variant="standard" /> 
        </Grid>
        <Grid item xs={12}>
         <p><b>Instructions:</b> This supplement must be completed by any preparer and/or translator who assists an employee in completing Section 1 
         of Form I-9. The preparer and/or translator must enter the employee's name in the spaces provided above. Each preparer or translator 
         must complete, sign, and date a separate certification area. Employers must retain completed supplement sheets with the employee's 
         completed Form I-9. </p>
        </Grid>
        </Grid>
        </Grid>

        <hr></hr>


       <Grid className='text-box txt-fld-space'>
        <h3>I attest, under penalty of perjury, that I have assisted in the completion of Section 1 of this form and that to the best of my 
        knowledge the information is true and correct. </h3>

       <Grid container spacing={3} columns={12} className='flx-box'>
       <Grid item xs={8}>
       <TextField className='txt-width' id="standard-basic" label="Signature of Preparer or Translator" variant="standard" />
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="Date (mm/dd/yyyy)" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="Last Name (Family Name)  " variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="First Name (Given Name) " variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="Middle Initial (if any)" variant="standard" />
       </Grid>
       <Grid item xs={5}>
       <TextField className='txt-width' id="standard-basic" label="Address (Street Number and Name) " variant="standard" /> 
       </Grid>
       <Grid item xs={3}>
       <TextField className='txt-width' id="standard-basic" label="City or Town " variant="standard" /> 
       </Grid>
       <Grid item xs={2}>
       <TextField className='txt-width' id="standard-basic" label="State" variant="standard" /> 
       </Grid>
       <Grid item xs={2}>
       <TextField className='txt-width' id="standard-basic" label="ZIP Code " variant="standard" />
       </Grid>

       </Grid>
       </Grid>

       <hr></hr>

       <Grid className='text-box txt-fld-space'>
        <h3>I attest, under penalty of perjury, that I have assisted in the completion of Section 1 of this form and that to the best of my 
        knowledge the information is true and correct.</h3>

       <Grid container spacing={3} columns={12} className='flx-box'>
       <Grid item xs={8}>
       <TextField className='txt-width' id="standard-basic" label="Signature of Preparer or Translator" variant="standard" />
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="Date (mm/dd/yyyy)" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="Last Name (Family Name)  " variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="First Name (Given Name) " variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="Middle Initial (if any)" variant="standard" />
       </Grid>
       <Grid item xs={5}>
       <TextField className='txt-width' id="standard-basic" label="Address (Street Number and Name) " variant="standard" /> 
       </Grid>
       <Grid item xs={3}>
       <TextField className='txt-width' id="standard-basic" label="City or Town " variant="standard" /> 
       </Grid>
       <Grid item xs={2}>
       <TextField className='txt-width' id="standard-basic" label="State" variant="standard" /> 
       </Grid>
       <Grid item xs={2}>
       <TextField className='txt-width' id="standard-basic" label="ZIP Code " variant="standard" />
       </Grid>

       </Grid>
       </Grid>

       <hr></hr>


       <Grid className='text-box txt-fld-space'>
        <h3>I attest, under penalty of perjury, that I have assisted in the completion of Section 1 of this form and that to the best of my 
        knowledge the information is true and correct.</h3>

       <Grid container spacing={3} columns={12} className='flx-box'>
       <Grid item xs={8}>
       <TextField className='txt-width' id="standard-basic" label="Signature of Preparer or Translator" variant="standard" />
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="Date (mm/dd/yyyy)" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="Last Name (Family Name)  " variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="First Name (Given Name) " variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="Middle Initial (if any)" variant="standard" />
       </Grid>
       <Grid item xs={5}>
       <TextField className='txt-width' id="standard-basic" label="Address (Street Number and Name) " variant="standard" /> 
       </Grid>
       <Grid item xs={3}>
       <TextField className='txt-width' id="standard-basic" label="City or Town " variant="standard" /> 
       </Grid>
       <Grid item xs={2}>
       <TextField className='txt-width' id="standard-basic" label="State" variant="standard" /> 
       </Grid>
       <Grid item xs={2}>
       <TextField className='txt-width' id="standard-basic" label="ZIP Code " variant="standard" />
       </Grid>

       </Grid>
       </Grid>

       <hr></hr>


       <Grid className='text-box txt-fld-space'>
        <h3>I attest, under penalty of perjury, that I have assisted in the completion of Section 1 of this form and that to the best of my 
        knowledge the information is true and correct.</h3>

       <Grid container spacing={3} columns={12} className='flx-box'>
       <Grid item xs={8}>
       <TextField className='txt-width' id="standard-basic" label="Signature of Preparer or Translator" variant="standard" />
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="Date (mm/dd/yyyy)" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="Last Name (Family Name)  " variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="First Name (Given Name) " variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="Middle Initial (if any)" variant="standard" />
       </Grid>
       <Grid item xs={5}>
       <TextField className='txt-width' id="standard-basic" label="Address (Street Number and Name) " variant="standard" /> 
       </Grid>
       <Grid item xs={3}>
       <TextField className='txt-width' id="standard-basic" label="City or Town " variant="standard" /> 
       </Grid>
       <Grid item xs={2}>
       <TextField className='txt-width' id="standard-basic" label="State" variant="standard" /> 
       </Grid>
       <Grid item xs={2}>
       <TextField className='txt-width' id="standard-basic" label="ZIP Code " variant="standard" />
       </Grid>

       </Grid>
       </Grid>



       <Grid container spacing={3} columns={12} className='btm-button'>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
         <Grid className='form-btns'>
          <Link to={'/stepform'} className='cancel-btn'>Cancel</Link>
          <Link to={'/stepform'} className='save-btn'>Save</Link>
         </Grid>
        </Grid>
        </Grid>

        </Grid>
       </Container>
      </Grid>
     </div>
  )
}

export default SupplementA