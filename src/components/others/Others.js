import { Divider, Grid, Rating, Stack, SvgIcon, Typography  } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useState, useEffect }  from 'react'

import { BookIcon, CricketIcon, SpaceIcon, SwimIcon, TrekIcon, FluteIcon, PianoIcon, GuitarIcon, MicIcon, BrainIcon } from '../../images/SvgImages';



const langArr = [
    {
        id:3,
        title:'English',
        score:5,
    },
    {
        id:1,
        title:'Bengali',
        score:4.5,
    },
    {   
        id:2,
        title:'Hindi',
        score:3.5,
    },
    {
        id:4,
        title:'Deutsch',
        score:1,
    }
]

const Others = () => {
  const theme = useTheme(); 
  return (
    <Grid  container sx={{ 
        minHeight: 350,  
        bgcolor: `${theme.palette.primary.light}`, 
        color: `${theme.palette.primary.contrastText}`, 
        //textAlign: 'center',
        overflow: 'auto',
        
        }} direction={{ xs:'column', sm:'row'}} alignContent="center" justifyContent="center" columnSpacing={9} rowSpacing={6} padding={5} >
        <Grid item>
            <Stack direction="column" spacing={3}>
                <Typography variant='h5'> Languages </Typography>
                <Divider variant="fullWidth" orientation="horizontal" />
                {langArr.map((it, ix) => 
                <Stack direction="column" spacing={0} key={ix}>
                    <Typography variant='h6' >{it.title}</Typography>
                    <Rating name={it.title} value={it.score} readOnly precision={0.5}  size="large" />
                </Stack>
                )}
            </Stack>
        </Grid>
        <Grid item>
            <Stack direction="column" spacing={3}>
                <Typography variant='h5'> Hobbies </Typography>
                <Divider variant="middle" orientation="horizontal" />
                <Grid item container columnSpacing={0} rowSpacing={2} columns={{ xs: 3, md:3 }} 
                    justifyContent="center" alignItems="center">
                    <Grid item xs={1} md={1}>
                        <BookIcon />
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <BrainIcon />
                    </Grid>
                    <Grid item xs={1} md={1} >
                        <SpaceIcon />
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <SwimIcon />
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <CricketIcon />
                    </Grid>
                    <Grid item xs={1} md={1} >
                        <TrekIcon />
                    </Grid>
                    <Grid item xs={1} md={1} >
                        <GuitarIcon />
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <FluteIcon />
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <PianoIcon />
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <MicIcon />
                    </Grid>
                </Grid>
            </Stack>

        </Grid>
    </Grid>
  )
}

export default Others