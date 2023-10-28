import {  Grid, Stack,Box ,Typography, Divider, LinearProgress, linearProgressClasses  } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import React  from 'react'

import { skillsData } from '../data/data';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 20,
    borderRadius: 8,
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
    
    // [`&.${linearProgressClasses.colorPrimary}`]: {
    //   backgroundColor: theme.palette.grey[100],
    // },
    // [`&.${linearProgressClasses}`]: {
    //     backgroundColor: 'inherit',
    //   },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 8,
      //backgroundColor: theme.palette.mode === 'light' ? '#308fe8' : '#308fe8',
      
    },
  }));

const Skills=() => {
  const theme = useTheme(); 
  
  return (
    <Grid  container sx={{ 
        //height: 350,  
        bgcolor: `${theme.palette.primary.white}`, 
        //color: `${theme.palette.primary.contrastText}`, 
        //textAlign: 'center',
        overflow: 'auto',
        
        }} direction="column" alignContent="center" justifyContent="center" rowSpacing={3} columnSpacing={3} padding={5} >
        <Grid item>
            <Stack direction="column">
                <Typography variant='h3' sx={{ textAlign:'center',  color: `${theme.palette.primary.contrastText}`}}>Skills Acquired</Typography>
                <Divider orientation="horizontal" variant="middle" />
            </Stack>
        </Grid>
        <Grid item container direction={{ xs:"column", md:"row" }} alignItems="stretch" justifyContent="space-around" rowSpacing={3} columnSpacing={3} padding={3}>  
        {skillsData.map((itm, idx) =>
            <Grid item key={idx}>
            <Box sx={{ maxWidth:350, minWidth:1, padding:2 }} justifySelf="stretch">
                <Stack orientation="column" >
                    <Typography variant="h6" sx={{ textAlign: 'center' , color: `${theme.palette.primary.highgreen}` }}>{itm.title}</Typography>
                    <Divider orientation="horizontal" variant="fullWidth" />
                    {itm.arr.map((it, ix) => 
                        <Stack orientation="column" key={ix}>
                            <Typography sx={{ color: `${theme.palette.text.primary}` }} >{it.name}</Typography>
                            {/* <BorderLinearProgress variant="determinate" value={it.value} color={(ix+idx)%2===0?'inherit':(ix+idx)%3===0?'success':'secondary'} /> */}
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                <BorderLinearProgress variant="determinate" value={it.value} color={(ix+idx)%2===0?'phone_blue':(ix+idx)%3===0?'success':'secondary'} />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" sx={{ color: `${theme.palette.text.primary}` }} >{`${it.value/10}/10`}</Typography>
                                </Box>
                            </Box>                            
                        </Stack>
                    )}
                </Stack>
            </Box>
            </Grid>
        )}
        </Grid>
    </Grid>
  )
}

export default Skills