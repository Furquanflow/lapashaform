import React from 'react'
import { Container, Grid, TextField, Typography, FormGroup, Checkbox, FormControlLabel, Button } from '@mui/material'

//Images
import mainlogo from "../assets/images/logo.png";

const SupplementB = () => {
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
             <li>Supplement B</li>
             <li>OMB No.1615-0047</li>
             <li>Expires 07/31/2026</li>
            </ul>
        </Grid>
        </Grid>

        <Grid className='text-box'>
         <Typography variant='h1'>Supplement B<br></br>
         Reverification and Rehire (formerly Section 3) 
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
         <p><b>Instructions:</b> This supplement replaces Section 3 on the previous version of Form I-9. Only use this page if your employee requires 
         reverification, is rehired within three years of the date the original Form I-9 was completed, or provides proof of a legal name change. Enter 
         the employee's name in the fields above. Use a new section for each reverification or rehire. Review the Form I-9 instructions before 
         completing this page. Keep this page as part of the employee's Form I-9 record. Additional guidance can be found in the  
          <a className="red-link" href=""> Handbook for Employers: Guidance for Completing Form I-9 (M-274)</a></p>
        </Grid>
        </Grid>
        </Grid>

        <hr></hr>

        <Grid className='text-box txt-fld-space'>
        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={2}>
        <TextField className='txt-width' id="standard-basic" label="Date of Rehire (if applicable)" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Last Name (Family Name)" variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Last Name (Family Name)" variant="standard" />
        </Grid>
        <Grid item xs={2}>
        <TextField className='txt-width' id="standard-basic" label="Middle Initial" variant="standard" /> 
        </Grid>
        <Grid item xs={12}>
        <Typography variant='body'>
        <b>Reverification:</b> If the employee requires reverification, your employee can choose to present any acceptable List A or List C documentation to show 
        continued employment authorization. Enter the document information in the spaces below.         
        </Typography>
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Document Title" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Document Number (if any)" variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Expiration Date (if any) (mm/dd/yyyy)" variant="standard" />
        </Grid>
        <Grid item xs={12}>
        <Typography variant='body'>
        I attest, under penalty of perjury, that to the best of my knowledge, this employee is authorized to work in the United States, and if the 
         employee presented documentation, the documentation I examined appears to be genuine and to relate to the individual who presented it.          
        </Typography>
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Name of Employer or Authorized Representative" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Signature of Employer or Authorized Representative" variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Today's Date (mm/dd/yyyy)" variant="standard" />
        </Grid>

        <Grid item xs={12} mt={4}>
        <Typography variant='body'>
        Additional Information (Initial and date each notation.)           
        </Typography>
        </Grid>
        <Grid item xs={12}>
            <FormControlLabel control={<Checkbox />} label="Check here if you used an alternative procedure authorized by DHS to examine documents." />
        </Grid>
        </Grid>
        </Grid>

        <hr></hr>

        <Grid className='text-box txt-fld-space'>
        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={2}>
        <TextField className='txt-width' id="standard-basic" label="Date of Rehire (if applicable)" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Last Name (Family Name)" variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Last Name (Family Name)" variant="standard" />
        </Grid>
        <Grid item xs={2}>
        <TextField className='txt-width' id="standard-basic" label="Middle Initial" variant="standard" /> 
        </Grid>
        <Grid item xs={12}>
        <Typography variant='body'>
        <b>Reverification:</b> If the employee requires reverification, your employee can choose to present any acceptable List A or List C documentation to show 
        continued employment authorization. Enter the document information in the spaces below.         
        </Typography>
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Document Title" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Document Number (if any)" variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Expiration Date (if any) (mm/dd/yyyy)" variant="standard" />
        </Grid>
        <Grid item xs={12}>
        <Typography variant='body'>
        I attest, under penalty of perjury, that to the best of my knowledge, this employee is authorized to work in the United States, and if the 
         employee presented documentation, the documentation I examined appears to be genuine and to relate to the individual who presented it.          
        </Typography>
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Name of Employer or Authorized Representative" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Signature of Employer or Authorized Representative" variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Today's Date (mm/dd/yyyy)" variant="standard" />
        </Grid>

        <Grid item xs={12} mt={4}>
        <Typography variant='body'>
        Additional Information (Initial and date each notation.)           
        </Typography>
        </Grid>
        <Grid item xs={12}>
            <FormControlLabel control={<Checkbox />} label="Check here if you used an alternative procedure authorized by DHS to examine documents." />
        </Grid>
        </Grid>
        </Grid>

        <hr></hr>

        <Grid className='text-box txt-fld-space'>
        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={2}>
        <TextField className='txt-width' id="standard-basic" label="Date of Rehire (if applicable)" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Last Name (Family Name)" variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Last Name (Family Name)" variant="standard" />
        </Grid>
        <Grid item xs={2}>
        <TextField className='txt-width' id="standard-basic" label="Middle Initial" variant="standard" /> 
        </Grid>
        <Grid item xs={12}>
        <Typography variant='body'>
        <b>Reverification:</b> If the employee requires reverification, your employee can choose to present any acceptable List A or List C documentation to show 
        continued employment authorization. Enter the document information in the spaces below.         
        </Typography>
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Document Title" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Document Number (if any)" variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Expiration Date (if any) (mm/dd/yyyy)" variant="standard" />
        </Grid>
        <Grid item xs={12}>
        <Typography variant='body'>
        I attest, under penalty of perjury, that to the best of my knowledge, this employee is authorized to work in the United States, and if the 
         employee presented documentation, the documentation I examined appears to be genuine and to relate to the individual who presented it.          
        </Typography>
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Name of Employer or Authorized Representative" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Signature of Employer or Authorized Representative" variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Today's Date (mm/dd/yyyy)" variant="standard" />
        </Grid>

        <Grid item xs={12} mt={4}>
        <Typography variant='body'>
        Additional Information (Initial and date each notation.)           
        </Typography>
        </Grid>
        <Grid item xs={12}>
            <FormControlLabel control={<Checkbox />} label="Check here if you used an alternative procedure authorized by DHS to examine documents." />
        </Grid>
        </Grid>
        </Grid>




        <Grid container spacing={3} columns={12} className='btm-button'>
        <Grid item xs={6}><Button variant="contained" className='left-btn' href="/supplementa">Prev</Button></Grid>
        <Grid item xs={6}></Grid>
        </Grid>
        </Grid>
       </Container>
      </Grid>
     </div>
  )
}

export default SupplementB