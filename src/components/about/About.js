import { Typography, Grid} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react'




const About = () => {
  const theme = useTheme(); 
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ 
      minHeight: 300,  
      bgcolor: `${theme.palette.primary.white}`,
      textAlign: 'center',
      overflow: 'auto',
      //minWidth: 0,
      }} direction="column" alignItems="center" justifyContent="center" >
        <Grid item>
          {/* <Stack> */}
            <Typography variant='h4' paragraph  >
            My Research interest includes Music/Audio Processing, <br/> 
            Robotics and their implemenation for solving real life problems
          </Typography>
          
          {/* <br/> <br/>  */}
          
          <Typography variant='h4' paragraph >
          Pursuing innovation and building a team to materialize new ideas is my prime objective in life
          </Typography>
          {/* </Stack>  */}
          </Grid> 
          
          
    </Grid>
  )
}

export default About