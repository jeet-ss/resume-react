import { Divider, Grid, Rating, Stack, SvgIcon, Typography, Box,  } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useState, useEffect }  from 'react'

import { BookIcon, CricketIcon, SpaceIcon, SwimIcon, TrekIcon, FluteIcon, PianoIcon, GuitarIcon, MicIcon, BrainIcon } from '../../images/SvgImages';


const hobbiesArr = [   {id:1, title:'Books', icon:<BookIcon />},{id:2, title:'Brain', icon:<BrainIcon />},{id:3, title:'Space', icon:<SpaceIcon />},
                    {id:4, title:'Swim', icon:<SwimIcon />},{id:5, title:'Cricket', icon:<CricketIcon />},{id:6, title:'Trek', icon:<TrekIcon />},
                    {id:7, title:'Guitar', icon:<GuitarIcon />},{id:8, title:'Flute', icon:<FluteIcon />},{id:9, title:'Books', icon:<PianoIcon />},
                    {id:10, title:'Mic', icon:<MicIcon />},
                ]

const langArr = [
    { id:2, title:'English', score:5, }, { id:1, title:'Bengali', score:4.5, },
    { id:3, title:'Hindi', score:3.5, }, { id:4, title:'Deustch', score:1, }
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
        
        }} direction={{ xs:'column', sm:'row'}} alignContent="center" justifyContent="space-evenly" columnSpacing={5} rowSpacing={6} padding={5} >
        <Grid item>
            <Stack direction="column" spacing={3}>
                <Typography variant='h5'sx={{  textAlign: 'center' }}> Languages </Typography>
                <Divider variant="middle" orientation="horizontal" />
                <Grid item container columns={4} alignItems="flex-start" justifyContent="space-between" >
                {langArr.sort((a,b)=>a.id>b.id?1:-1).map((it, ix) => 
                <Grid item key={ix} xs={4} sm={2}  >
                <Stack direction="column" spacing={0} alignItems="center" >
                    <Typography variant='h6' >{it.title}</Typography>
                    <Rating name={it.title} value={it.score} readOnly precision={0.5}  size="large" />
                </Stack>
                </Grid>
                )}
                </Grid>
            </Stack>
        </Grid>
        <Grid item>
            <Stack direction="column" spacing={3}  >
                <Typography variant='h5' sx={{  textAlign: 'center' }}> Hobbies </Typography>
                <Divider variant="middle" orientation="horizontal" />
                <Grid item container columnSpacing={0} rowSpacing={2} columns={3} 
                    justifyContent="center" alignItems="center">
                        {hobbiesArr.map((itm, idx) => 
                            <Grid item key={idx} xs={1} md={1} justifyContent="center" textAlign="center"  >
                                {itm.icon}
                            </Grid>
                        )}
                </Grid>
            </Stack>
        </Grid>
    </Grid>
  )
}

export default Others