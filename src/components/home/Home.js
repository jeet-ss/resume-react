import { Grid, Stack, Typography, Avatar  } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useState, useEffect }  from 'react'


const Home = ()  => {
    const theme = useTheme(); 
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        if (window.innerWidth > 769) {
          setIsDesktop(true);
          setIsMobile(false);
        } else {
          setIsMobile(true);
          setIsDesktop(false);
        }
      }, []);
    return (
        // <Paper className='home-paper' elevation={3} sx={{
        //      bgcolor: `${theme.palette.primary.light}`,
        //      height: 350,
        //      color: `${theme.palette.primary.contrastText}`,
        //       }}>            
        <Grid  container sx={{ 
          minHeight: 350,  
          bgcolor: `${theme.palette.primary.dark}`, 
          color: `${theme.palette.primary.contrastText}`, 
          //textAlign: 'center',
          overflow: 'auto',
          
          }} direction="row" alignContent="center" justifyContent="center" spacing={3} padding={5} >
            <Grid item>
              {/* <img src={process.env.PUBLIC_URL+'img/profile.jpg'} height={200} width={200} alt='my pic' /> */}
              <Avatar src={process.env.PUBLIC_URL+'img/profile2.jpg' } sx={{ width: 200, height: 200, boxShadow: 4  }} alt='Jeet' >JSS</Avatar>
            </Grid>
            <Grid item className='home-title'> 
              <Stack direction="column">
                <Typography variant="h2">Hello!</Typography>
                <Typography variant="h2">I am Jeet Sen Sarma</Typography>
                <Typography variant="h3">MS in Artificial Intelligence</Typography>
              </Stack>    
            </Grid>
        </Grid>
            
        // </Paper>
        
    )
}

export default Home