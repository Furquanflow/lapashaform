import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

// Images
import  pdfimg  from "../assets/images/pdf.png"
import  uploadimg  from "../assets/images/upload.png"

const StepForm = () => {
  return (
    <Grid>
    
    <Grid className='step-form-sec'>
     <Container>
     
     <Grid className='step-bar'>
      <Grid className='step-flx step-active'>
       <Typography variant='b'>01</Typography>
       <Typography variant='h5'>Step</Typography>
      </Grid>
      <Grid className='step-flx'>
       <Typography variant='b'>02</Typography>
       <Typography variant='h5'>Step</Typography>
      </Grid>
      <Grid className='step-flx'>
       <Typography variant='b'>03</Typography>
       <Typography variant='h5'>Step</Typography>
      </Grid>
      <Grid className='step-flx'>
       <Typography variant='b'>04</Typography>
       <Typography variant='h5'>Step</Typography>
      </Grid>
     </Grid>

     <Grid className='step-opt-main'>
      <Grid className='step-opt step-opt-active'>
      <Grid className='step-opt-title'>
      <img src={pdfimg} alt='' />
      <Typography variant='h6'>Employment information form</Typography>
      </Grid>
      <Link to={'/employmentinformationform'}>Edit</Link>
      </Grid>

      <Grid className='step-opt'>
      <Grid className='step-opt-title'>
      <img src={pdfimg} alt='' />
      <Typography variant='h6'>Policy 20223-06-12 Employee Manual</Typography>
      </Grid>
      <Link to={'/'}>Edit</Link>
      </Grid>

      <Grid className='step-opt'>
      <Grid className='step-opt-title'>
      <img src={pdfimg} alt='' />
      <Typography variant='h6'>Contract 2023-04-12 Class Action Waiver Krikwood Ops</Typography>
      </Grid>
      <Link to={'/'}>Edit</Link>
      </Grid>

      <Grid className='step-opt'>
      <Grid className='step-opt-title'>
      <img src={pdfimg} alt='' />
      <Typography variant='h6'>i-9</Typography>
      </Grid>
      <Link to={'/eligibilityverification'}>Edit</Link>
      </Grid>
     </Grid>

     <Grid className='btm-nxt-sec'>
       <Grid className='file-upload'>
       <input type='file' />
        <Typography variant='body'><img src={uploadimg} alt='' /></Typography>
        <Grid className='file-upload-txt'>
         <Typography variant='h4'>Upload Your Pictures</Typography>
         <Link className='theme-btn'>Upload</Link>
        </Grid>
       </Grid>
       <Grid className='steps'>
        <Link className='next-btn'>Next</Link>
        <Link className='finish-btn'>Submit</Link>
       </Grid>
     </Grid>

     </Container>
    </Grid>
    
    </Grid>
  )
}

export default StepForm