import {  Grid, Stack,Box ,Typography, Divider, LinearProgress, linearProgressClasses, SvgIcon, IconButton, Paper  } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import React  from 'react'

import { pdata, schoolData } from '../../data/data';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 40,
    borderRadius: 1,
    //backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
    backgroundColor: 'inherit',
    
    // [`&.${linearProgressClasses.colorPrimary}`]: {
    //   backgroundColor: theme.palette.grey[100],
    // },
    // [`&.${linearProgressClasses}`]: {
    //     backgroundColor: 'inherit',
    //   },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      //backgroundColor: theme.palette.mode === 'light' ? '#308fe8' : '#308fe8',
      
    },
  }));

  const BarShape2 = styled((props) => {
    //const { tits, ...other } = props;
    console.log("width", props)
    return (
      // <Paper sx={{ m: 1, width: 20, height: 100 }} elevation={4}>
        <svg>
          {/* <Box
            component="polygon"
            points="00 50, 100 50, 100 100, 00 100,00"
            sx={{
              fill: (theme) => theme.palette.secondary.light,
              stroke: (theme) => theme.palette.divider,
              strokeWidth: 1,
              width: 233
            }}
          /> */}
          <rect y='70' width='75%' height='20' fill="#111315" />
        </svg>
      // </Paper>
    );
  })(({ theme, expanded }) => ({
    //transform: !expanded ? 'rotate(0deg)' : 'rotate(180deg)',
    //marginLeft: 'auto',
    // transition: theme.transitions.create('transform', {
    //   duration: theme.transitions.duration.shortest,
    // }),
  }));
  const BarShape =(props)=>{
    //const { widthId, ...other} = props;
    console.log("width2",  props)
    return (
        // <Paper sx={{ m: 1, width: 20, height: 100 }} elevation={4}>
          <svg width='300' height='40' >
            {/* <Box
              component="polygon"
              points="00 50, 100 50, 100 100, 00 100,00"
              sx={{
                fill: (theme) => theme.palette.secondary.light,
                stroke: (theme) => theme.palette.divider,
                strokeWidth: 1,
                width: 233
              }}
            /> */}
            <rect y='0' x={props.ty} width={props.tits} height='30' fill="#3E50B5" />
          </svg>
        // </Paper>
      );
  } 

const Education=() => {
  const theme = useTheme(); 
  
  return (
      <Grid  container sx={{ 
        //height: 350,  
        bgcolor: `${theme.palette.primary.light}`, 
        color: `${theme.palette.primary.contrastText}`, 
        textAlign: 'center',
        overflow: 'auto',
      }} direction="column" alignContent="center" justifyContent="center" rowSpacing={4} columnSpacing={3} padding={2} >
        <Grid item>
             <Stack direction="column">
                 <Typography variant='h4' sx={{ textAlign:'center'}}>Education</Typography>
                 <Divider orientation="horizontal" variant="middle" />
             </Stack>
        </Grid>
        {schoolData.map((it, ix) =>
          <Grid item key={ix}>
            <Stack direction="column" sx={{ marginBottom:4 }}>
              <Typography variant='body2'>{it.year}</Typography>
              <Typography variant='h6'>{it.degree}</Typography>
              <Typography variant="h5" >{it.title}</Typography>
                <IconButton>
                    <SvgIcon fontSize='large'>
                    <svg  viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <g id="Flat">
                        <g id="Color">
                        <polygon fill="#212529" points="8.26 3 25.94 33.62 38.06 26.62 24.42 3 8.26 3"/>
                        <path d="M38.06,26.62l-7.21-12.5-3.72,6.44a21.53,21.53,0,0,0-7,3l5.8,10Z" fill="#111315"/>
                        <polygon fill="#dd051d" points="34.6 28.62 29.4 31.62 12.87 3 19.8 3 34.6 28.62"/>
                        <polygon fill="#212529" points="39.58 3 25.94 26.62 38.06 33.62 55.74 3 39.58 3"/>
                        <path d="M34.6,28.62l-6.06-10.5-1.42,2.46a21.44,21.44,0,0,0-3.46,1.1l5.74,9.94Z" fill="#a60416"/>
                        <path d="M43.86,23.58a21.46,21.46,0,0,0-14.17-3.45l-3.75,6.49,12.12,7Z" fill="#111315"/>
                        <polygon fill="#dd051d" points="51.13 3 34.6 31.62 29.4 28.62 44.2 3 51.13 3"/>
                        <path d="M34.6,31.62l5.74-9.94a21.41,21.41,0,0,0-6-1.55L29.4,28.62Z" fill="#a60416"/>
                        <circle cx="32" cy="41.5" fill="#fccd1d" r="19.5"/>
                        <circle cx="32" cy="41.5" fill="#f9a215" r="14.5"/>
                        <path d="M33.37,34l1.52,2.63a1.54,1.54,0,0,0,1.06.76L39,38a1.53,1.53,0,0,1,.85,2.56l-2.1,2.22a1.5,1.5,0,0,0-.4,1.22l.36,3a1.57,1.57,0,0,1-2.22,1.58l-2.81-1.27a1.6,1.6,0,0,0-1.32,0l-2.81,1.27A1.57,1.57,0,0,1,26.31,47l.36-3a1.5,1.5,0,0,0-.4-1.22l-2.1-2.22A1.53,1.53,0,0,1,25,38l3-.59a1.54,1.54,0,0,0,1.06-.76L30.63,34A1.59,1.59,0,0,1,33.37,34Z" fill="#fccd1d"/>
                        </g>
                        </g>
                    </svg>
                    </SvgIcon>
                </IconButton>     
                <Typography variant="body1" >{it.marks}</Typography>   
            </Stack>
          </Grid>
        )}
        
        </Grid>
  )

  // return (
  //   <Grid  container sx={{ 
  //       //height: 350,  
  //       bgcolor: `${theme.palette.primary.light}`, 
  //       color: `${theme.palette.primary.contrastText}`, 
  //       textAlign: 'center',
  //       overflow: 'auto',
        
  //       }} direction="column" alignContent="center" justifyContent="center" rowSpacing={3} columnSpacing={3} padding={3} >
  //       <Grid item>
  //           <Stack direction="column">
  //               <Typography variant='h4' sx={{ textAlign:'center'}}>Education</Typography>
  //               <Divider orientation="horizontal" variant="middle" />
  //           </Stack>
  //       </Grid>
  //       <Grid item container direction={{ xs:"column", md:"row" }} alignItems="stretch" justifyContent="space-around" rowSpacing={3} columnSpacing={3} padding={3}>  
  //       {pdata.map((itm, idx) =>
  //           <Grid item key={idx}>
  //           <Box sx={{  minWidth:1, padding:2 }} justifySelf="stretch">
  //               <Stack orientation="column" spacing={2} >
  //                   {itm.arr.map((it, ix) => {
  //                   console.log("loop", it.abc)
  //                   return(
  //                       <Stack orientation="column" key={ix}>
  //                           <Typography variant='h6'>{it.degree}</Typography>
  //                           <Typography variant="h5" >{it.title}</Typography>
  //                           {/* <BorderLinearProgress variant="determinate" value={it.value} color={(ix+idx)%2===0?'inherit':(ix+idx)%3===0?'success':'secondary'} /> */}
  //                           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection:'column' }}>
                        //     <Box minWidth={{ xs:'25%' }} >
                        //     <IconButton>
                        //         <SvgIcon fontSize='large'>
                        //         <svg width="800px" height="800px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        //             <g id="Flat">
                        //             <g id="Color">
                        //             <polygon fill="#212529" points="8.26 3 25.94 33.62 38.06 26.62 24.42 3 8.26 3"/>
                        //             <path d="M38.06,26.62l-7.21-12.5-3.72,6.44a21.53,21.53,0,0,0-7,3l5.8,10Z" fill="#111315"/>
                        //             <polygon fill="#dd051d" points="34.6 28.62 29.4 31.62 12.87 3 19.8 3 34.6 28.62"/>
                        //             <polygon fill="#212529" points="39.58 3 25.94 26.62 38.06 33.62 55.74 3 39.58 3"/>
                        //             <path d="M34.6,28.62l-6.06-10.5-1.42,2.46a21.44,21.44,0,0,0-3.46,1.1l5.74,9.94Z" fill="#a60416"/>
                        //             <path d="M43.86,23.58a21.46,21.46,0,0,0-14.17-3.45l-3.75,6.49,12.12,7Z" fill="#111315"/>
                        //             <polygon fill="#dd051d" points="51.13 3 34.6 31.62 29.4 28.62 44.2 3 51.13 3"/>
                        //             <path d="M34.6,31.62l5.74-9.94a21.41,21.41,0,0,0-6-1.55L29.4,28.62Z" fill="#a60416"/>
                        //             <circle cx="32" cy="41.5" fill="#fccd1d" r="19.5"/>
                        //             <circle cx="32" cy="41.5" fill="#f9a215" r="14.5"/>
                        //             <path d="M33.37,34l1.52,2.63a1.54,1.54,0,0,0,1.06.76L39,38a1.53,1.53,0,0,1,.85,2.56l-2.1,2.22a1.5,1.5,0,0,0-.4,1.22l.36,3a1.57,1.57,0,0,1-2.22,1.58l-2.81-1.27a1.6,1.6,0,0,0-1.32,0l-2.81,1.27A1.57,1.57,0,0,1,26.31,47l.36-3a1.5,1.5,0,0,0-.4-1.22l-2.1-2.22A1.53,1.53,0,0,1,25,38l3-.59a1.54,1.54,0,0,0,1.06-.76L30.63,34A1.59,1.59,0,0,1,33.37,34Z" fill="#fccd1d"/>
                        //             </g>
                        //             </g>
                        //         </svg>
                        //         </SvgIcon>
                        //     </IconButton>
                        // </Box>
  //                               <Box sx={{ width: '50%', mr: 1, justifySelf:'center', height:1/4 }}>
  //                                   {/* {BarShape(widthId=itm.width)} */}
  //                                   {/* <BarShape tits={it.abc} ty={it.a2} /> */}
  //                               {/* <BorderLinearProgress variant="determinate" value={it.value} color='phone_blue' /> */}
  //                               </Box>
  //                               <Box sx={{ minWidth: 35 }}>
  //                                   <Typography variant="body1" >{it.marks}</Typography>
  //                               </Box>
  //                           </Box>                            
  //                       </Stack>)}
  //                   )}
  //               </Stack>
  //           </Box>
  //           </Grid>
  //       )}
  //       </Grid>
  //   </Grid>
  // )
}

export default Education