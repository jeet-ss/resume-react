
import {Grid, Typography, Card, Chip, CardMedia, CardHeader, CardContent, IconButton, CardActions, Collapse,  Stack, Divider,  } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import React from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';

import { projectsData } from '../../data/data';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  // transition: theme.transitions.create('transform', {
  //   duration: theme.transitions.duration.shortest,
  // }),
}));


const Project = ()  => {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    
  return (
    <Grid container   sx={{ 
      //maxHeight: 350,  
      bgcolor: `${theme.palette.primary.white}`,
      //textAlign: 'center',
      overflow: 'hidden',
      //overflowX: 'scroll',
      //minWidth: 0,

      }} direction="column" alignItems="center" justifyContent="center" rowSpacing={3} columnSpacing={3} padding={3}>
      <Grid item>
        <Stack direction="column">
          <Typography variant='h3'>My Projects</Typography>
          <Divider orientation="horizontal" variant="fullWidth"  />
        </Stack>
        
      </Grid>
      
      <Grid item container direction={{ xs:"column", md:"row" }} rowSpacing={1} columnSpacing={3}  padding={2} alignItems="center" justifyContent="space-between">
        {projectsData.map((itm, idx)=> {
          //console.log('in Projects')
           return(
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={{ maxWidth: 450, minWidth:250 }}  >
              <CardHeader title={itm.title} subheader={itm.info} />
              <CardMedia component="img" height="140" src={process.env.PUBLIC_URL  + `${itm.img}`} alt="green iguana" />
              <CardContent>
                <Typography variant='body1'  >@{itm.institute}</Typography>
                <Typography variant='body2'>under {itm.prof}</Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton href={itm.url}>
                  <DescriptionIcon />
                </IconButton>
                {itm.repo && 
                <IconButton href={itm.repo}>
                  <GitHubIcon />
                </IconButton>}
                <Stack direction="row" size="small" justifyContent="center">
                    {itm.tags &&
                      itm.tags.map((it, ix) =>
                      <Chip label={it} key={ix} size="small" />
                      )}
                  </Stack>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" >
                <CardContent>
                  <Typography paragraph>Description:</Typography>
                  <Typography variant="body2" >{itm.info2}</Typography>
                </CardContent>
              </Collapse>

            </Card>
          </Grid>  
        )})}
      </Grid>
      </Grid>
        )
}

export default Project