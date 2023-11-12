import { Typography, Grid} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react'




const About = () => {
  const theme = useTheme(); 
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ 
      minHeight: 300,  
      bgcolor: `${theme.palette.primary.white}`,
      color: `${theme.palette.primary.highgreen}`,
      textAlign: 'center',
      overflow: 'auto',
      //minWidth: 0,
      }} direction="column" alignItems="center" justifyContent="center" padding={4} >
        <Grid item>
            <Typography variant='h4' paragraph >
            I am a highly motivated AI/ML researcher driven by a strong passion  <br/> for 
            crafting applications that address real-world challenges. <br/>
            I am committed to staying at the forefront of AI advancements and  <br/>
             I'm actively pursuing roles across diverse industries<br/>where AI can profoundly influence and 
             solve pertinent issues.
          </Typography>
          
          <Typography variant='h4' paragraph >
          I am wholeheartedly dedicated to the innovative process<br/> and the collective effort required to bring about positive change and progress.
          {/* Pursuing innovation and building a team to materialize new ideas is my prime objective in life */}
          </Typography>
          </Grid> 
          
          
    </Grid>
  )
}

export default About