import {  Grid, Stack,Box ,Typography, Divider, LinearProgress  } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React  from 'react'

const skill_ml = [ 
    {
        name:"Python",
        value: 90,
    },
    {
        name:"Pytorch",
        value: 70,
    },
    {
        name:"Ray tune",
        value: 30,
    },
    {
        name:"Lightning",
        value: 50,
    },
    ]

const skill_front = [
    {
        name:"Javascript",
        value: 30,
    },
    {
        name:"Typescript",
        value: 30,
    },
    {
        name:"Svelte",
        value: 30,
    },
    {
        name:"React",
        value: 30,
    },
]
const skill_back = [
    {
        name:"Java",
        value: 10,
    },
    
    {
        name:"C++",
        value: 50,
    },
    {
        name:"MatLAB",
        value: 98,
    },
    
    {
        name:"Springboot",
        value: 25,
    },  
    
]
const skill_cloud = [
    {
        name:"Linux",
        value: 70,
    },
    
    {
        name:"Docker",
        value: 50,
    },
    {
        name:"Collab",
        value: 40,
    },
    
    {
        name:"Aws",
        value: 55,
    },]

const demoArr = [ {title:"Machine Learning Tools", arr:skill_ml}, {title: "BackEnd Development",arr:skill_back},  {title: "FrontEnd Development",arr:skill_front}, {title:"Cloud Development ", arr:skill_cloud} ]
const Skills=() => {
  const theme = useTheme(); 
  return (
    <Grid  container sx={{ 
        //height: 350,  
        bgcolor: `${theme.palette.primary.light}`, 
        color: `${theme.palette.primary.contrastText}`, 
        //textAlign: 'center',
        overflow: 'hidden',
        
        }} direction="column" alignContent="center" justifyContent="center" rowSpacing={3} columnSpacing={3} padding={3} >
        <Grid item>
            <Stack direction="column">
                <Typography variant='h4' sx={{ textAlign:'center'}}>Skills Acquired</Typography>
                <Divider orientation="horizontal" variant="middle" />
            </Stack>
        </Grid>
        <Grid item container direction={{ xs:"column", md:"row" }} alignItems="stretch" justifyContent="space-around" rowSpacing={3} columnSpacing={3} padding={3}>  
        {demoArr.map((itm, idx) =>
            <Grid item key={idx}>
            <Box sx={{ border: '2px dashed white' , maxWidth:350, width:1, padding:2 }} justifySelf="stretch">
                <Stack orientation="column" >
                    <Typography variant="h6" sx={{ textAlign: 'center' }}>{itm.title}</Typography>
                    <Divider orientation="horizontal" variant="fullWidth" />
                    {itm.arr.map((it, ix) => 
                        <Stack orientation="column" key={ix}>
                            <Typography>{it.name}</Typography>
                            <LinearProgress variant="determinate" value={it.value} color={(ix+idx)%2===0?'inherit':(ix+idx)%3===0?'success':'secondary'} />
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