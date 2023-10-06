import { Paper, Grid, Stack, Typography, Chip, Divider, Avatar,  } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useState, useEffect }  from 'react'
import { Timeline, TimelineItem, TimelineContent, TimelineOppositeContent, TimelineSeparator, TimelineConnector, TimelineDot, timelineContentClasses} from '@mui/lab';

import { JavaIcon, ReactIcon, PythonIcon, BookIcon, GuitarIcon, PianoIcon } from '../../images/SvgImages';

const listData = [
    {   id: 1,
        label: "Application Developer | FullTime",
        date: "7 Aug 2019 - 29 Oct 2020",
        content:"Comviva, Bangalore, India", 
        description: "End-to-End Development of Web Applications using Micro-Services architecture.",
        tags: [ { title:"Java", img:'img/java_logo.png' },{ title:"React", img:'img/react_logo.png' },{ title:"SpringFramework", img:'img/spring_logo_wh.png'}, ],
    },
    {   
        id:2,
        label: "Web Developer | WerkStudent",
        date: "1 Jun 2021 - 30 Nov 2021",
        content: "Lehrstuhl für Ressourcen- und Energie effiziente Produktions maschinen, FAU, Nürnberg, Germany", 
        description:"Development of common platform for sharing of resources among production industries in Germany.",
        tags: [ { title:"React", img:'img/react_logo.png' },{ title:"Mi UI", img:'img/mui_logo.png'}, { title:"TypeScript", img:'img/Typescript_logo.png'}],
    },
    {   
        id:3,
        label: "TA for Computer Vision | WerkStudent",
        date: "14 Apr 2022 - 31 Jul 2022",
        content: "Lehrstuhl für Informatik 5, FAU, Erlangen, Germany", 
        description: "Helping students hands on with CV techniques and algorithms in Python during the Summer Semester of 2022",
        tags: [ { title:"Python", img:'img/python_logo.png'},{ title:"OpenCV", img:'img/opencv_svg.png' }],
    },
    {   
        id:4,
        label: "TA in Algorithms and Programming | WerkStudent",
        date: "1 Oct 2022 - 31 Mar 2023",
        content: "Professur für Image Data Exploration and Analysis, FAU, Erlangen, Germany", 
        description: "Guiding students in their journey of Algorithms and Programming with Python. ",
        tags: [ { title:"Python", img:'img/python_logo.png'},{ title:"MS Office",img:'img/ms_logo_bl.png' }],
    },
    {   
        id:5,
        label: "Research Intern | WerkStudent",
        date: "1 Jan 2023 - 31 June 2023",
        content: "Fraunhofer IIS, Nürnberg, Germany", 
        description: "Designing Quantum compilers using deep reinforcement learning at Self Learning Systems group",
        tags: [ { title:"PyTorch", img:'img/pytorch_logo_black.png'},{ title:"Qiskit", img:'img/qiskit_logo.png'}],
    },
    {   
        id:6,
        label: "Research Intern | WerkStudent",
        date: "1 Aug 2023 - Ongoing",
        content: "International AudioLabs, Erlangen, Germany", 
        description: "Automatic Transcription of Piano music using Deep Learning",
        tags: [ { title:"PyTorch", img:'img/pytorch_logo_black.png' } ],
    }
]

function Experience() {

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
    <Grid  container sx={{  
        //  height: 350,  
        bgcolor: `${theme.palette.primary.light}`, 
        //color: `${theme.palette.primary.contrastText}`, 
        overflow: 'auto',
        
        
        }} direction="column" alignContent="center" justifyContent="center" spacing={{ xs: 2, md: 3 }} padding={{xs:0, md:2}} >
        
        <Grid item>
            <Stack direction="column" alignContent="center" justifyContent="center" >
                <Typography variant="h3" sx={{ textAlign: 'center' , color: `${theme.palette.primary.contrastText}`}} > Work Experience</Typography>
                <Divider variant="middle" orientation="horizontal" />
            </Stack>
        </Grid>
        <Grid item sx={{ marginBottom:4, contain:'layout' }}>
            
            <Timeline position="alternate" >
                { listData.sort((a,b)=>a.id<b.id?1:-1).map((itm, idx) => 
                <TimelineItem key={idx} >
                <TimelineOppositeContent sx={{ py:9}} >
                    <Typography variant="subtitle1" >
                        {itm.date}
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary" variant="outlined"/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent >
                    {/* <Paper elevation={4} sx={{ bgcolor:`${theme.palette.primary.main}`, padding:1,}}> */}
                    <Typography variant='h5'>
                        {itm.label}
                    </Typography>
                    <Typography variant='h6' sx={{color: `${theme.palette.primary.contrastText}`}}>{itm.content}</Typography>                    
                    <Typography variant='body1'>
                        {itm.description}
                    </Typography>
                    {/* <Stack direction="row" justifyContent={ idx%2===0?"flex-start":"flex-end"} > */}
                    <Grid item container justifyContent={ idx%2===0?"flex-start":"flex-end"} >

                        { itm.tags.map((chipItem, idn) => 
                        <Grid item key={idn} >
                            <Chip avatar={<Avatar src={process.env.PUBLIC_URL+`${chipItem.img}`}  alt={chipItem.title} />} label={chipItem.title} key={idn} sx={{ color: `${theme.palette.primary.contrastText}`,}} />
                            </Grid>
                        )}
                    </Grid>
                    {/* </Stack> */}
                    {/* </Paper> */}
                </TimelineContent>                  
            </TimelineItem>
                )}
            </Timeline>
            
        </Grid>
        {/* <Grid item>
            <Divider orientation={ isDesktop?"vertical":"horizontal"}  />
        </Grid>
        <Grid item>
            <Timeline position="alternate" >
                { listData.map((itm, idx) => 
                <TimelineItem key={idx}>
                <TimelineOppositeContent sx={{ py:6}} >
                    <Typography variant="subtitle2" >
                        {itm.date}
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary" variant="outlined"/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent >
                    <Typography variant='h6'>
                        {itm.label}
                    </Typography>
                    <Typography variant='body1'>
                        {itm.description}
                    </Typography>
                    <Stack direction="row" justifyContent={ idx%2===0?"flex-start":"flex-end"} >
                        { itm.tags.map((chipItem, idn) => 
                            <Chip label={chipItem} key={idn}/>
                        )}
                    </Stack>
                </TimelineContent>                  
            </TimelineItem>
                )}
            </Timeline>
        </Grid> */}
    </Grid>
  )
}

export default Experience