import React from 'react'
import { Container, Grid, TextField, Typography, FormGroup, Checkbox, FormControlLabel, Button, Radio, RadioGroup, FormControl, FormLabel } from '@mui/material'
import {useState} from 'react';

//Images
import mainlogo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';

const EmploymentInformationForm = () => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state variable
    setIsActive(current => !current);
  };

  const myClass = 'saveform';

  return (
    <Grid>
      <Grid className='form-section'>
       <Container>
        <Grid className='form-inner'>
        
        <Grid container spacing={2} columns={12} className='flx-box'>
        <Grid item xs={6}>
            <img className="brandname" src={mainlogo} alt="" />
        </Grid>
        <Grid item xs={6}>
            
        </Grid>
        </Grid>

        <Grid className='text-box'>
         <h1>Company Name New Employee Onboarding Form</h1>
        </Grid>

        <hr></hr>

        <Grid className='text-box txt-fld-space'>
         <h4>Personal Information: </h4>

        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={6}>
        <TextField className='txt-width' id="standard-basic" label="Full Name:" variant="standard" />
        </Grid>
        <Grid item xs={6}>
        <TextField className='txt-width' id="standard-basic" label="City:" variant="standard" />
        </Grid>
        <Grid item xs={6}>
        <TextField className='txt-width' id="standard-basic" label="State:" variant="standard" /> 
        </Grid>
        <Grid item xs={6}>
        <TextField className='txt-width' id="standard-basic" label="ZIP Code:" variant="standard" />
        </Grid>
        <Grid item xs={6}>
        <TextField className='txt-width' id="standard-basic" label="Phone Number:" variant="standard" /> 
        </Grid>
        <Grid item xs={6}>
        <TextField className='txt-width' id="standard-basic" label="Email Address:" variant="standard" />
        </Grid>
        <Grid item xs={12}>
        <TextField className='txt-width' id="standard-basic" label="Address:" variant="standard" /> 
        </Grid>
        </Grid>
        </Grid>

        <hr></hr>

        <Grid className='text-box txt-fld-space'>
         <h4>Emergency Contact Information:</h4>

        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Emergency Contact Name:" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Relationship:" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Phone Number:" variant="standard" /> 
        </Grid>
        </Grid>
        </Grid>

        <hr></hr>

        <Grid className='text-box txt-fld-space'>
         <h4>Employment Details:</h4>

        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={6}>
        <TextField className='txt-width' id="standard-basic" label="Start Date:" variant="standard" />
        </Grid>
        <Grid item xs={6}>
        <TextField className='txt-width' id="standard-basic" label="Department/Team:" variant="standard" />
        </Grid>
        <Grid item xs={6}>
        <TextField className='txt-width' id="standard-basic" label="Manager/Supervisor:" variant="standard" /> 
        </Grid>
        <Grid item xs={6}>
        <TextField className='txt-width' id="standard-basic" label="Employee ID (if applicable):" variant="standard" /> 
        </Grid>
        </Grid>
        </Grid>

        <hr></hr>


        <Grid className='text-box txt-fld-space'>
         <h4>Tax Information:</h4>

        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={6}>
        <TextField className='txt-width' id="standard-basic" label="Social Security Number:" variant="standard" />
        </Grid>
        <Grid item xs={6}>
        <TextField className='txt-width' id="standard-basic" label="Department/Team:" variant="standard" />
        </Grid>
        <Grid item xs={12}>
        <FormGroup className='pd-top-btm'>
          <FormControl>
           <label>Federal Tax Withholding (W-4) Status:</label>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="r1" name="radio-buttons-group">
             <Grid container spacing={3} columns={12} className='flx-box checkbox'>

      <Grid item xs={4}>
        <FormControlLabel value="Single" control={<Radio />} label="Single" />
      </Grid> 

      <Grid item xs={4}>
        <FormControlLabel value="Married" control={<Radio />} label="Married" />
      </Grid>  

      <Grid item xs={4}>
        <FormControlLabel value="Head of Household" control={<Radio />} label="Head of Household" />
      </Grid>
             </Grid>
            </RadioGroup>
          </FormControl>
         </FormGroup> 
        </Grid>
        </Grid>
        </Grid>

        <hr></hr>

        <Grid className='text-box txt-fld-space'>
         <h4>Direct Deposit Information:</h4>

        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Bank Name:" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Routing Number:" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='txt-width' id="standard-basic" label="Account Number:" variant="standard" /> 
        </Grid>
        </Grid>
        </Grid>

        <hr></hr>

        <Grid className='text-box txt-fld-space'>
         <h4>Benefit Elections:</h4>
        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={6}>
        <FormGroup className='pd-top-btm'>
          <FormControl>
           <label>Health Insurance:</label>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="r1" name="radio-buttons-group">
             <Grid container spacing={3} columns={12} className='flx-box checkbox'>
                <Grid item xs={4}>
                    <FormControlLabel value="Enroll" control={<Radio />} label="Enroll" />
                </Grid> 

                <Grid item xs={4}>
                    <FormControlLabel value="Decline" control={<Radio />} label="Decline" />
                </Grid>  
             </Grid>
            </RadioGroup>
          </FormControl>
         </FormGroup> 
        </Grid>
        <Grid item xs={6}>
        <FormGroup className='pd-top-btm'>
          <FormControl>
           <label>Dental Insurance:</label>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="r1" name="radio-buttons-group">
             <Grid container spacing={3} columns={12} className='flx-box checkbox'>
                <Grid item xs={4}>
                    <FormControlLabel value="Enroll" control={<Radio />} label="Enroll" />
                </Grid> 

                <Grid item xs={4}>
                    <FormControlLabel value="Decline" control={<Radio />} label="Decline" />
                </Grid>  
             </Grid>
            </RadioGroup>
          </FormControl>
         </FormGroup> 
        </Grid>
        <Grid item xs={6}>
        <FormGroup className='pd-top-btm'>
          <FormControl>
           <label>Vision Insurance:</label>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="r1" name="radio-buttons-group">
             <Grid container spacing={3} columns={12} className='flx-box checkbox'>
                <Grid item xs={4}>
                    <FormControlLabel value="Enroll" control={<Radio />} label="Enroll" />
                </Grid> 

                <Grid item xs={4}>
                    <FormControlLabel value="Decline" control={<Radio />} label="Decline" />
                </Grid>  
             </Grid>
            </RadioGroup>
          </FormControl>
         </FormGroup> 
        </Grid>
        <Grid item xs={6}>
        <FormGroup className='pd-top-btm'>
          <FormControl>
           <label>Retirement Plan:</label>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="r1" name="radio-buttons-group">
             <Grid container spacing={3} columns={12} className='flx-box checkbox'>
                <Grid item xs={4}>
                    <FormControlLabel value="Enroll" control={<Radio />} label="Enroll" />
                </Grid> 

                <Grid item xs={4}>
                    <FormControlLabel value="Decline" control={<Radio />} label="Decline" />
                </Grid>  
             </Grid>
            </RadioGroup>
          </FormControl>
         </FormGroup> 
        </Grid>
        </Grid>
        </Grid>
 
        <hr></hr>

        <Grid className='text-box txt-fld-space form-points'>
         <h4>Acknowledgment of Company Policies:</h4>
         <p>I acknowledge that I have received and read the following company policies and agree to abide by them:</p>
         <ul>
          <li>Employee Handbook</li>
          <li>Code of Conduct</li>
          <li>Confidentiality Agreement</li>
          <li>Safety Guidelines</li>
         </ul>
        </Grid>


        <hr></hr>


        <Grid className='text-box txt-fld-space'>
         <h4>Additional Information:</h4>
        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={12}>
        <FormGroup className='pd-top-btm'>
          <FormControl>
           <label>Do you have any allergies or medical conditions that the company should be aware of?</label>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="r1" name="radio-buttons-group">
             <Grid container spacing={3} columns={12} className='flx-box checkbox'>
                <Grid item xs={4}>
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                </Grid> 

                <Grid item xs={4}>
                    <FormControlLabel value="no" control={<Radio />} label="No If yes, please provide details:" />
                </Grid>  
             </Grid>
            </RadioGroup>
          </FormControl>
         </FormGroup> 
        </Grid>
        <Grid item xs={6}>
        <TextField className='txt-width' id="standard-basic" label="Signature:" variant="standard" />
        </Grid>
        <Grid item xs={6}>
        <TextField className='txt-width' id="standard-basic" label="Date:" variant="standard" />
        </Grid>
        <Grid item xs={12}>
        <p>By signing above, I confirm that the information provided is accurate and complete to the best of my knowledge.
         I understand that I am responsible for reviewing and complying with all company policies and procedures.</p>
         </Grid>
        </Grid>
        </Grid>


        <hr></hr>

        <Grid className='text-box txt-fld-space'>
        <p>This onboarding form covers basic employee information, tax details, direct deposit, benefit elections,
         and acknowledgment of company policies. You can customize this form to match your company's specific onboarding
          process and requirements. Additionally, it's important to keep sensitive information secure and compliant with
          data protection regulations.</p>
        </Grid>




       <Grid container spacing={3} columns={12} className='btm-button'>
       <Grid item xs={6}></Grid>
       <Grid item xs={6}>
        <Grid className='form-btns'>
         <Link to={'/stepform'} className='cancel-btn'>Cancel</Link>
         <Link to={'/stepform'} id='save-value' className='save-btn'>Save</Link>
        </Grid>
       </Grid>
       </Grid>
       </Grid>
       </Container>
      </Grid>
     </Grid>
  )
}

export default EmploymentInformationForm