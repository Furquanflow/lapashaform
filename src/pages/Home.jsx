import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

// images
import  companylogo01  from "../assets/images/logo01.png"
import  companylogo02  from "../assets/images/logo02.png"
import  companylogo03  from "../assets/images/logo03.png"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Grid>
    
    <Grid className='home-sec'>
     <Container>
      <Typography variant='h1' className='home-title'>the contract 2023 class action waiver</Typography>
     <Grid container spacing={3} columns={12} className='flx-box'>

       <Grid item xs={4}>
       <Grid className='card-blk'>
        <Grid className='image-card'><img src={companylogo01}></img></Grid>
        <Typography variant='h4'>LaPasha lounge and Grill</Typography>
        <Typography variant='p'>kirkwood ops</Typography>
        <Link className='theme-btn' to={'/login'}>Get Started</Link>
       </Grid>
       </Grid>
       <Grid item xs={4}>
       <Grid className='card-blk'>
        <Grid className='image-card'><img src={companylogo02}></img></Grid>
        <Typography variant='h4'>LaPasha</Typography>
        <Typography variant='p'>kirkwood ops</Typography>
        <Link className='theme-btn' to={'/login'}>Get Started</Link>
       </Grid>
       </Grid>
       <Grid item xs={4}>
       <Grid className='card-blk'>
        <Grid className='image-card'><img src={companylogo03}></img></Grid>
        <Typography variant='h4'>Grill</Typography>
        <Typography variant='p'>kirkwood ops</Typography>
        <Link className='theme-btn' to={'/login'}>Get Started</Link>
       </Grid>
       </Grid>

     </Grid>
     </Container>
    </Grid>

    </Grid>
  )
}

export default Home