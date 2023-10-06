
import {Grid, Typography, Card, Chip, CardMedia, CardHeader, CardContent, IconButton, CardActions, Collapse,  Stack, Divider, Accordion } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import React from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';

import { projectsData } from '../../data/data';

const ExpandMore = styled((props) => {
  const { expand, tits, ...other } = props;
  return ( <IconButton {...other} /> );
})(({ theme, expanded }) => ({
  transform: !expanded ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  // transition: theme.transitions.create('transform', {
  //   duration: theme.transitions.duration.shortest,
  // }),
}));


const Project = ()  => {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = React.useState(0);

  
  return (
    <Grid container   sx={{ 
      //maxHeight: 350,  
      bgcolor: `${theme.palette.primary.white}`,
      textAlign: 'center',
      overflow: 'auto',
      //overflowX: 'scroll',
      //minWidth: 0,

      }} direction="column" alignItems="center" justifyContent="center" rowSpacing={3} columnSpacing={3} padding={3}>
      <Grid item>
        <Stack direction="column">
          <Typography variant='h3' sx={{ color: `${theme.palette.primary.contrastText}`}}>My Projects</Typography>
          <Divider orientation="horizontal" variant="fullWidth"  />
        </Stack>
        
      </Grid>
      
      <Grid item container direction={{ xs:"column", md:"row" }}  rowSpacing={1} columnSpacing={5}  padding={2} alignItems="center" justifyContent="space-between">
        {projectsData.sort((a,b)=>a.id<b.id?1:-1).map((itm, idx)=> {
          //console.log('in Projects')
          
           return(
          <Grid item xs={12} sm={4} md={4} key={idx}  >
            <Card sx={{ display:'block',  height:'100%', overflow:'hidden', textOverflow:'ellipsis', bgcolor: `${theme.palette.primary.card}`, }}  >
              <CardHeader title={itm.title} subheader={itm.info} sx={{ textOverflow:'clip'}} />
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
                <Stack direction="row" size="small" justifyContent="center" spacing={1}>
                    {itm.tags &&
                      itm.tags.map((it, ix) =>
                      <Chip label={it} key={ix} size="small" />
                      )}
                </Stack>
                <ExpandMore
                  expand={activeIndex === itm.id}
                  tits = {itm.info2}
                  onClick={() => {activeIndex===itm.id ? setActiveIndex(0) : setActiveIndex(itm.id)}}
                  aria-expanded={activeIndex === itm.id}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={activeIndex === itm.id} timeout="auto" >
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