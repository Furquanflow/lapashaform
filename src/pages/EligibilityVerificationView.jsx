import React from 'react'
import { Container, Grid, TextField, Typography, FormGroup, Checkbox, FormControlLabel, Button, Radio, RadioGroup, FormControl, FormLabel } from '@mui/material'


//Images
import mainlogo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';
import { Label } from '@mui/icons-material';


const EligibilityVerificationView = () => {
  return (
    <Grid>
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
             <li>OMB No.1615-0047</li>
             <li>Expires 07/31/2026</li>
            </ul>
        </Grid>
        </Grid>

        <Grid className='text-box'>
         <h1>Employment Eligibility Verification </h1>
         <h4>Department of Homeland Security </h4>
         <h6>U.S.Citizenship and Immigration Services </h6>
         <p><b>START HERE:</b> Employers must ensure the form instructions are available to employees when completing this form. Employers are liable for failing
          to comply with the requirements for completing this form. See below and the <a className="red-link" href="">Instructions</a>.</p>
          <p>ANTI-DISCRIMINATION NOTICE: All employees can choose which acceptable documentation to present for Form I-9. Employers cannot ask employees for documentation
          to verify information in</p>
          <p><b>Section 1</b>, or specify which acceptable documentation employees must present for</p>
          <p><b>Section 2</b> or Supplement B, Reverification and Rehire. Treating employees differently based on their citizenship, immigration status, or national
           origin may be illegal.</p>
        </Grid>

        <hr></hr>

        <Grid className='text-box txt-fld-space'>
         <h4>Section 1. Employee Information and Attestation: </h4>
         <p>Employees must complete and sign Section 1 of Form I-9 no later than the first day of employment, but not before accepting a job offer.</p>

        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={6}>
        <Typography className='label-name' variant='label'>Last Name :</Typography>
        <Typography className='input-value' variant='body'>Smith</Typography>
        </Grid>
        <Grid item xs={6}>
        <TextField className='txt-width' id="standard-basic" label="First Name (Given Name)" variant="standard" /> 
        </Grid>
        </Grid>
        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={6}>
        <TextField className='txt-width' id="standard-basic" label="Middle Initial (if any)" variant="standard" />
        </Grid>
        <Grid item xs={6}>
        <TextField className='txt-width' id="standard-basic" label="Other Last Names Used (if any)" variant="standard" /> 
        </Grid>
        </Grid>
        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={6}>
        <TextField className='txt-width' id="standard-basic" label="Address (Street Number and Name)" variant="standard" />
        </Grid>
        <Grid item xs={6}>
        <TextField className='txt-width' id="standard-basic" label="Apt. Number (if any)" variant="standard" /> 
        </Grid>
        </Grid>
        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="City or Town" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="State" variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="ZIP Code" variant="standard" /> 
        </Grid>
        </Grid>
        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={6}>
        <TextField className='txt-width' type='date' id="standard-basic" label="Date of Birth (mm/dd/yyyy)" variant="standard" />
        </Grid>
        <Grid item xs={6}>
        <TextField className='txt-width' id="standard-basic" label="U.S. Social Security Number" variant="standard" /> 
        </Grid>
        </Grid>
        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={6}>
        <TextField className='txt-width' id="standard-basic" label="Employee's Email Address" variant="standard" />
        </Grid>
        <Grid item xs={6}>
        <TextField className='txt-width' id="standard-basic" label="Employee's Telephone Number" variant="standard" /> 
        </Grid>
        </Grid>
        </Grid>

        <hr></hr>

        <Grid className='text-box txt-fld-space'>
         <p>I am aware that federal law provides for imprisonment and/or fines for false statements, or the use of false documents, in
          connection with the completion of this form. I attest, under penalty of perjury, that this information, including my selection
           of the box attesting to my citizenship or immigration status, is true and correct.</p>

    
    <FormGroup className='pd-top-btm'>
    <FormControl>
    <label>Check one of the following boxes to attest to your citizenship or immigration status (See page 2 and 3 of the instructions.):</label>
      <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="r1" name="radio-buttons-group">
      <Grid container spacing={3} columns={12} className='flx-box checkbox'>

      <Grid item xs={12}>
        <FormControlLabel value="r1" control={<Radio />} label="1. A citizen of the United States" />
      </Grid> 

      <Grid item xs={12}>
        <FormControlLabel value="r2" control={<Radio />} label="2. A noncitizen national of the United States (See Instructions.)" />
      </Grid>  

      <Grid item xs={6}>
        <FormControlLabel value="r3" control={<Radio />} label="3. A lawful permanent resident (Enter USCIS or A-Number.)" />
      </Grid>
      <Grid item xs={6}>
        <TextField className='txt-width' id="standard-basic" label="" variant="standard" />
      </Grid>

      <Grid item xs={8}>
        <FormControlLabel value="r4" control={<Radio />} label="4. A noncitizen (other than Item Numbers 2. and 3. above) authorized to work until (exp. date, if any)" />
      </Grid>
      <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="" variant="standard" />
      </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>
    </FormGroup>

          <FormGroup className='pd-top-btm'>
           <label>If you check Item Number 4., enter one of these:</label>
           <Grid container spacing={3} columns={12} className='flx-box checkbox'>
           <Grid item xs={3}>
           <TextField className='txt-width' id="standard-basic" label="USCIS A-Number" variant="standard" />
            </Grid>
            <Grid item xs={1}>
            <Typography variant='h5'>OR</Typography>
            </Grid>
            <Grid item xs={3}>
            <TextField className='txt-width' id="standard-basic" label="Form I-94 Admission Number" variant="standard" />
            </Grid>
            <Grid item xs={1}>
            <Typography variant='h5'>OR</Typography>
            </Grid>
            <Grid item xs={4}>
            <TextField className='txt-width' id="standard-basic" label="Foreign Passport Number and Country of Issuance" variant="standard" />
            </Grid>  
            <Grid item xs={6}>
            <TextField className='txt-width' id="standard-basic" label="Signature of Employee" variant="standard" />
            </Grid>
            <Grid item xs={6}>
            <TextField className='txt-width' id="standard-basic" label="Today's Date (mm/dd/yyyy)" variant="standard" />
            </Grid>  
          </Grid>
          <Typography variant='body' mt={5}>
          If a preparer and/or translator assisted you in completing Section 1, that person MUST complete the Preparer and/or Translator Certification on Page 3
          </Typography>
          </FormGroup>
      
        </Grid>

        <hr></hr>


        <Grid className='text-box txt-fld-space'>
        <h4>Section 2. Employer Review and Verification:</h4>
        <p>Employers or their authorized representative must complete and sign Section 2 within three business days after the employee's first day of employment,
         and must physically examine, or examine consistent with an alternative procedure authorized by the Secretary of DHS, documentation from List A OR a 
         combination of documentation from List B and List C. Enter any additional documentation in the Additional Information box; see Instructions.</p>

       <Grid container spacing={3} columns={12} className='flx-box'>

       <Grid item xs={12}>
        <Typography variant='h5' className='tag'>
         List A
        </Typography>
       </Grid>
       <Grid item xs={12}>
       <TextField className='txt-width' id="standard-basic" label="Document Title 1" variant="standard" />
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="Issuing Authority" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="Document Number (if any)" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="Expiration Date (if any)" variant="standard" /> 
       </Grid>
       <Grid item xs={12}>
       <TextField className='txt-width' id="standard-basic" label="Document Title 2 (if any)" variant="standard" />
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="Issuing Authority" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="Document Number (if any)" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="Expiration Date (if any)" variant="standard" /> 
       </Grid>
       <Grid item xs={12}>
       <TextField className='txt-width' id="standard-basic" label="Document Title 3 (if any)" variant="standard" />
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="Issuing Authority" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="Document Number (if any)" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="Expiration Date (if any)" variant="standard" /> 
       </Grid>

       <Grid item xs={12} mt={5}>
        <Typography variant='h5' className='tag'>
        List B
        </Typography>
       </Grid>
       <Grid item xs={12}>
       <TextField className='txt-width' id="standard-basic" label="Document Title 1" variant="standard" />
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="Issuing Authority" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="Document Number (if any)" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="Expiration Date (if any)" variant="standard" /> 
       </Grid>
       

       <Grid item xs={12} mt={5}>
        <Typography variant='h5' className='tag'>
        List C
        </Typography>
       </Grid>
       <Grid item xs={12}>
       <TextField className='txt-width' id="standard-basic" label="Document Title 1" variant="standard" />
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="Issuing Authority" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="Document Number (if any)" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       <TextField className='txt-width' id="standard-basic" label="Expiration Date (if any)" variant="standard" /> 
       </Grid>
       <Grid item xs={12}>
       <TextField className='txt-width' id="standard-basic" label="Additional Information" variant="standard" />
       </Grid>
       <Grid item xs={12}>
            <FormControlLabel control={<Checkbox />} label="Check here if you used an alternative procedure authorized by DHS to examine documents." />
       </Grid>



       </Grid>
       </Grid>

       <hr></hr>

       <Grid className='text-box txt-fld-space'>
        <h4>Certification:</h4>
        <p>I attest, under penalty of perjury, that (1) I have examined the documentation presented by the above-named employee, (2) the above-listed documentation
         appears to be genuine and to relate to the employee named, and (3) to the best of my knowledge, the employee is authorized to work in the United States.</p>

       <Grid container spacing={3} columns={12} className='flx-box'>
       <Grid item xs={6}>
       <TextField className='txt-width' id="standard-basic" label="First Day of Employment (mm/dd/yyyy):" variant="standard" />
       </Grid>
       <Grid item xs={6}>
       <TextField className='txt-width' id="standard-basic" label="Last Name, First Name and Title of Employer" variant="standard" /> 
       </Grid>
       <Grid item xs={6}>
       <TextField className='txt-width' id="standard-basic" label="Signature of Employer or Authorized Representative" variant="standard" /> 
       </Grid>
       <Grid item xs={6}>
       <TextField className='txt-width' id="standard-basic" label="Today's Date (mm/dd/yyyy)" variant="standard" /> 
       </Grid>
       <Grid item xs={12}>
       <TextField className='txt-width' id="standard-basic" label="Employer's Business or Organization Name" variant="standard" />
       </Grid>
       <Grid item xs={12}>
       <TextField className='txt-width' id="standard-basic" label="Employer's Business or Organization Address, City or Town, State, ZIP Code" variant="standard" /> 
       </Grid>
       <Grid item xs={12}>
       <p>For reverification or rehire, complete Supplement B, Reverification and Rehire on Page 4.</p>
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
     </Grid>
  )
}

export default EligibilityVerificationView