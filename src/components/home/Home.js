import { Grid, Stack, Typography  } from '@mui/material';
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
          height: 350,  
          bgcolor: `${theme.palette.primary.main}`, 
          color: `${theme.palette.primary.contrastText}`, 
          //textAlign: 'center',
          overflow: 'hidden',
          
          }} direction="row" alignContent="center" justifyContent="center" spacing={3} padding={2} >
            <Grid item>
              <img src={process.env.PUBLIC_URL+'img/profile.jpg'} height={200} width={200} alt='my pic' />
            </Grid>
            <Grid item className='home-title'> 
              <Stack direction="column">
                <Typography variant="h2">Hello!</Typography>
                <Typography variant="h2">I am Jeet Sen Sarma</Typography>
                <Typography variant="h3">AI Enthusiast / Software Developer</Typography>
              </Stack>    
            </Grid>
        </Grid>
            
        // </Paper>
        
    )
}

export default Home